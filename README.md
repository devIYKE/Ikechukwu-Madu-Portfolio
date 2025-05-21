# Ikechukwu Samuel Madu - Portfolio Website

A professional portfolio website showcasing my skills and experience as a Cloud & DevOps Engineer, deployed on Google Cloud Platform using Terraform.

## Project Structure

1. **index.html** - The main HTML file containing the website structure.
2. **css/style.css** - The CSS file for styling the website.
3. **js/main.js** - The JavaScript file for interactive features.
4. **assets/images/** - Directory containing profile photo and other images.
5. **terraform/** - Infrastructure as Code files for GCP deployment.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Interactive elements powered by JavaScript
- Professional layout showcasing skills, experience, and projects
- Contact form for potential employers or clients
- Smooth scrolling navigation
- Modern animations and transitions
- Cloud-hosted with global content delivery (CDN)
- Deployed using Infrastructure as Code principles

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Cloud Infrastructure**: Google Cloud Platform (GCP)
- **Infrastructure as Code**: Terraform
- **CDN & Load Balancing**: Google Cloud CDN and Load Balancing
- **Storage**: Google Cloud Storage
- **DNS Management**: Google Cloud DNS
- **Version Control**: Git/GitHub

## GCP Infrastructure

This portfolio website is deployed on Google Cloud Platform using the following resources:

- **Storage Bucket**: Hosts the static website files with proper content types
- **Cloud CDN**: Delivers content from edge locations for faster global access
- **Load Balancer**: Routes traffic and enables HTTPS
- **Static IP**: Provides a dedicated IP address for the website
- **DNS Zone**: Manages the domain configuration with A records

## Deployment

### Prerequisites
- Google Cloud SDK installed and configured
- Terraform installed
- GCP project with required APIs enabled
- A domain name (if using custom domain)

### Deployment Steps
1. Clone this repository
2. Navigate to the terraform directory:
   ```
   cd terraform
   ```
3. Initialize Terraform:
   ```
   terraform init
   ```
4. Preview changes:
   ```
   terraform plan
   ```
5. Deploy the infrastructure:
   ```
   terraform apply
   ```

### Accessing the Website
The website can be accessed through multiple URLs:
- Direct bucket URL: https://storage.googleapis.com/my-personal-website-by-ikechukwu/index.html
- Load balancer IP: http://[LOAD_BALANCER_IP]/
- Custom domain: http://website.isamuelm.cloud/ (after DNS propagation)

## Local Development

To work on this website locally:

1. Clone this repository
2. Open index.html in your browser
3. Make changes to HTML, CSS, or JavaScript files
4. Refresh browser to see changes

## Future Enhancements

- HTTPS support with SSL certificates
- CI/CD pipeline for automatic deployment
- Blog section with content management
- Dark mode toggle
- Performance optimizations
- Monitoring and analytics integration

## DevOps Showcase

This project demonstrates modern DevOps practices:
- Infrastructure as Code with Terraform
- Cloud-native architecture
- Versioned infrastructure
- Scalable web hosting
- Global content delivery

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries, please reach out to me at:
- Email: iykemadu99@gmail.com
- LinkedIn: [Ikechukwu Madu](https://www.linkedin.com/in/ikechukwu-madu-14790917b/)
- GitHub: [devIYKE](https://github.com/devIYKE)