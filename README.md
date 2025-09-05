# قالب الصفحة التعريفية

قالب احترافي وقابل للتخصيص لإنشاء صفحات تعريفية متجاوبة باستخدام HTML و CSS و JavaScript.

## المميزات

### 🎨 التصميم
- تصميم حديث ومتجاوب
- دعم كامل للغة العربية (RTL)
- نظام ألوان قابل للتخصيص
- تأثيرات بصرية سلسة
- خطوط عربية جميلة (Cairo)

### 📱 التوافق
- متجاوب مع جميع الأجهزة
- متوافق مع جميع المتصفحات الحديثة
- محسن للأداء والسرعة
- دعم إمكانية الوصول (Accessibility)

### ⚡ الوظائف
- تنقل سلس بين الأقسام
- قائمة تنقل متجاوبة
- نظام تصفية للأعمال
- نموذج اتصال تفاعلي
- عدادات متحركة
- زر العودة للأعلى
- شاشة تحميل

## هيكل الملفات

```
landing-page-template/
├── index.html          # الصفحة الرئيسية
├── css/
│   └── style.css       # ملف التصميم الرئيسي
├── js/
│   └── script.js       # ملف JavaScript للتفاعلات
├── images/             # مجلد الصور
├── assets/             # مجلد الملفات الإضافية
└── README.md           # ملف التوثيق
```

## التثبيت والاستخدام

### 1. تحميل القالب
قم بتحميل جميع الملفات إلى مجلد مشروعك.

### 2. فتح الصفحة
افتح ملف `index.html` في المتصفح لمعاينة الصفحة.

### 3. التخصيص
اتبع الإرشادات أدناه لتخصيص القالب حسب احتياجاتك.

## دليل التخصيص

### تغيير الألوان

في ملف `css/style.css`، يمكنك تعديل متغيرات CSS في بداية الملف:

```css
:root {
    --primary-color: #667eea;      /* اللون الأساسي */
    --secondary-color: #764ba2;    /* اللون الثانوي */
    --accent-color: #f093fb;       /* لون التمييز */
    --text-color: #333333;         /* لون النص */
    --bg-color: #ffffff;           /* لون الخلفية */
}
```

### تغيير المحتوى

#### 1. معلومات الشركة
في ملف `index.html`، ابحث عن العناصر التالية وقم بتعديلها:

```html
<!-- اسم الشركة -->
<span>شركتي</span>

<!-- عنوان الصفحة -->
<title>قالب الصفحة التعريفية</title>

<!-- وصف الشركة -->
<meta name="description" content="وصف شركتك هنا">
```

#### 2. قسم البطل (Hero)
```html
<h1 class="hero-title">
    <span class="highlight">مرحباً بك</span> في عالم الإبداع
</h1>
<p class="hero-description">
    نحن نقدم حلولاً مبتكرة...
</p>
```

#### 3. الخدمات
قم بتعديل محتوى كل خدمة في قسم `services`:

```html
<div class="service-card">
    <div class="service-icon">
        <i class="fas fa-code"></i>  <!-- أيقونة الخدمة -->
    </div>
    <h3 class="service-title">تطوير المواقع</h3>
    <p class="service-description">وصف الخدمة...</p>
</div>
```

#### 4. معلومات الاتصال
```html
<div class="contact-details">
    <h3>العنوان</h3>
    <p>الرياض، المملكة العربية السعودية</p>
</div>
```

### إضافة الصور

1. ضع صورك في مجلد `images/`
2. استبدل العناصر ذات الكلاس `image-placeholder` بصورك:

```html
<!-- بدلاً من -->
<div class="image-placeholder">
    <i class="fas fa-users"></i>
    <p>صورة الفريق</p>
</div>

<!-- استخدم -->
<img src="images/team.jpg" alt="صورة الفريق">
```

### تخصيص الخطوط

لتغيير الخط المستخدم:

1. اختر خط من Google Fonts
2. أضف رابط الخط في `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;600;700&display=swap" rel="stylesheet">
```

3. حدث متغير الخط في CSS:

```css
:root {
    --font-family: 'Tajawal', sans-serif;
}
```

### إضافة أقسام جديدة

لإضافة قسم جديد:

1. أضف HTML الجديد:

```html
<section class="new-section" id="new-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">عنوان القسم</h2>
            <p class="section-subtitle">وصف القسم</p>
        </div>
        <!-- محتوى القسم -->
    </div>
</section>
```

2. أضف رابط في قائمة التنقل:

```html
<li class="nav-item">
    <a href="#new-section" class="nav-link">القسم الجديد</a>
</li>
```

3. أضف تصميم CSS للقسم الجديد.

## تخصيص JavaScript

### إضافة وظائف جديدة

يمكنك إضافة وظائف جديدة في ملف `js/script.js`:

```javascript
// وظيفة جديدة
function newFeature() {
    // كودك هنا
}

// إضافة الوظيفة للتهيئة
function initializeComponents() {
    // الوظائف الموجودة...
    newFeature();
}
```

### تخصيص نموذج الاتصال

لربط النموذج بخدمة إرسال البريد الإلكتروني:

```javascript
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    // إرسال البيانات لخدمتك
    fetch('your-api-endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        showNotification('تم إرسال الرسالة بنجاح!', 'success');
    })
    .catch(error => {
        showNotification('حدث خطأ في الإرسال', 'error');
    });
}
```

## الأداء والتحسين

### تحسين الصور
- استخدم تنسيقات حديثة مثل WebP
- ضغط الصور قبل الاستخدام
- استخدم أحجام مناسبة للشاشات المختلفة

### تحسين CSS
- احذف الأنماط غير المستخدمة
- استخدم CSS Minification للإنتاج

### تحسين JavaScript
- احذف الوظائف غير المستخدمة
- استخدم JavaScript Minification للإنتاج

## نشر الموقع

### 1. الاستضافة المجانية
- GitHub Pages
- Netlify
- Vercel

### 2. الاستضافة المدفوعة
- SiteGround
- Bluehost
- DigitalOcean

### 3. خطوات النشر
1. رفع الملفات للخادم
2. التأكد من عمل جميع الروابط
3. اختبار الموقع على أجهزة مختلفة

## استكشاف الأخطاء

### مشاكل شائعة وحلولها

#### الصفحة لا تظهر بشكل صحيح
- تأكد من رفع جميع الملفات
- تحقق من مسارات الملفات في HTML

#### الخطوط لا تظهر
- تأكد من اتصال الإنترنت
- تحقق من روابط Google Fonts

#### JavaScript لا يعمل
- افتح أدوات المطور (F12)
- تحقق من وجود أخطاء في Console

#### التصميم لا يظهر على الجوال
- تأكد من وجود meta viewport tag
- اختبر على أجهزة مختلفة

## الدعم والمساعدة

### الموارد المفيدة
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)

### أدوات التطوير
- Visual Studio Code
- Chrome DevTools
- Firefox Developer Tools

## الترخيص

هذا القالب مجاني للاستخدام الشخصي والتجاري.

## التحديثات

### الإصدار 1.0
- إطلاق القالب الأساسي
- دعم اللغة العربية
- تصميم متجاوب

---

**ملاحظة:** هذا القالب قابل للتخصيص بالكامل. لا تتردد في تعديله حسب احتياجاتك!

