(function () {
    const VALID_LANGS = ['es', 'en', 'ca'];
    const DEFAULT_LANG = 'es';

    function detectLanguage() {
        const stored = localStorage.getItem('lang');
        if (stored && VALID_LANGS.includes(stored)) return stored;

        const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
        if (VALID_LANGS.includes(browserLang)) return browserLang;

        return DEFAULT_LANG;
    }

    async function loadTranslations(lang) {
        try {
            const response = await fetch((window.location.pathname.includes('/views/') ? '../' : '') + 'json/translations.json');
            const data = await response.json();
            return data[lang] || data[DEFAULT_LANG];
        } catch (e) {
            console.error('Error loading translations:', e);
            return null;
        }
    }

    function applyTranslations(translations) {
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            if (translations[key] !== undefined) {
                el.textContent = translations[key];
            }
        });

        document.querySelectorAll('[data-i18n-meta]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-meta');
            if (translations[key] !== undefined) {
                el.setAttribute('content', translations[key]);
            }
        });

        document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-aria');
            if (translations[key] !== undefined) {
                el.setAttribute('aria-label', translations[key]);
            }
        });

        document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-alt');
            if (translations[key] !== undefined) {
                el.setAttribute('alt', translations[key]);
            }
        });
    }

    function updateLangAttribute(lang) {
        document.documentElement.setAttribute('lang', lang);
    }

    function updateLanguageButtons(lang) {
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }

    async function initI18n() {
        const lang = detectLanguage();
        const translations = await loadTranslations(lang);
        if (translations) {
            applyTranslations(translations);
            updateLangAttribute(lang);
            updateLanguageButtons(lang);
        }
    }

    window.setLanguage = function (lang) {
        if (!VALID_LANGS.includes(lang)) return;
        localStorage.setItem('lang', lang);
        location.reload();
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initI18n);
    } else {
        initI18n();
    }
})();
