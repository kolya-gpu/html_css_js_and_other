// Language switching functionality
let currentLanguage = 'ru';

// Language data
const translations = {
    ru: {
        'Синька бати': 'Синька бати',
        'Blue Baty': 'Синька бати',
        'КОЛЬЦО TRINITY, Cartier': 'КОЛЬЦО TRINITY, Cartier',
        'TRINITY RING, Cartier': 'КОЛЬЦО TRINITY, Cartier',
        'Белое золото, бриллианты': 'Белое золото, бриллианты',
        'White gold, diamonds': 'Белое золото, бриллианты',
        '498 000 ₽': '498 000 ₽',
        'HIGH JEWELRY': 'HIGH JEWELRY',
        'Смотреть коллекцию': 'Смотреть коллекцию',
        'View collection': 'Смотреть коллекцию',
        'Перейти в раздел': 'Перейти в раздел',
        'Go to section': 'Перейти в раздел',
        'Для мужчин': 'Для мужчин',
        'For men': 'Для мужчин',
        'Для женщин': 'Для женщин',
        'For women': 'Для женщин',
        'Найди': 'Найди',
        'Find': 'Найди',
        'бутик около себя': 'бутик около себя',
        'boutique near you': 'бутик около себя',
        'Введите свой адрес и узнайте о самых ближайших бутиках к вам': 'Введите свой адрес и узнайте о самых ближайших бутиках к вам',
        'Enter your address and find the nearest boutiques to you': 'Введите свой адрес и узнайте о самых ближайших бутиках к вам',
        'Введите адрес': 'Введите адрес',
        'Enter address': 'Введите адрес',
        'Введите E-mail': 'Введите E-mail',
        'Enter E-mail': 'Введите E-mail',
        'КОЛЬЦО jow\'s, Cartier': 'КОЛЬЦО jow\'s, Cartier',
        'JOW\'S RING, Cartier': 'КОЛЬЦО jow\'s, Cartier',
        '674 000 ₽': '674 000 ₽',
        'КОЛЬЦО croix, Cartier': 'КОЛЬЦО croix, Cartier',
        'CROIX RING, Cartier': 'КОЛЬЦО croix, Cartier',
        'Желтое, белое, розовое золото': 'Желтое, белое, розовое золото',
        'Yellow, white, rose gold': 'Желтое, белое, розовое золото',
        '432 000 ₽': '432 000 ₽',
        'серьги win, BLANCPAIN': 'серьги win, BLANCPAIN',
        'WIN EARRINGS, BLANCPAIN': 'серьги win, BLANCPAIN',
        'Желтое золото, жемчуг': 'Желтое золото, жемчуг',
        'Yellow gold, pearl': 'Желтое золото, жемчуг',
        '398 000 ₽': '398 000 ₽',
        'Серьги moon, HUBLOT': 'Серьги moon, HUBLOT',
        'MOON EARRINGS, HUBLOT': 'Серьги moon, HUBLOT',
        'Желтое золото, сапфир': 'Желтое золото, сапфир',
        'Yellow gold, sapphire': 'Желтое золото, сапфир',
        'Мы': 'Мы',
        'We': 'Мы',
        'в социальных сетях': 'в социальных сетях',
        'on social media': 'в социальных сетях',
        'Телефон флагманского магазина': 'Телефон флагманского магазина',
        'Flagship store phone': 'Телефон флагманского магазина',
        'Подпишитесь на новости': 'Подпишитесь на новости',
        'Subscribe to news': 'Подпишитесь на новости',
        'работа в компании': 'работа в компании',
        'work in company': 'работа в компании',
        'условия пользования': 'условия пользования',
        'terms of use': 'условия пользования',
        'выходные данные': 'выходные данные',
        'output data': 'выходные данные',
        'политика конфиденциальности': 'политика конфиденциальности',
        'privacy policy': 'политика конфиденциальности',
        'карта сайта': 'карта сайта',
        'site map': 'карта сайта',
        'Телефон горячей линии': 'Телефон горячей линии',
        'Hotline phone': 'Телефон горячей линии',
        'Ювелирные изделия': 'Ювелирные изделия',
        'Jewelry': 'Ювелирные изделия',
        'часы': 'часы',
        'watches': 'часы',
        'ароматы': 'ароматы',
        'fragrances': 'ароматы',
        'бренды': 'бренды',
        'brands': 'бренды',
        'изделия из кожи': 'изделия из кожи',
        'leather goods': 'изделия из кожи',
        'Свадебные украшения': 'Свадебные украшения',
        'Wedding jewelry': 'Свадебные украшения',
        'другое': 'другое',
        'other': 'другое',
        'Для кого': 'Для кого',
        'For whom': 'Для кого',
        'Для детей': 'Для детей',
        'For children': 'Для детей',
        'Категории': 'Категории',
        'Categories': 'Категории',
        'Кольца': 'Кольца',
        'Rings': 'Кольца',
        'Браслеты': 'Браслеты',
        'Bracelets': 'Браслеты',
        'Колье': 'Колье',
        'Necklaces': 'Колье',
        'Серьги': 'Серьги',
        'Earrings': 'Серьги',
        'Броши': 'Броши',
        'Brooches': 'Броши',
        'Материал': 'Материал',
        'Material': 'Материал',
        'Изделия с бриллиантами': 'Изделия с бриллиантами',
        'Diamond products': 'Изделия с бриллиантами',
        'Желтое золото': 'Желтое золото',
        'Yellow gold': 'Желтое золото',
        'Белое золото': 'Белое золото',
        'White gold': 'Белое золото',
        'Розовое золото': 'Розовое золото',
        'Rose gold': 'Розовое золото',
        'Бренд': 'Бренд',
        'Brand': 'Бренд',
        'Показать все бренды': 'Показать все бренды',
        'Show all brands': 'Показать все бренды',
        'Новая коллекция by Mercury': 'Новая коллекция by Mercury',
        'New collection by Mercury': 'Новая коллекция by Mercury',
        'телефон горячей линии': 'телефон горячей линии',
        'hotline phone': 'телефон горячей линии'
    },
    en: {
        'Синька бати': 'Blue Baty',
        'Blue Baty': 'Blue Baty',
        'КОЛЬЦО TRINITY, Cartier': 'TRINITY RING, Cartier',
        'TRINITY RING, Cartier': 'TRINITY RING, Cartier',
        'Белое золото, бриллианты': 'White gold, diamonds',
        'White gold, diamonds': 'White gold, diamonds',
        '498 000 ₽': '498 000 ₽',
        'HIGH JEWELRY': 'HIGH JEWELRY',
        'Смотреть коллекцию': 'View collection',
        'View collection': 'View collection',
        'Перейти в раздел': 'Go to section',
        'Go to section': 'Go to section',
        'Для мужчин': 'For men',
        'For men': 'For men',
        'Для женщин': 'For women',
        'For women': 'For women',
        'Найди': 'Find',
        'Find': 'Find',
        'бутик около себя': 'boutique near you',
        'boutique near you': 'boutique near you',
        'Введите свой адрес и узнайте о самых ближайших бутиках к вам': 'Enter your address and find the nearest boutiques to you',
        'Enter your address and find the nearest boutiques to you': 'Enter your address and find the nearest boutiques to you',
        'Введите адрес': 'Enter address',
        'Enter address': 'Enter address',
        'Введите E-mail': 'Enter E-mail',
        'Enter E-mail': 'Enter E-mail',
        'КОЛЬЦО jow\'s, Cartier': 'JOW\'S RING, Cartier',
        'JOW\'S RING, Cartier': 'JOW\'S RING, Cartier',
        '674 000 ₽': '674 000 ₽',
        'КОЛЬЦО croix, Cartier': 'CROIX RING, Cartier',
        'CROIX RING, Cartier': 'CROIX RING, Cartier',
        'Желтое, белое, розовое золото': 'Yellow, white, rose gold',
        'Yellow, white, rose gold': 'Yellow, white, rose gold',
        '432 000 ₽': '432 000 ₽',
        'серьги win, BLANCPAIN': 'WIN EARRINGS, BLANCPAIN',
        'WIN EARRINGS, BLANCPAIN': 'WIN EARRINGS, BLANCPAIN',
        'Желтое золото, жемчуг': 'Yellow gold, pearl',
        'Yellow gold, pearl': 'Yellow gold, pearl',
        '398 000 ₽': '398 000 ₽',
        'Серьги moon, HUBLOT': 'MOON EARRINGS, HUBLOT',
        'MOON EARRINGS, HUBLOT': 'MOON EARRINGS, HUBLOT',
        'Желтое золото, сапфир': 'Yellow gold, sapphire',
        'Yellow gold, sapphire': 'Yellow gold, sapphire',
        'Мы': 'We',
        'We': 'We',
        'в социальных сетях': 'on social media',
        'on social media': 'on social media',
        'Телефон флагманского магазина': 'Flagship store phone',
        'Flagship store phone': 'Flagship store phone',
        'Подпишитесь на новости': 'Subscribe to news',
        'Subscribe to news': 'Subscribe to news',
        'работа в компании': 'work in company',
        'work in company': 'work in company',
        'условия пользования': 'terms of use',
        'terms of use': 'terms of use',
        'выходные данные': 'output data',
        'output data': 'output data',
        'политика конфиденциальности': 'privacy policy',
        'privacy policy': 'privacy policy',
        'карта сайта': 'site map',
        'site map': 'site map',
        'Телефон горячей линии': 'Hotline phone',
        'Hotline phone': 'Hotline phone',
        'Ювелирные изделия': 'Jewelry',
        'Jewelry': 'Jewelry',
        'часы': 'watches',
        'watches': 'watches',
        'ароматы': 'fragrances',
        'fragrances': 'fragrances',
        'бренды': 'brands',
        'brands': 'brands',
        'изделия из кожи': 'leather goods',
        'leather goods': 'leather goods',
        'Свадебные украшения': 'Wedding jewelry',
        'Wedding jewelry': 'Wedding jewelry',
        'другое': 'other',
        'other': 'other',
        'Для кого': 'For whom',
        'For whom': 'For whom',
        'Для детей': 'For children',
        'For children': 'For children',
        'Категории': 'Categories',
        'Categories': 'Categories',
        'Кольца': 'Rings',
        'Rings': 'Rings',
        'Браслеты': 'Bracelets',
        'Bracelets': 'Bracelets',
        'Колье': 'Necklaces',
        'Necklaces': 'Necklaces',
        'Серьги': 'Earrings',
        'Earrings': 'Earrings',
        'Броши': 'Brooches',
        'Brooches': 'Brooches',
        'Материал': 'Material',
        'Material': 'Material',
        'Изделия с бриллиантами': 'Diamond products',
        'Diamond products': 'Diamond products',
        'Желтое золото': 'Yellow gold',
        'Yellow gold': 'Yellow gold',
        'Белое золото': 'White gold',
        'White gold': 'White gold',
        'Розовое золото': 'Rose gold',
        'Rose gold': 'Rose gold',
        'Бренд': 'Brand',
        'Brand': 'Brand',
        'Показать все бренды': 'Show all brands',
        'Show all brands': 'Show all brands',
        'Новая коллекция by Mercury': 'New collection by Mercury',
        'New collection by Mercury': 'New collection by Mercury',
        'телефон горячей линии': 'hotline phone',
        'hotline phone': 'hotline phone'
    }
};

