document.addEventListener('DOMContentLoaded', function() {
    // Theme Switching Functionality
    const themeBtn = document.getElementById('themeBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const html = document.documentElement;
    
    // Check for saved theme preference or use preferred color scheme
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    // Toggle theme dropdown
    themeBtn.addEventListener('click', function() {
        themeDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.theme-switcher')) {
            themeDropdown.classList.remove('show');
        }
    });

    // Change theme
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            html.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
            themeDropdown.classList.remove('show');
        });
    });

    // Update theme icon based on current theme
    function updateThemeIcon(theme) {
        const icon = themeBtn.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Language Switching Functionality
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    let currentLang = localStorage.getItem('language') || 'id'; // Default language

    // Toggle language dropdown
    languageBtn.addEventListener('click', function() {
        languageDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.language-selector')) {
            languageDropdown.classList.remove('show');
        }
        if (!event.target.closest('.theme-switcher')) {
            themeDropdown.classList.remove('show');
        }
    });

    // Language Translation Data
    const translations = {
        'id': {
            'nav.features': 'Fitur',
            'nav.usage': 'Cara Penggunaan',
            'nav.commands': 'Perintah',
            'nav.faq': 'FAQ',
            'nav.contact': 'Kontak',
            'hero.title': 'Selamat datang di Shiya MD Bot!',
            'hero.subtitle': 'Bot cerdas untuk mengelola grup dengan mudah dan efisien.',
            'features.title': 'Fitur Utama',
            'features.group': 'Administrasi Grup',
            'features.group_desc': 'Fitur lengkap untuk mengelola grup secara otomatis',
            'features.antitoxic': 'Anti-Toksik',
            'features.antitoxic_desc': 'Proteksi grup dari link, kata kasar, dan spam',
            'features.downloader': 'Downloader Video',
            'features.downloader_desc': 'Download video dari berbagai platform',
            'features.store': 'Store',
            'features.store_desc': 'Sistem toko digital dalam bot',
            'usage.title': 'Cara Penggunaan',
            'usage.step1': '1. Silakan Mendaftar Terlebih Dulu Dengan Cara',
            'usage.step2': '2. Berikan akses admin kepada bot.',
            'usage.step3': '3. Gunakan perintah seperti',
            'usage.step3_cont': 'untuk melihat daftar fitur.',
            'commands.title': 'Daftar Perintah',
            'commands.group': 'Fitur Administrasi Grup',
            'commands.antilink_desc': 'Aktifkan fitur anti-link di grup. Bot akan otomatis menghapus pesan yang mengandung link dan bisa mengeluarkan member yang mengirim link.',
            'commands.antilink_off_desc': 'Nonaktifkan fitur anti-link di grup.',
            'commands.antilink_mode_desc': 'Mode bisa berupa',
            'commands.antilink_mode_desc1': '(hanya hapus pesan) atau',
            'commands.antilink_mode_desc2': '(hapus dan keluarkan member). Contoh:',
            'commands.antitoxic': 'Fitur Anti-Toksik',
            'commands.antibadword_desc': 'Aktifkan fitur anti-kata kasar. Bot akan menghapus pesan yang mengandung kata-kata terlarang.',
            'commands.addbadword_desc': 'Tambahkan kata ke daftar kata terlarang. Contoh:',
            'commands.downloader': 'Fitur Downloader',
            'commands.ytdl_desc': 'Download video dari YouTube. Contoh:',
            'commands.store': 'Fitur Store',
            'commands.listproduk_desc': 'Lihat daftar produk yang tersedia di store.',
            'faq.title': 'FAQ',
            'faq.q1': 'Q: Bagaimana cara menambahkan bot ke grup?',
            'faq.a1': 'A: Silakan Kamu Chat Owner Untuk Sewa bot',
            'faq.q2': 'Q: Apakah bot ini gratis?',
            'faq.a2': 'A: Ya, bot ini gratis untuk digunakan dalam grup dengan fitur dasar. Fitur premium mungkin memerlukan biaya.',
            'faq.q3': 'Q: Apakah bot bisa menghapus atau mengkick orang yang share link?',
            'faq.a3': 'A: Ya, dengan mengaktifkan fitur',
            'faq.a3_cont': 'bot akan otomatis mengeluarkan member yang mengirim link.',
            'contact.title': 'Kontak',
            'contact.email': 'Email',
            'contact.whatsapp': 'WhatsApp',
            'contact.location': 'Lokasi',
            'contact.location_detail': 'Jakarta, Indonesia',
            'footer.copyright': '2025 Shiya MD Bot. Semua hak dilindungi.'
        },
        'en': {
            'nav.features': 'Features',
            'nav.usage': 'Usage',
            'nav.commands': 'Commands',
            'nav.faq': 'FAQ',
            'nav.contact': 'Contact',
            'hero.title': 'Welcome to Shiya MD Bot!',
            'hero.subtitle': 'Smart bot for easy and efficient group management.',
            'features.title': 'Main Features',
            'features.group': 'Group Administration',
            'features.group_desc': 'Complete features for automatic group management',
            'features.antitoxic': 'Anti-Toxic',
            'features.antitoxic_desc': 'Protect group from links, bad words, and spam',
            'features.downloader': 'Video Downloader',
            'features.downloader_desc': 'Download videos from various platforms',
            'features.store': 'Store',
            'features.store_desc': 'Digital store system within the bot',
            'usage.title': 'How to Use',
            'usage.step1': '1. Please register first by typing',
            'usage.step2': '2. Give admin access to the bot.',
            'usage.step3': '3. Use commands like',
            'usage.step3_cont': 'to see the feature list.',
            'commands.title': 'Command List',
            'commands.group': 'Group Administration',
            'commands.antilink_desc': 'Enable anti-link feature in group. Bot will automatically delete messages containing links and can kick members who send links.',
            'commands.antilink_off_desc': 'Disable anti-link feature in group.',
            'commands.antilink_mode_desc': 'Mode can be',
            'commands.antilink_mode_desc1': '(only delete message) or',
            'commands.antilink_mode_desc2': '(delete and kick member). Example:',
            'commands.antitoxic': 'Anti-Toxic Features',
            'commands.antibadword_desc': 'Enable anti-badword feature. Bot will delete messages containing forbidden words.',
            'commands.addbadword_desc': 'Add word to forbidden words list. Example:',
            'commands.downloader': 'Downloader Features',
            'commands.ytdl_desc': 'Download video from YouTube. Example:',
            'commands.store': 'Store Features',
            'commands.listproduk_desc': 'View list of available products in store.',
            'faq.title': 'FAQ',
            'faq.q1': 'Q: How to add bot to group?',
            'faq.a1': 'A: Please contact the owner to rent the bot',
            'faq.q2': 'Q: Is this bot free?',
            'faq.a2': 'A: Yes, this bot is free to use in groups with basic features. Premium features may require payment.',
            'faq.q3': 'Q: Can the bot delete or kick people who share links?',
            'faq.a3': 'A: Yes, by activating the feature',
            'faq.a3_cont': 'the bot will automatically kick members who send links.',
            'contact.title': 'Contact',
            'contact.email': 'Email',
            'contact.whatsapp': 'WhatsApp',
            'contact.location': 'Location',
            'contact.location_detail': 'Jakarta, Indonesia',
            'footer.copyright': '2025 Shiya MD Bot. All rights reserved.'
        },
        'es': {
            'nav.features': 'Características',
            'nav.usage': 'Uso',
            'nav.commands': 'Comandos',
            'nav.faq': 'Preguntas',
            'nav.contact': 'Contacto',
            'hero.title': '¡Bienvenido a Shiya MD Bot!',
            'hero.subtitle': 'Bot inteligente para una gestión de grupos fácil y eficiente.',
            'features.title': 'Características Principales',
            'features.group': 'Administración de Grupo',
            'features.group_desc': 'Funciones completas para la gestión automática de grupos',
            'features.antitoxic': 'Anti-Tóxico',
            'features.antitoxic_desc': 'Protege el grupo de enlaces, malas palabras y spam',
            'features.downloader': 'Descargador de Videos',
            'features.downloader_desc': 'Descarga videos de varias plataformas',
            'features.store': 'Tienda',
            'features.store_desc': 'Sistema de tienda digital dentro del bot',
            'usage.title': 'Cómo Usar',
            'usage.step1': '1. Por favor regístrese primero escribiendo',
            'usage.step2': '2. Dé acceso de administrador al bot.',
            'usage.step3': '3. Use comandos como',
            'usage.step3_cont': 'para ver la lista de funciones.',
            'commands.title': 'Lista de Comandos',
            'commands.group': 'Administración de Grupo',
            'commands.antilink_desc': 'Active la función anti-enlaces en el grupo. El bot eliminará automáticamente los mensajes que contengan enlaces y puede expulsar a los miembros que los envíen.',
            'commands.antilink_off_desc': 'Desactive la función anti-enlaces en el grupo.',
            'commands.antilink_mode_desc': 'El modo puede ser',
            'commands.antilink_mode_desc1': '(solo eliminar mensaje) o',
            'commands.antilink_mode_desc2': '(eliminar y expulsar miembro). Ejemplo:',
            'commands.antitoxic': 'Características Anti-Tóxicas',
            'commands.antibadword_desc': 'Active la función anti-palabras. El bot eliminará mensajes que contengan palabras prohibidas.',
            'commands.addbadword_desc': 'Agregue palabra a la lista de palabras prohibidas. Ejemplo:',
            'commands.downloader': 'Características de Descarga',
            'commands.ytdl_desc': 'Descargar video de YouTube. Ejemplo:',
            'commands.store': 'Características de Tienda',
            'commands.listproduk_desc': 'Ver lista de productos disponibles en la tienda.',
            'faq.title': 'Preguntas Frecuentes',
            'faq.q1': 'P: ¿Cómo agregar el bot a un grupo?',
            'faq.a1': 'R: Por favor contacte al dueño para alquilar el bot',
            'faq.q2': 'P: ¿Este bot es gratuito?',
            'faq.a2': 'R: Sí, este bot es gratuito para usar en grupos con funciones básicas. Las funciones premium pueden requerir pago.',
            'faq.q3': 'P: ¿Puede el bot eliminar o expulsar personas que comparten enlaces?',
            'faq.a3': 'R: Sí, activando la función',
            'faq.a3_cont': 'el bot expulsará automáticamente a los miembros que envíen enlaces.',
            'contact.title': 'Contacto',
            'contact.email': 'Correo',
            'contact.whatsapp': 'WhatsApp',
            'contact.location': 'Ubicación',
            'contact.location_detail': 'Jakarta, Indonesia',
            'footer.copyright': '2025 Shiya MD Bot. Todos los derechos reservados.'
        },
        'ar': {
            'nav.features': 'الميزات',
            'nav.usage': 'طريقة الاستخدام',
            'nav.commands': 'الأوامر',
            'nav.faq': 'الأسئلة الشائعة',
            'nav.contact': 'اتصل بنا',
            'hero.title': 'مرحبًا بكم في بوت شيا MD!',
            'hero.subtitle': 'بوت ذكي لإدارة المجموعات بسهولة وكفاءة.',
            'features.title': 'الميزات الرئيسية',
            'features.group': 'إدارة المجموعة',
            'features.group_desc': 'ميزات كاملة للإدارة التلقائية للمجموعات',
            'features.antitoxic': 'مكافحة السموم',
            'features.antitoxic_desc': 'حماية المجموعة من الروابط والكلمات السيئة والرسائل غير المرغوب فيها',
            'features.downloader': 'تنزيل الفيديو',
            'features.downloader_desc': 'تنزيل الفيديوهات من منصات متعددة',
            'features.store': 'المتجر',
            'features.store_desc': 'نظام متجر رقمي داخل البوت',
            'usage.title': 'كيفية الاستخدام',
            'usage.step1': '1. يرجى التسجيل أولاً عن طريق كتابة',
            'usage.step2': '2. منح البوت صلاحيات المدير.',
            'usage.step3': '3. استخدم أوامر مثل',
            'usage.step3_cont': 'لرؤية قائمة الميزات.',
            'commands.title': 'قائمة الأوامر',
            'commands.group': 'إدارة المجموعة',
            'commands.antilink_desc': 'تفعيل ميزة منع الروابط في المجموعة. سيقوم البوت تلقائيًا بحذف الرسائل التي تحتوي على روابط ويمكنه طرد الأعضاء الذين يرسلون روابط.',
            'commands.antilink_off_desc': 'تعطيل ميزة منع الروابط في المجموعة.',
            'commands.antilink_mode_desc': 'يمكن أن يكون الوضع',
            'commands.antilink_mode_desc1': '(فقط حذف الرسالة) أو',
            'commands.antilink_mode_desc2': '(حذف وطرد العضو). مثال:',
            'commands.antitoxic': 'ميزات مكافحة السموم',
            'commands.antibadword_desc': 'تفعيل ميزة منع الكلمات السيئة. سيقوم البوت بحذف الرسائل التي تحتوي على كلمات محظورة.',
            'commands.addbadword_desc': 'إضافة كلمة إلى قائمة الكلمات المحظورة. مثال:',
            'commands.downloader': 'ميزات التنزيل',
            'commands.ytdl_desc': 'تنزيل فيديو من يوتيوب. مثال:',
            'commands.store': 'ميزات المتجر',
            'commands.listproduk_desc': 'عرض قائمة المنتجات المتاحة في المتجر.',
            'faq.title': 'الأسئلة الشائعة',
            'faq.q1': 'س: كيف يمكن إضافة البوت إلى المجموعة؟',
            'faq.a1': 'ج: يرجى التواصل مع المالك لاستئجار البوت',
            'faq.q2': 'س: هل هذا البوت مجاني؟',
            'faq.a2': 'ج: نعم، هذا البوت مجاني للاستخدام في المجموعات بالميزات الأساسية. قد تتطلب الميزات المميزة الدفع.',
            'faq.q3': 'س: هل يمكن للبوت حذف أو طرد الأشخاص الذين يشاركون الروابط؟',
            'faq.a3': 'ج: نعم، عن طريق تفعيل الميزة',
            'faq.a3_cont': 'سوف يقوم البوت تلقائيًا بطرد الأعضاء الذين يرسلون روابط.',
            'contact.title': 'اتصل بنا',
            'contact.email': 'البريد الإلكتروني',
            'contact.whatsapp': 'واتساب',
            'contact.location': 'الموقع',
            'contact.location_detail': 'جاكرتا، إندونيسيا',
            'footer.copyright': '2025 بوت شيا MD. جميع الحقوق محفوظة.'
        }
    };

    // Change language
    document.querySelectorAll('.language-option').forEach(option => {
        option.addEventListener('click', function() {
            currentLang = this.getAttribute('data-lang');
            translatePage(currentLang);
            localStorage.setItem('language', currentLang);
            languageDropdown.classList.remove('show');
        });
    });

    // Translation function
    function translatePage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Initialize with saved language
    translatePage(currentLang);
});
