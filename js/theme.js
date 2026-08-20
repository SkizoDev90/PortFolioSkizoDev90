(function () {
    var saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.body.classList.add('light');
    }
    updateLordicons();
})();

function toggleTheme() {
    document.body.classList.toggle('light');
    var isLight = document.body.classList.contains('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateLordicons();
    if (typeof reinitVanta === 'function') {
        reinitVanta();
    }
}

function updateLordicons() {
    var isLight = document.body.classList.contains('light');
    var color = isLight ? '#475569' : '#94a3b8';
    document.querySelectorAll('lord-icon').forEach(function (el) {
        el.setAttribute('colors', 'primary:' + color);
    });
}