// Function to switch language
function switchLanguage(lang) {
    if (lang === currentLanguage) return;
    
    currentLanguage = lang;
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update title
    const title = document.querySelector('title');
    if (title) {
        title.textContent = title.getAttribute(`data-${lang}`);
    }
    
    // Update all elements with data attributes
    const elements = document.querySelectorAll('[data-ru][data-en]');
    elements.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update input placeholders
    const inputs = document.querySelectorAll('input[data-ru-placeholder][data-en-placeholder]');
    inputs.forEach(input => {
        const placeholder = input.getAttribute(`data-${lang}-placeholder`);
        if (placeholder) {
            input.placeholder = placeholder;
        }
    });
    
    // Update language switcher active state
    document.querySelectorAll('.language .ru, .language .en').forEach(el => {
        el.classList.remove('active');
    });
    document.querySelector(`.language .${lang}`).classList.add('active');
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Add transition effect
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0.8';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}

// Image modal functionality
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    
    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = imageSrc;
        
        // Add loading animation
        showLoading();
        
        // Hide loading when image is loaded
        modalImg.onload = function() {
            hideLoading();
        };
    }
}

// Close modal when clicking on X or outside the image
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        };
    }
    
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        };
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
});

// Loading animation functions
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'block';
    }
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.display = 'none';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Intersection Observer for animations
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.background, .backgroundimg, .content3, .content5, .content6');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form handling
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('.input, .input2');
    
    forms.forEach(form => {
        const input = form.querySelector('input[type="email"]');
        const submitBtn = form.querySelector('img');
        
        if (input && submitBtn) {
            submitBtn.addEventListener('click', function(e) {
                e.preventDefault();
                handleEmailSubmit(input.value);
            });
            
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleEmailSubmit(input.value);
                }
            });
        }
    });
});

