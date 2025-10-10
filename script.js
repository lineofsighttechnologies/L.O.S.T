// ============================================
// HERO SECTION SLIDESHOW
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const heroHeading = document.getElementById('hero-heading');
    const heroParagraph = document.getElementById('hero-paragraph');
    let currentSlide = 0;

    // Content for each slide
    const slideContent = [
        {
            heading: "Welcome to Line of Sight Technologies",
            paragraph: "Your trusted partner for comprehensive IT solutions and security systems in Zimbabwe."
        },
                {
            heading: "Advanced CCTV Surveillance",
            paragraph: "State-of-the-art security camera systems with remote monitoring and maintenance."
        },
        {
            heading: "Expert IT Support & Consulting",
            paragraph: "Professional ICT management and strategic consulting to keep your business running smoothly."
        },
        {
            heading: "Professional System Administration",
            paragraph: "Reliable server management, Active Directory, and virtualization solutions tailored to your needs."
        },
        {
            heading: "Secure Network Solutions",
            paragraph: "Robust network design, deployment, and management for seamless connectivity."
        },

        {
            heading: "Modern Web Development",
            paragraph: "Stunning, responsive websites built with the latest technologies to elevate your online presence."
        },
        {
            heading: "Biometric Access Control",
            paragraph: "Cutting-edge fingerprint and card access systems to secure your premises."
        },
        {
            heading: "IT Training & Tutoring",
            paragraph: "Academic support and professional training to enhance your ICT skills and knowledge."
        },
        {
            heading: "Hardware & Software Solutions",
            paragraph: "Quality IT equipment and licensed software procurement for optimal business performance."
        }
    ];

    function showSlide(n) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show current slide
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');

        // Update text content with fade effect
        if (heroHeading && heroParagraph) {
            heroHeading.style.opacity = '0';
            heroParagraph.style.opacity = '0';

            setTimeout(() => {
                heroHeading.textContent = slideContent[currentSlide].heading;
                heroParagraph.textContent = slideContent[currentSlide].paragraph;
                heroHeading.style.opacity = '1';
                heroParagraph.style.opacity = '1';
            }, 300);
        }
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Initialize first slide
    showSlide(0);

    // Auto advance slides every 5 seconds
    setInterval(nextSlide, 5000);
});

// ============================================
// MOBILE NAVIGATION MENU
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const dropdowns = document.querySelectorAll('.dropdown');
    const body = document.body;

    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('nav-overlay');
    document.body.appendChild(overlay);

    // Toggle mobile menu
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            
            // Update aria-expanded attribute
            const isExpanded = navLinks.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Close menu when overlay is clicked
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
        
        // Close all dropdowns
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
    });

    // Handle dropdown toggles on mobile
    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
        
        if (dropdownToggle) {
            dropdownToggle.addEventListener('click', function(e) {
                // Only prevent default on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Close mobile menu when clicking on a non-dropdown link
    const navLinksItems = navLinks.querySelectorAll('a:not(.dropdown-toggle)');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768) {
                // Reset mobile menu on desktop
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                overlay.classList.remove('active');
                body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
                
                // Remove active class from dropdowns
                dropdowns.forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
        }, 250);
    });
});

// ============================================
// BACK TO TOP BUTTON
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        // Scroll to top when button is clicked
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or if it's for a modal/tab
            if (href === '#' || href.length <= 1) return;
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 100; // Adjust based on your fixed header height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Observe service cards for fade-in animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Observe why-us items
    const whyUsItems = document.querySelectorAll('.why-us-item');
    whyUsItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});