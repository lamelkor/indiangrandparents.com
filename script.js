// Language Toggle Functionality
let currentLang = 'en';

const langToggle = document.getElementById('langToggle');
const translatableElements = document.querySelectorAll('[data-en][data-hi]');

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    
    translatableElements.forEach(element => {
        const text = element.getAttribute(`data-${currentLang}`);
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else {
            element.textContent = text;
        }
    });
    
    // Update button text
    langToggle.textContent = currentLang === 'en' ? 'हिंदी' : 'English';
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
});

// FAQ Accordion Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Show success message (in production, you'd send this to a backend)
        formStatus.className = 'form-status success';
        formStatus.textContent = currentLang === 'en' 
            ? 'Thank you for your message! We will get back to you soon.'
            : 'आपके संदेश के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
        
        // Log form data (for development)
        console.log('Form submitted:', formData);
    });
}
