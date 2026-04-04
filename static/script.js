document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Scrolled Background
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Hamburger Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinksList = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinksList.classList.toggle('active');
        });
    }

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinksList.classList.remove('active');
        });
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    const faders = document.querySelectorAll('.fade-in');
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 4. Update Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active');
            }
        });
    });

    // 5. Contact Form Submission (Fetch API to Flask Backend)
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    const btnText = document.querySelector('.btn-text');
    const loader = document.querySelector('.loader');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // UI Loading state
            btnText.classList.add('hidden');
            loader.classList.add('visible');
            submitBtn.disabled = true;
            formMessage.classList.add('hidden');
            formMessage.className = 'hidden';

            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (response.ok) {
                    // Success
                    contactForm.reset();
                    formMessage.textContent = "Thank you! Your message has been sent successfully.";
                    formMessage.classList.remove('hidden');
                    formMessage.classList.add('msg-success');
                } else {
                    // Server Error
                    throw new Error(result.error || 'Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
                formMessage.textContent = "Oops! Something went wrong. Please try again later.";
                formMessage.classList.remove('hidden');
                formMessage.classList.add('msg-error');
            } finally {
                // Reset UI state
                btnText.classList.remove('hidden');
                loader.classList.remove('visible');
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.classList.add('hidden');
                }, 5000);
            }
        });
    }
});
