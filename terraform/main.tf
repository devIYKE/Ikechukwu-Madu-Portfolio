# Bucket to store my personal website

resource "google_storage_bucket" "website" {
    name     = "my-personal-website-by-ikechukwu"
    location = "US"
    website {
      main_page_suffix = "index.html"
      not_found_page   = "index.html"
    }

    # Set this to false to allow ACLs to work
    uniform_bucket_level_access = false
    
    # Force deletion of bucket even when not empty
    force_destroy = true
}

# Make new object public
# resource "google_storage_bucket_access_control" "public_rule" {
#     bucket = google_storage_bucket.website.name
#     role   = "READER"
#     entity = "allUsers"
# }
resource "google_storage_bucket_iam_member" "public_read" {
    bucket = google_storage_bucket.website.name
    role   = "roles/storage.objectViewer"
    member = "allUsers"
}

# Upload the html file to the bucket
resource "google_storage_bucket_object" "index_html" {
  name   = "index.html"
  source = "../index.html"
  bucket = google_storage_bucket.website.name
  content_type = "text/html"
}

# Upload CSS file to the bucket
resource "google_storage_bucket_object" "css" {
  name         = "css/style.css"
  source       = "../css/style.css"
  bucket       = google_storage_bucket.website.name
  content_type = "text/css"
}

# Upload JavaScript file to the bucket
resource "google_storage_bucket_object" "js" {
  name         = "js/main.js"
  source       = "../js/main.js"
  bucket       = google_storage_bucket.website.name
  content_type = "application/javascript"
}

# Upload profile image to the bucket
resource "google_storage_bucket_object" "profile_image" {
  name         = "assets/images/profile-picture.jpg"
  source       = "../assets/images/profile-picture.jpg"
  bucket       = google_storage_bucket.website.name
  content_type = "image/jpeg"
}

# Reserve a static external IP address
resource "google_compute_global_address" "website_ip" {
   name = "my-personal-website-lb-ip" 
}

# Create a DNS zone
resource "google_dns_managed_zone" "dns_zone" {
  name        = "terraform-gcp-portfolio"
  dns_name    = "isamuelm.cloud."  # Note the trailing dot
  description = "DNS zone for my personal website"
}

# Add the ip to the DNS zone
resource "google_dns_record_set" "website" {
  name = "website.${google_dns_managed_zone.dns_zone.dns_name}"
    type = "A"
    ttl  = 300
    managed_zone = google_dns_managed_zone.dns_zone.name
    rrdatas = [google_compute_global_address.website_ip.address]
}

# Add the bucket as a CDN backend
resource "google_compute_backend_bucket" "website_backend" {
  name = "website-bucket"  
    bucket_name = google_storage_bucket.website.name
    description = "contains files needed for my personal website"
    enable_cdn = true
}

# GCP URL MAP
resource "google_compute_url_map" "website" {
    name = "website-url-map"  
    default_service = google_compute_backend_bucket.website_backend.id
    host_rule {
        hosts = ["*"]
        path_matcher = "allpaths"
    }
    path_matcher {
        name = "allpaths"
        default_service = google_compute_backend_bucket.website_backend.id
    } 
}

# GCP HTTP Proxy
resource "google_compute_target_http_proxy" "website" {
    name = "website-target-proxy"  
    url_map = google_compute_url_map.website.self_link
}

# GCP forwarding rule
resource "google_compute_global_forwarding_rule" "default" {
  name = "website-forwarding-rule" 
  load_balancing_scheme = "EXTERNAL" 
  ip_address = google_compute_global_address.website_ip.address 
  ip_protocol = "TCP" 
  port_range = "80" 
  target = google_compute_target_http_proxy.website.self_link
} 

# Add these resources at the end of your file
resource "google_storage_object_acl" "index_acl" {
  bucket = google_storage_bucket.website.name
  object = google_storage_bucket_object.index_html.name
  predefined_acl = "publicRead"
}

resource "google_storage_object_acl" "css_acl" {
  bucket = google_storage_bucket.website.name
  object = google_storage_bucket_object.css.name
  predefined_acl = "publicRead"
}

resource "google_storage_object_acl" "js_acl" {
  bucket = google_storage_bucket.website.name
  object = google_storage_bucket_object.js.name
  predefined_acl = "publicRead"
}

resource "google_storage_object_acl" "profile_acl" {
  bucket = google_storage_bucket.website.name
  object = google_storage_bucket_object.profile_image.name
  predefined_acl = "publicRead"
}

# Add this output to get the website URL
output "bucket_website_url" {
  value = "https://storage.googleapis.com/${google_storage_bucket.website.name}/index.html"
}