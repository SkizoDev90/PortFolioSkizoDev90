var vantaInstance = null;

function getVantaColors() {
    var isLight = document.body.classList.contains('light');
    return {
        color: isLight ? 0x94a3b8 : 0x3f3fff,
        backgroundColor: isLight ? 0xf8fafc : 0x0f172a
    };
}

function initVanta() {
    if (typeof VANTA !== 'undefined' && typeof THREE !== 'undefined') {
        var colors = getVantaColors();
        vantaInstance = VANTA.NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: colors.color,
            backgroundColor: colors.backgroundColor,
            points: 14.00,
            maxDistance: 19.00
        });
    } else {
        setTimeout(initVanta, 100);
    }
}

function reinitVanta() {
    if (vantaInstance) {
        vantaInstance.destroy();
        vantaInstance = null;
    }
    initVanta();
}

document.addEventListener('DOMContentLoaded', function () {
    initVanta();
});

window.addEventListener('load', function () {
    var loader = document.getElementById('loading-screen');
    if (loader) {
        loader.classList.add('hide');
        document.body.classList.remove('loading');
    }
});
