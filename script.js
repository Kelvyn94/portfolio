/*
================================================================================
  Kelvin Njoroge — Full-Stack Developer
  JavaScript
================================================================================
*/

// ============================================
// MOBILE MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
let scrollY = 0;

hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('open');

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

function openMenu() {
    scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    mobileMenu.classList.add('open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo({ top: scrollY, behavior: 'instant' });
}

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;

        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// INTERSECTION OBSERVER — FADE IN ANIMATIONS
// ============================================

const fadeElements = document.querySelectorAll(
    '.skill-card, .work-card, .blog-card, .about-content, .hero-content, .hero-stats'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// SKILL BAR ANIMATION — Trigger on scroll
// ============================================

const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.3 });

skillBars.forEach(bar => skillObserver.observe(bar));

// ============================================
// CONTACT FORM VALIDATION
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let isValid = true;

        // Validate Name
        if (!name.value.trim()) {
            setError(name, 'nameError');
            isValid = false;
        } else {
            clearError(name, 'nameError');
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
            setError(email, 'emailError');
            isValid = false;
        } else {
            clearError(email, 'emailError');
        }

        // Validate Message
        if (!message.value.trim()) {
            setError(message, 'messageError');
            isValid = false;
        } else {
            clearError(message, 'messageError');
        }

        if (isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1500);
        }
    });
}

function setError(input, errorId) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.style.display = 'block';
    }
}

function clearError(input, errorId) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// ============================================
// REAL-TIME VALIDATION ON INPUT
// ============================================

document.querySelectorAll('.form-group input, .form-group textarea').forEach(input => {
    input.addEventListener('blur', () => {
        const formGroup = input.closest('.form-group');
        const errorId = input.id + 'Error';

        if (input.id === 'name' && !input.value.trim()) {
            setError(input, errorId);
        } else if (input.id === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!input.value.trim() || !emailPattern.test(input.value.trim())) {
                setError(input, errorId);
            } else {
                clearError(input, errorId);
            }
        } else if (input.id === 'message' && !input.value.trim()) {
            setError(input, errorId);
        } else {
            clearError(input, errorId);
        }
    });
});

// ============================================
// KEYBOARD NAVIGATION — Close mobile menu on Escape
// ============================================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
    }
});

// ============================================
// CONSOLE WELCOME
// ============================================

console.log('%c🚀 Kelvin Njoroge — Full-Stack Developer', 'font-size: 20px; font-weight: bold; color: #6C63FF;');
console.log('%c💻 Let\'s build something amazing together!', 'font-size: 14px; color: #9898A8;');
console.log('%c📧 kmacharia584@gmail.com', 'font-size: 14px; color: #9898A8;');
console.log('%c🐙 github.com/Kelvyn94', 'font-size: 14px; color: #9898A8;');
