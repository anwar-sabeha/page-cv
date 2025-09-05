// ===== ملف التكوين - إعدادات سهلة التعديل =====

const CONFIG = {
    // معلومات الشركة
    company: {
        name: "شركتي",
        tagline: "مرحباً بك في عالم الإبداع",
        description: "نحن نقدم حلولاً مبتكرة وخدمات احترافية تساعدك على تحقيق أهدافك وتطوير أعمالك بأفضل الطرق الحديثة",
        logo: "fas fa-rocket"
    },

    // معلومات الاتصال
    contact: {
        address: "الرياض، المملكة العربية السعودية",
        phone: "+966 50 123 4567",
        email: "info@company.com",
        website: "www.company.com"
    },

    // روابط وسائل التواصل الاجتماعي
    social: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        instagram: "#",
        youtube: "#"
    },

    // إعدادات الألوان (يمكن تطبيقها ديناميكياً)
    colors: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#f093fb",
        text: "#333333",
        textLight: "#666666",
        background: "#ffffff",
        backgroundLight: "#f8fafc"
    },

    // إعدادات الحركات والتأثيرات
    animations: {
        duration: {
            fast: 150,
            normal: 300,
            slow: 500
        },
        easing: "ease",
        loadingDuration: 1500
    },

    // إعدادات النماذج
    forms: {
        contact: {
            endpoint: "", // رابط API لإرسال النموذج
            successMessage: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.",
            errorMessage: "حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.",
            loadingMessage: "جاري الإرسال..."
        }
    },

    // إعدادات الأقسام
    sections: {
        hero: {
            showScrollIndicator: true,
            backgroundType: "gradient" // gradient, image, video
        },
        about: {
            showStats: true,
            stats: [
                { number: 500, label: "مشروع مكتمل" },
                { number: 200, label: "عميل راضي" },
                { number: 5, label: "سنوات خبرة" }
            ]
        },
        services: {
            showFeatures: true,
            animateOnScroll: true
        },
        portfolio: {
            showFilters: true,
            categories: ["all", "web", "mobile", "design"],
            itemsPerPage: 6
        }
    },

    // إعدادات الأداء
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        cacheEnabled: true
    },

    // إعدادات إمكانية الوصول
    accessibility: {
        highContrast: false,
        fontSize: "normal", // small, normal, large
        reducedMotion: false
    },

    // إعدادات SEO
    seo: {
        title: "قالب الصفحة التعريفية",
        description: "قالب احترافي قابل للتخصيص لإنشاء صفحات تعريفية متجاوبة",
        keywords: "قالب, صفحة تعريفية, ويب, تصميم",
        author: "اسم المطور",
        language: "ar"
    }
};

// ===== وظائف مساعدة لتطبيق التكوين =====

// تطبيق الألوان ديناميكياً
function applyColors() {
    const root = document.documentElement;
    Object.entries(CONFIG.colors).forEach(([key, value]) => {
        const cssVar = key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(`--${cssVar}-color`, value);
    });
}

// تحديث معلومات الشركة
function updateCompanyInfo() {
    // تحديث اسم الشركة
    const companyNames = document.querySelectorAll('.logo span, .footer-logo span');
    companyNames.forEach(element => {
        element.textContent = CONFIG.company.name;
    });

    // تحديث عنوان الصفحة
    document.title = CONFIG.seo.title;
    
    // تحديث meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = CONFIG.seo.description;
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = CONFIG.seo.keywords;
    }
}

// تحديث معلومات الاتصال
function updateContactInfo() {
    // تحديث العنوان
    const addressElements = document.querySelectorAll('.contact-details p');
    if (addressElements[0]) {
        addressElements[0].textContent = CONFIG.contact.address;
    }

    // تحديث الهاتف
    if (addressElements[1]) {
        addressElements[1].textContent = CONFIG.contact.phone;
    }

    // تحديث البريد الإلكتروني
    if (addressElements[2]) {
        addressElements[2].textContent = CONFIG.contact.email;
    }
}

// تحديث روابط وسائل التواصل
function updateSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    const socialPlatforms = ['facebook', 'twitter', 'linkedin', 'instagram'];
    
    socialLinks.forEach((link, index) => {
        const platform = socialPlatforms[index];
        if (platform && CONFIG.social[platform]) {
            link.href = CONFIG.social[platform];
        }
    });
}

// تطبيق إعدادات الحركات
function applyAnimationSettings() {
    const root = document.documentElement;
    root.style.setProperty('--transition-fast', `${CONFIG.animations.duration.fast}ms ${CONFIG.animations.easing}`);
    root.style.setProperty('--transition-normal', `${CONFIG.animations.duration.normal}ms ${CONFIG.animations.easing}`);
    root.style.setProperty('--transition-slow', `${CONFIG.animations.duration.slow}ms ${CONFIG.animations.easing}`);
}

// تطبيق إعدادات إمكانية الوصول
function applyAccessibilitySettings() {
    const body = document.body;
    
    if (CONFIG.accessibility.highContrast) {
        body.classList.add('high-contrast');
    }
    
    if (CONFIG.accessibility.reducedMotion) {
        body.classList.add('reduced-motion');
    }
    
    body.classList.add(`font-size-${CONFIG.accessibility.fontSize}`);
}

// تحديث الإحصائيات
function updateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const statLabels = document.querySelectorAll('.stat-label');
    
    CONFIG.sections.about.stats.forEach((stat, index) => {
        if (statNumbers[index]) {
            statNumbers[index].setAttribute('data-target', stat.number);
        }
        if (statLabels[index]) {
            statLabels[index].textContent = stat.label;
        }
    });
}

// تطبيق جميع الإعدادات
function applyConfig() {
    applyColors();
    updateCompanyInfo();
    updateContactInfo();
    updateSocialLinks();
    applyAnimationSettings();
    applyAccessibilitySettings();
    updateStats();
}

// تطبيق التكوين عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', applyConfig);

// تصدير التكوين للاستخدام في ملفات أخرى
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

