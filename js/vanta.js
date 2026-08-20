document.addEventListener('DOMContentLoaded', function () {
    function init() {
        if (typeof VANTA !== 'undefined' && typeof THREE !== 'undefined') {
            VANTA.NET({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3f3fff,
                backgroundColor: 0x0f172a,
                points: 14.00,
                maxDistance: 19.00
            });
        } else {
            setTimeout(init, 100);
        }
    }
    init();
});

window.addEventListener('load', function () {
    var loader = document.getElementById('loading-screen');
    if (loader) {
        loader.classList.add('hide');
        document.body.classList.remove('loading');
    }
});
