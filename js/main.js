document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const navbarHeight = document.querySelector('header').offsetHeight;
            
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });
    
    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });
    
    // Add animation classes and observers
    document.querySelectorAll('.timeline-item, .skill-category, .education-item').forEach(item => {
        item.classList.add('hidden');
        observer.observe(item);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hamburger.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
        }
        
        .hamburger.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
        }
    `;
    document.head.appendChild(style);
    
    // Form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would normally send this data to a server
            // For now, just show a success message
            alert(`Thank you for your message, ${name}!\nI'll get back to you soon at ${email}.`);
            contactForm.reset();
        });
    }
});




// document.addEventListener('DOMContentLoaded', function() {
//     // Smooth scrolling for navigation links
//     const navLinks = document.querySelectorAll('.nav-links a');
    
//     for (const link of navLinks) {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);
//             const navbarHeight = document.querySelector('.navbar').offsetHeight;
            
//             window.scrollTo({
//                 top: targetElement.offsetTop - navbarHeight,
//                 behavior: 'smooth'
//             });
//         });
//     }
    
//     // Add fixed class to navbar when scrolling
//     const navbar = document.querySelector('.navbar');
//     window.addEventListener('scroll', function() {
//         if (window.scrollY > 50) {
//             navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
//             navbar.style.background = 'rgba(255, 255, 255, 0.95)';
//         } else {
//             navbar.style.boxShadow = 'none';
//             navbar.style.background = 'white';
//         }
//     });

//     // Add animation to timeline items and skill categories
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate');
//             }
//         });
//     }, { threshold: 0.1 });

//     document.querySelectorAll('.timeline-item, .skill-category, .project-card').forEach(item => {
//         observer.observe(item);
//     });

//     // Mobile menu toggle functionality
//     const setupMobileMenu = () => {
//         // Add mobile menu button if it doesn't exist
//         if (!document.querySelector('.mobile-menu-btn')) {
//             const navbar = document.querySelector('.navbar .container');
//             const mobileBtn = document.createElement('div');
//             mobileBtn.className = 'mobile-menu-btn';
//             mobileBtn.innerHTML = '<span></span><span></span><span></span>';
//             navbar.appendChild(mobileBtn);
            
//             mobileBtn.addEventListener('click', function() {
//                 const navLinks = document.querySelector('.nav-links');
//                 this.classList.toggle('active');
//                 navLinks.classList.toggle('active');
//             });
//         }
//     };

//     // Handle responsive design changes
//     const handleResponsive = () => {
//         const windowWidth = window.innerWidth;
        
//         if (windowWidth <= 768) {
//             setupMobileMenu();
//         }
//     };

//     // Initialize responsive functionality
//     handleResponsive();
//     window.addEventListener('resize', handleResponsive);

//     // Add CSS for animations that we'll toggle with JavaScript
//     const style = document.createElement('style');
//     style.textContent = `
//         .timeline-item, .skill-category, .project-card {
//             opacity: 0;
//             transform: translateY(20px);
//             transition: opacity 0.5s ease, transform 0.5s ease;
//         }
//         .timeline-item.animate, .skill-category.animate, .project-card.animate {
//             opacity: 1;
//             transform: translateY(0);
//         }
//         .timeline-item:nth-child(odd) {
//             transform: translateX(-20px);
//         }
//         .timeline-item:nth-child(even) {
//             transform: translateX(20px);
//         }
//         .timeline-item.animate:nth-child(odd),
//         .timeline-item.animate:nth-child(even) {
//             transform: translateX(0);
//         }
        
//         @media (max-width: 768px) {
//             .mobile-menu-btn {
//                 display: flex;
//                 flex-direction: column;
//                 justify-content: space-between;
//                 width: 30px;
//                 height: 20px;
//                 cursor: pointer;
//             }
            
//             .mobile-menu-btn span {
//                 display: block;
//                 height: 3px;
//                 width: 100%;
//                 background-color: var(--primary-color);
//                 transition: all 0.3s ease;
//             }
            
//             .mobile-menu-btn.active span:nth-child(1) {
//                 transform: translateY(8px) rotate(45deg);
//             }
            
//             .mobile-menu-btn.active span:nth-child(2) {
//                 opacity: 0;
//             }
            
//             .mobile-menu-btn.active span:nth-child(3) {
//                 transform: translateY(-8px) rotate(-45deg);
//             }
            
//             .nav-links {
//                 position: absolute;
//                 top: 60px;
//                 left: 0;
//                 right: 0;
//                 flex-direction: column;
//                 background: white;
//                 padding: 0;
//                 height: 0;
//                 overflow: hidden;
//                 transition: all 0.3s ease;
//                 box-shadow: 0 5px 10px rgba(0,0,0,0.1);
//             }
            
//             .nav-links.active {
//                 height: auto;
//                 padding: 20px 0;
//             }
            
//             .nav-links li {
//                 margin: 10px 0;
//                 text-align: center;
//             }
//         }
//     `;
//     document.head.appendChild(style);
    
//     // Add typing effect to the hero heading
//     const heroHeading = document.querySelector('.hero-content h1');
//     if (heroHeading) {
//         const originalText = heroHeading.textContent;
//         heroHeading.textContent = '';
        
//         let i = 0;
//         const typeEffect = setInterval(() => {
//             if (i < originalText.length) {
//                 heroHeading.textContent += originalText.charAt(i);
//                 i++;
//             } else {
//                 clearInterval(typeEffect);
//             }
//         }, 100);
//     }
    
//     // Add skill progress bars
//     document.querySelectorAll('.skill-category ul li').forEach(skill => {
//         // Create a random percentage between 70 and 95 for demonstration
//         const percentage = Math.floor(Math.random() * 25) + 70;
        
//         const progressBar = document.createElement('div');
//         progressBar.className = 'skill-progress';
//         progressBar.innerHTML = `
//             <div class="skill-progress-bar">
//                 <div class="skill-progress-fill" style="width: 0%"></div>
//             </div>
//             <span class="skill-progress-percentage">${percentage}%</span>
//         `;
        
//         skill.appendChild(progressBar);
        
//         // Animate progress bars when they come into view
//         observer.observe(skill);
        
//         // When the skill comes into view, animate its progress bar
//         skill.addEventListener('animationstart', () => {
//             const progressFill = skill.querySelector('.skill-progress-fill');
//             if (progressFill) {
//                 setTimeout(() => {
//                     progressFill.style.width = `${percentage}%`;
//                 }, 300);
//             }
//         });
//     });
    
//     // Add CSS for skill progress bars
//     const progressStyles = document.createElement('style');
//     progressStyles.textContent = `
//         .skill-progress {
//             display: flex;
//             align-items: center;
//             margin-top: 5px;
//         }
        
//         .skill-progress-bar {
//             flex: 1;
//             height: 6px;
//             background-color: #e9ecef;
//             border-radius: 3px;
//             overflow: hidden;
//             margin-right: 10px;
//         }
        
//         .skill-progress-fill {
//             height: 100%;
//             background-color: var(--primary-color);
//             border-radius: 3px;
//             transition: width 1s ease;
//         }
        
//         .skill-progress-percentage {
//             font-size: 0.8rem;
//             color: var(--primary-color);
//             font-weight: bold;
//         }
//     `;
//     document.head.appendChild(progressStyles);
// });