document.addEventListener('click', function (e) {
    var colors = getComputedStyle(document.body);
    var c1 = colors.getPropertyValue('--text-primary').trim();
    var c2 = colors.getPropertyValue('--text-secondary').trim();
    var pool = [c1, c2];

    for (var i = 0; i < 10; i++) {
        var p = document.createElement('div');
        p.className = 'click-particle';

        var angle = (Math.PI * 2 * i) / 10 + (Math.random() - 0.5) * 0.5;
        var dist = 40 + Math.random() * 40;
        var tx = Math.cos(angle) * dist;
        var ty = Math.sin(angle) * dist;

        p.style.left = e.clientX + 'px';
        p.style.top = e.clientY + 'px';
        p.style.background = pool[Math.floor(Math.random() * pool.length)];
        p.style.setProperty('--tx', tx + 'px');
        p.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(p);

        (function (el) {
            el.addEventListener('animationend', function () {
                el.remove();
            });
        })(p);
    }
});
