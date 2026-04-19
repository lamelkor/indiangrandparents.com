// ============================================
// TRANSLATION SYSTEM
// ============================================

let translations = {};
let currentLang = localStorage.getItem('language') || 'en';

// Load translation files
async function loadTranslations() {
    try {
        const enResponse = await fetch('translations/en.json');
        const hiResponse = await fetch('translations/hi.json');
        
        translations.en = await enResponse.json();
        translations.hi = await hiResponse.json();
        
        // Apply translations on page load
        applyTranslations();
    } catch (error) {
        console.error('Error loading translations:', error);
    }
}

// Get nested translation value using dot notation (e.g., "nav.home")
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    
    return value;
}

// Apply translations to all elements with data-i18n attribute
function applyTranslations() {
    // Update page title and meta description
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', t('meta.description'));
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
    
    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Translate all elements with data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        const translation = t(key);
        element.setAttribute('aria-label', translation);
    });
    
    // Update language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? 'हिंदी' : 'English';
    }
}

// Toggle language
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('language', currentLang);
    applyTranslations();
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTranslations();
    
    // Setup language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});


// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================

const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply saved theme on page load
document.documentElement.setAttribute('data-theme', currentTheme);
if (themeIcon) {
    updateThemeIcon(currentTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Cycle through themes: light -> dark -> high-contrast -> light
        if (currentTheme === 'light') {
            currentTheme = 'dark';
        } else if (currentTheme === 'dark') {
            currentTheme = 'high-contrast';
        } else {
            currentTheme = 'light';
        }
        
        // Apply theme
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeIcon || !themeToggle) return;
    
    if (theme === 'light') {
        themeIcon.textContent = '☀️';
        themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    } else if (theme === 'dark') {
        themeIcon.textContent = '🌙';
        themeToggle.setAttribute('aria-label', 'Switch to high contrast mode');
    } else {
        themeIcon.textContent = '⚡';
        themeToggle.setAttribute('aria-label', 'Switch to light mode');
    }
}


// ============================================
// FAQ ACCORDION FUNCTIONALITY
// ============================================

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            const btn = item.querySelector('.faq-question');
            if (btn) {
                btn.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});


// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================

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


// ============================================
// KEYBOARD ACCESSIBILITY FOR CARDS
// ============================================

const interactiveCards = document.querySelectorAll('.resource-card, .event-card');

interactiveCards.forEach(card => {
    card.addEventListener('keydown', (e) => {
        // Activate card on Enter or Space key
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            card.click();
        }
    });
    
    // Add click handler for future interactivity
    card.addEventListener('click', () => {
        // Placeholder for future functionality (e.g., modal, navigation)
        console.log('Card clicked:', card.getAttribute('aria-label'));
    });
});


// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    // Check if form was just submitted (Formspree redirects back)
    if (window.location.hash === '#contact' && document.referrer.includes('formspree.io')) {
        formStatus.className = 'form-status success';
        formStatus.textContent = t('contact.form.success');
        
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
        submitBtn.textContent = t('contact.form.sending');
        
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
                formStatus.textContent = t('contact.form.success');
                
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