function handleEmailSubmit(email) {
    if (!email || !isValidEmail(email)) {
        showNotification('Пожалуйста, введите корректный email адрес', 'error');
        return;
    }
    
    showLoading();
    
    // Simulate API call
    setTimeout(() => {
        hideLoading();
        showNotification('Спасибо! Вы успешно подписались на новости', 'success');
        
        // Clear input
        const inputs = document.querySelectorAll('input[type="email"]');
        inputs.forEach(input => input.value = '');
    }, 1500);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.backgroundColor = '#28a745';
            break;
        case 'error':
            notification.style.backgroundColor = '#dc3545';
            break;
        default:
            notification.style.backgroundColor = '#17a2b8';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Initialize language from localStorage or default to Russian
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'ru';
    switchLanguage(savedLanguage);
    
    // Add some interactive effects
    addInteractiveEffects();
});

// Add interactive effects
function addInteractiveEffects() {
    // Parallax effect for background elements
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.background, .backgroundimg');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Hover effects for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) contrast(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.filter = 'none';
        });
    });
    
    // Typing effect for main title
    const mainTitle = document.querySelector('.jewerly');
    if (mainTitle) {
        const text = mainTitle.textContent;
        mainTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                mainTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect when element is visible
        const titleObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(typeWriter, 500);
                    titleObserver.unobserve(entry.target);
                }
            });
        });
        
        titleObserver.observe(mainTitle);
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function() {
    // Scroll handling logic here
}, 16); // ~60fps

window.addEventListener('scroll', debouncedScrollHandler);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Tab navigation for accessibility
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// Export functions for global access
window.switchLanguage = switchLanguage;
window.openImageModal = openImageModal;
