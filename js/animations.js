document.addEventListener('DOMContentLoaded', function () {
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var isProyectPage = document.querySelector('.proyect') !== null;

    if (isProyectPage) {
        var cards = document.querySelectorAll('.proyect');

        if (prefersReduced) {
            cards.forEach(function (card) {
                card.style.opacity = '1';
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('drop-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach(function (card) {
            card.style.opacity = '0';
            observer.observe(card);
        });

        setTimeout(function () {
            cards.forEach(function (card) {
                if (card.style.opacity === '0') {
                    card.style.opacity = '1';
                }
            });
        }, 3000);
    } else {
        var children = document.querySelectorAll('main > *');
        children.forEach(function (el, i) {
            el.classList.add('drop-in');
            el.style.animationDelay = (i * 0.15) + 's';
        });
    }
});
