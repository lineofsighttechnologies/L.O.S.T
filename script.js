document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow-container .slide');
    const heroHeading = document.getElementById('hero-heading');
    const heroParagraph = document.getElementById('hero-paragraph');
    let currentSlide = 0;
    let slideInterval; // To store the interval ID

    const heroContentData = [
        { heading: "Welcome to Line of Sight Technologies", paragraph: "We provide complete IT and security solutions — from IT support and networking to CCTV, access control, and more." },
        { heading: "IT Support and Consulting", paragraph: "Let our experts act as your dedicated IT department, keeping your business running smoothly with proactive support." },
        { heading: "Professional System Administration", paragraph: "Optimize your servers, backups, and IT systems with professional system administration services." },
        { heading: "Secure Networking Solutions", paragraph: "Stay connected with secure, efficient, and future-proof networking solutions tailored for your business." },
        { heading: "CCTV Surveillance Solutions", paragraph: "Protect your property with cutting-edge CCTV systems, remote monitoring, and expert installations." },
        { heading: "Modern Web Development", paragraph: "Secure your premises with reliable, modern biometric entry systems for maximum peace of mind." },
        { heading: "Biometric and Card Access Control", paragraph: "Secure your workplace with biometric and card-based access control systems." },
        { heading: "IT Tutoring and Training", paragraph: "We help students understand difficult IT concepts, complete assignments, and projects — while also offering training for IT professionals." },
        { heading: "Hardware and Software Procurement", paragraph: "Get high-quality IT hardware and licensed software at the best value to power your operations." },
    ];

    function showSlide(index) {
        // Hide all slides and remove active class
        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        // Show the current slide and add active class
        if (slides[index]) {
            slides[index].classList.add('active');
        }
        
        // Update the hero text
        if (heroContentData[index]) {
            heroHeading.textContent = heroContentData[index].heading;
            heroParagraph.textContent = heroContentData[index].paragraph;
        }
    }

    function startSlideshow(initialDelay) {
        // Clear any existing interval
        clearInterval(slideInterval);

        // Set the first transition delay
        setTimeout(() => {
            nextSlide(); // Move to the second slide
            // After the first transition, set the regular interval for subsequent slides
            slideInterval = setInterval(nextSlide, 7500); // 5 seconds for subsequent slides
        }, initialDelay);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Initial display of the first slide and text
    if (slides.length > 0) {
        showSlide(currentSlide);
        startSlideshow(10000); // 10 seconds for the first transition
    }
});

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('back-to-top');

    // Check if the button element exists on the page before adding listeners
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

