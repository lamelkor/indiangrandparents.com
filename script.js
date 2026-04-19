// ============================================
// TRANSLATION SYSTEM
// ============================================
// This system loads translations from JSON files and applies them dynamically
// based on the user's language preference. Language choice is persisted in localStorage.
//
// To add a new language:
// 1. Create a new JSON file in translations/ (e.g., pa.json for Punjabi)
// 2. Add it to the translations object below
// 3. Update the language toggle logic
//
// See translations/README.md for detailed documentation

// Embedded translations to avoid CORS issues when opening HTML directly
const translations = {
    en: {
        "meta": {
            "title": "Indian Grandparents in Toronto - Community & Resources",
            "description": "Society of Indian Grandparents (SIG) - Connecting elderly Indians in Greater Toronto. Find resources, events, and community support for Indian seniors."
        },
        "nav": {
            "home": "Home",
            "events": "Events",
            "resources": "Resources",
            "community": "Community",
            "about": "About",
            "contact": "Contact",
            "skipToMain": "Skip to main content",
            "ariaHome": "Go to home section",
            "ariaEvents": "View upcoming events",
            "ariaResources": "Browse community resources",
            "ariaCommunity": "Learn about our community",
            "ariaAbout": "Read about us",
            "ariaContact": "Contact us",
            "ariaTheme": "Change color theme - tap to switch between light, dark, and high contrast modes",
            "ariaLang": "Switch language between English and Hindi"
        },
        "header": {
            "title": "Indian Grandparents in Toronto"
        },
        "hero": {
            "heading": "Welcome to Your Community",
            "description": "We are the Society of Indian Grandparents. We are a community to connect elderly Indians in the Greater Toronto region with each other - find resources, make friends, and share in activities that were common to experience in India but are hard to find in the West."
        },
        "resources": {
            "heading": "Resources",
            "healthcare": {
                "title": "Healthcare",
                "description": "Find doctors, clinics, and health services",
                "aria": "Healthcare resources - tap to learn more about finding doctors, clinics, and health services"
            },
            "transportation": {
                "title": "Transportation",
                "description": "TTC guides, senior discounts, and travel tips",
                "aria": "Transportation resources - tap to learn about TTC guides, senior discounts, and travel tips"
            },
            "shopping": {
                "title": "Shopping",
                "description": "Indian grocery stores and markets nearby",
                "aria": "Shopping resources - tap to find Indian grocery stores and markets nearby"
            },
            "worship": {
                "title": "Places of Worship",
                "description": "Temples, gurudwaras, and community centers",
                "aria": "Places of worship - tap to find temples, gurudwaras, and community centers"
            }
        },
        "events": {
            "heading": "Upcoming Events",
            "months": {
                "may": "May"
            },
            "event1": {
                "title": "Chai & Chat Meetup",
                "description": "Join us for tea and conversation at the community center",
                "aria": "Event on May 15th - Chai and Chat Meetup - tap to learn more",
                "dateAria": "May 15th"
            },
            "event2": {
                "title": "Yoga & Wellness Session",
                "description": "Free yoga class for seniors at the park",
                "aria": "Event on May 22nd - Yoga and Wellness Session - tap to learn more",
                "dateAria": "May 22nd"
            }
        },
        "contact": {
            "heading": "Get In Touch",
            "intro": "Have questions or want to get involved? We'd love to hear from you.",
            "form": {
                "name": "Name",
                "namePlaceholder": "Your name",
                "nameHint": "Enter your full name",
                "email": "Email",
                "emailPlaceholder": "your@email.com",
                "emailHint": "Enter your email address so we can reply to you",
                "subject": "Subject",
                "subjectPlaceholder": "What is this about?",
                "subjectHint": "Brief description of your message topic",
                "message": "Message",
                "messagePlaceholder": "Your message...",
                "messageHint": "Type your message here - tell us how we can help",
                "submit": "Send Message",
                "submitAria": "Tap here to send your message to us",
                "sending": "Sending...",
                "success": "Thank you for your message! We will get back to you soon.",
                "error": "Sorry, there was an error sending your message. Please try again."
            }
        },
        "community": {
            "heading": "Our Community",
            "description": "Connect with fellow Indian grandparents in the Greater Toronto Area. Share experiences, make friends, and build lasting relationships."
        },
        "about": {
            "heading": "About Us",
            "description": "The Society of Indian Grandparents (SIG) is dedicated to combating loneliness among Indian seniors in the West by building a culturally resonant peer community."
        },
        "faq": {
            "heading": "Frequently Asked Questions",
            "q1": {
                "question": "How do I get a senior's TTC card?",
                "answer": "Seniors 65+ can apply for a TTC Senior card online or at any Shoppers Drug Mart. Bring ID with your birthdate."
            },
            "q2": {
                "question": "Where can I find Indian groceries?",
                "answer": "Popular areas include Gerrard India Bazaar, Brampton, and Mississauga. Stores like Patel Brothers and Oceans are well-stocked."
            },
            "q3": {
                "question": "How do I find a Hindi-speaking doctor?",
                "answer": "Contact Health Care Connect at 1-800-445-1822 and request a Hindi-speaking physician. Many clinics in Brampton and Scarborough have Hindi-speaking staff."
            }
        },
        "footer": {
            "copyright": "© 2026 Society of Indian Grandparents (SIG). Building community, one connection at a time."
        }
    },
    hi: {
        "meta": {
            "title": "टोरंटो में भारतीय दादा-दादी - समुदाय और संसाधन",
            "description": "भारतीय दादा-दादी समाज (SIG) - ग्रेटर टोरंटो में बुजुर्ग भारतीयों को जोड़ना। भारतीय वरिष्ठों के लिए संसाधन, कार्यक्रम और सामुदायिक सहायता खोजें।"
        },
        "nav": {
            "home": "होम",
            "events": "कार्यक्रम",
            "resources": "संसाधन",
            "community": "समुदाय",
            "about": "हमारे बारे में",
            "contact": "संपर्क",
            "skipToMain": "मुख्य सामग्री पर जाएं",
            "ariaHome": "होम अनुभाग पर जाएं",
            "ariaEvents": "आगामी कार्यक्रम देखें",
            "ariaResources": "सामुदायिक संसाधन ब्राउज़ करें",
            "ariaCommunity": "हमारे समुदाय के बारे में जानें",
            "ariaAbout": "हमारे बारे में पढ़ें",
            "ariaContact": "हमसे संपर्क करें",
            "ariaTheme": "रंग थीम बदलें - लाइट, डार्क और हाई कंट्रास्ट मोड के बीच स्विच करने के लिए टैप करें",
            "ariaLang": "अंग्रेजी और हिंदी के बीच भाषा स्विच करें"
        },
        "header": {
            "title": "टोरंटो में भारतीय दादा-दादी"
        },
        "hero": {
            "heading": "अपने समुदाय में आपका स्वागत है",
            "description": "हम भारतीय दादा-दादी समाज हैं। हम ग्रेटर टोरंटो क्षेत्र में बुजुर्ग भारतीयों को एक दूसरे से जोड़ने के लिए एक समुदाय हैं - संसाधन खोजें, दोस्त बनाएं, और उन गतिविधियों में साझा करें जो भारत में आम थीं लेकिन पश्चिम में मिलना मुश्किल हैं।"
        },
        "resources": {
            "heading": "संसाधन",
            "healthcare": {
                "title": "स्वास्थ्य सेवा",
                "description": "डॉक्टर, क्लीनिक और स्वास्थ्य सेवाएं खोजें",
                "aria": "स्वास्थ्य सेवा संसाधन - डॉक्टर, क्लीनिक और स्वास्थ्य सेवाओं के बारे में अधिक जानने के लिए टैप करें"
            },
            "transportation": {
                "title": "परिवहन",
                "description": "TTC गाइड, वरिष्ठ छूट और यात्रा सुझाव",
                "aria": "परिवहन संसाधन - TTC गाइड, वरिष्ठ छूट और यात्रा सुझावों के बारे में जानने के लिए टैप करें"
            },
            "shopping": {
                "title": "खरीदारी",
                "description": "पास में भारतीय किराना स्टोर और बाजार",
                "aria": "खरीदारी संसाधन - पास में भारतीय किराना स्टोर और बाजार खोजने के लिए टैप करें"
            },
            "worship": {
                "title": "पूजा स्थल",
                "description": "मंदिर, गुरुद्वारे और सामुदायिक केंद्र",
                "aria": "पूजा स्थल - मंदिर, गुरुद्वारे और सामुदायिक केंद्र खोजने के लिए टैप करें"
            }
        },
        "events": {
            "heading": "आगामी कार्यक्रम",
            "months": {
                "may": "मई"
            },
            "event1": {
                "title": "चाय और बातचीत मिलन",
                "description": "सामुदायिक केंद्र में चाय और बातचीत के लिए हमसे जुड़ें",
                "aria": "15 मई को कार्यक्रम - चाय और बातचीत मिलन - अधिक जानने के लिए टैप करें",
                "dateAria": "15 मई"
            },
            "event2": {
                "title": "योग और स्वास्थ्य सत्र",
                "description": "पार्क में वरिष्ठों के लिए मुफ्त योग कक्षा",
                "aria": "22 मई को कार्यक्रम - योग और स्वास्थ्य सत्र - अधिक जानने के लिए टैप करें",
                "dateAria": "22 मई"
            }
        },
        "contact": {
            "heading": "संपर्क करें",
            "intro": "प्रश्न हैं या शामिल होना चाहते हैं? हम आपसे सुनना पसंद करेंगे।",
            "form": {
                "name": "नाम",
                "namePlaceholder": "आपका नाम",
                "nameHint": "अपना पूरा नाम दर्ज करें",
                "email": "ईमेल",
                "emailPlaceholder": "आपका@ईमेल.com",
                "emailHint": "अपना ईमेल पता दर्ज करें ताकि हम आपको जवाब दे सकें",
                "subject": "विषय",
                "subjectPlaceholder": "यह किस बारे में है?",
                "subjectHint": "आपके संदेश विषय का संक्षिप्त विवरण",
                "message": "संदेश",
                "messagePlaceholder": "आपका संदेश...",
                "messageHint": "यहां अपना संदेश टाइप करें - हमें बताएं कि हम कैसे मदद कर सकते हैं",
                "submit": "संदेश भेजें",
                "submitAria": "हमें अपना संदेश भेजने के लिए यहां टैप करें",
                "sending": "भेजा जा रहा है...",
                "success": "आपके संदेश के लिए धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।",
                "error": "क्षमा करें, आपका संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।"
            }
        },
        "community": {
            "heading": "हमारा समुदाय",
            "description": "ग्रेटर टोरंटो क्षेत्र में साथी भारतीय दादा-दादी से जुड़ें। अनुभव साझा करें, दोस्त बनाएं, और स्थायी संबंध बनाएं।"
        },
        "about": {
            "heading": "हमारे बारे में",
            "description": "भारतीय दादा-दादी समाज (SIG) सांस्कृतिक रूप से प्रासंगिक सहकर्मी समुदाय बनाकर पश्चिम में भारतीय वरिष्ठों के बीच अकेलेपन से लड़ने के लिए समर्पित है।"
        },
        "faq": {
            "heading": "अक्सर पूछे जाने वाले प्रश्न",
            "q1": {
                "question": "मुझे वरिष्ठ TTC कार्ड कैसे मिलेगा?",
                "answer": "65+ वर्ष के वरिष्ठ ऑनलाइन या किसी भी शॉपर्स ड्रग मार्ट में TTC सीनियर कार्ड के लिए आवेदन कर सकते हैं। अपनी जन्मतिथि के साथ ID लाएं।"
            },
            "q2": {
                "question": "मुझे भारतीय किराना कहाँ मिल सकता है?",
                "answer": "लोकप्रिय क्षेत्रों में जेरार्ड इंडिया बाजार, ब्रैम्पटन और मिसिसॉगा शामिल हैं। पटेल ब्रदर्स और ओशन्स जैसे स्टोर अच्छी तरह से स्टॉक किए गए हैं।"
            },
            "q3": {
                "question": "मुझे हिंदी बोलने वाला डॉक्टर कैसे मिलेगा?",
                "answer": "हेल्थ केयर कनेक्ट से 1-800-445-1822 पर संपर्क करें और हिंदी बोलने वाले चिकित्सक का अनुरोध करें। ब्रैम्पटन और स्कारबोरो में कई क्लीनिकों में हिंदी बोलने वाले कर्मचारी हैं।"
            }
        },
        "footer": {
            "copyright": "© 2026 भारतीय दादा-दादी समाज (SIG)। एक समय में एक कनेक्शन, समुदाय का निर्माण।"
        }
    }
};

let currentLang = localStorage.getItem('language') || 'en';

// Get nested translation value using dot notation (e.g., "nav.home")
// Traverses the translation object to find the value at the specified path
// Returns the key itself if translation is not found (with console warning)
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key; // Fallback to showing the key
        }
    }
    
    return value;
}

// Apply translations to all elements with data-i18n attribute
// This function is called on page load and whenever language changes
function applyTranslations() {
    // Update page title and meta description
    document.title = t('meta.title');
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', t('meta.description'));
    }
    
    // Update HTML lang attribute for accessibility and SEO
    document.documentElement.lang = currentLang;
    
    // Translate all elements with data-i18n attribute
    // Handles both regular text content and form placeholders
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        // Special handling for form inputs and textareas
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
    
    // Translate all aria-label attributes for accessibility
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
        const key = element.getAttribute('data-i18n-aria');
        const translation = t(key);
        element.setAttribute('aria-label', translation);
    });
    
    // Update language toggle button text
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? 'हिंदी' : 'English';
    }
}

// Toggle between languages
// Switches language, saves preference, and re-applies all translations
function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('language', currentLang);
    applyTranslations();
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Translations are embedded, so apply immediately
    applyTranslations();
    
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
