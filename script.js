// Language Toggle Functionality
let currentLang = 'en';

const langSelect = document.getElementById('langSelect');
const translatableElements = document.querySelectorAll('[data-en]');

if (langSelect) {
    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        
        translatableElements.forEach(element => {
            const text = element.getAttribute(`data-${currentLang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = currentLang;
    });
}

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

// Contact Form Handling - Fallback for non-AJAX
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    // Check if form was just submitted (Formspree redirects back)
    if (window.location.hash === '#contact' && document.referrer.includes('formspree.io')) {
        formStatus.className = 'form-status success';
        formStatus.textContent = currentLang === 'en' 
            ? 'Thank you for your message! We will get back to you soon.'
            : 'आपके संदेश के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।';
        
        setTimeout(() => {
            formStatus.style.display = 'none';
            window.history.replaceState(null, null, ' ');
        }, 8000);
    }
    
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'भेजा जा रहा है...';
        
        try {
            const formData = new FormData(contactForm);
            
            const response = await fetch('https://formspree.io/f/mzdygpgq', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                // Show success message
                formStatus.className = 'form-status success';
                formStatus.textContent = currentLang === 'en' 
                    ? 'Thank you for your message! We will get back to you soon.'
                    : 'आपके संदेश के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।';
                
                // Reset form
                contactForm.reset();
            } else {
                const data = await response.json();
                
                // If form not found, fall back to regular form submission
                if (response.status === 404) {
                    console.log('Form not found via AJAX, submitting normally...');
                    contactForm.submit();
                    return;
                }
                
                throw new Error(data.error || 'Form submission failed');
            }
        } catch (error) {
            // If AJAX fails, try regular form submission
            console.log('AJAX failed, trying regular submission...', error);
            contactForm.submit();
            return;
        } finally {
            // Reset button
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            
            // Hide message after 8 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 8000);
        }
    });
}

