document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slideshow-container .slide');
    const heroHeading = document.getElementById('hero-heading');
    const heroParagraph = document.getElementById('hero-paragraph');
    let currentSlide = 0;
    let slideInterval; // To store the interval ID

    const heroContentData = [
        { heading: "Welcome to Line of Sight Technologies", paragraph: "At Line of Sight Technologies, we are committed to safeguarding your home and business with state-of-the-art CCTV solutions tailored to your specific needs." },
        { heading: "Professional CCTV Installation and Repair", paragraph: "Expert installations and repairs by certified technicians — trusted hands for total security." },
        { heading: "24/7 Control Room Monitoring", paragraph: "Advanced surveillance systems that keep your premises secure and under constant watch." },
        { heading: "Remote Monitoring On-the-Go", paragraph: "Access live camera feeds from your phone, wherever you are — total peace of mind." },
        { heading: "Networking Solutions", paragraph: "We design and deploy structured networks for IT systems — from small businesses to enterprise environments." },
        { heading: "Advanced Biometric Doors", paragraph: "Secure your premises with reliable, modern biometric entry systems for maximum peace of mind." },
        { heading: "Affordable Protection for Every Home", paragraph: "Quality surveillance systems that fit your budget — because peace of mind shouldn’t cost a fortune." },
        { heading: "Knowledge That Empowers", paragraph: "We provide training and support to ensure you're in full control of your systems." },
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

