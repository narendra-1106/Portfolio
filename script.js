document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('formStatus');
    const submitBtn = contactForm.querySelector('button[type="submit"]');

    // Form validation
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validateForm = () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name) {
            showError('Please enter your name');
            return false;
        }
        if (!email || !validateEmail(email)) {
            showError('Please enter a valid email address');
            return false;
        }
        if (!message || message.length < 10) {
            showError('Please enter a message (at least 10 characters)');
            return false;
        }
        return true;
    };

    const showError = (message) => {
        formStatus.textContent = message;
        formStatus.className = 'status-message error';
    };

    const showSuccess = (message) => {
        formStatus.textContent = message;
        formStatus.className = 'status-message success';
    };

    // Handle Form Submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Disable submit button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameInput.value.trim(),
                    email: emailInput.value.trim(),
                    message: messageInput.value.trim(),
                }),
            });

            if (response.ok) {
                showSuccess('✓ Message sent successfully! I\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;

                // Clear success message after 5 seconds
                setTimeout(() => {
                    formStatus.className = 'status-message';
                }, 5000);
            } else {
                showError('Failed to send message. Please try again.');
                submitBtn.textContent = 'Send Message';
                submitBtn.disabled = false;
            }
        } catch (error) {
            // Fallback for development without backend
            console.log('API not available, showing simulated response');
            showSuccess(`✓ Message received! (Demo mode - backend not running)`);
            contactForm.reset();
            submitBtn.textContent = 'Send Message';
            submitBtn.disabled = false;

            setTimeout(() => {
                formStatus.className = 'status-message';
            }, 5000);
        }
    });

    // Smooth scroll to sections with precise offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const target = document.querySelector(href);

            if (href !== '#' && target) {
                e.preventDefault();

                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active link styling
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});