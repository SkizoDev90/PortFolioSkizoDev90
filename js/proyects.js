document.addEventListener('DOMContentLoaded',()=>{
    const carruselGuardiaAdmin = [
        'img/sustituciones-admin/dashboard.webp',
        'img/sustituciones-admin/cuadrante.webp',
        'img/sustituciones-admin/gestionAus.webp',
        'img/sustituciones-admin/calendar.webp',
        'img/sustituciones-admin/historial.webp',
        'img/sustituciones-admin/detalleAu.webp',
        'img/sustituciones-admin/gestionEven.webp',
        'img/sustituciones-admin/gestionProf.webp',
        'img/sustituciones-admin/gestionGrup.webp',
    ]

    const carruselGuardiaApp = [
        'img/sustituciones-profesor/inicio.webp',
        'img/sustituciones-profesor/misGuar.webp',
        'img/sustituciones-profesor/horario.webp',
        'img/sustituciones-profesor/misAus.webp',
        'img/sustituciones-profesor/notifica.webp',
    ]

    const carruselEnviromental = [
        'img/Enviromental/vistaNoDisponible.jpeg',
    ]
    const carruselAsocAdmin = [
        'img/asociaciondle-Admin/login.webp',
        'img/asociaciondle-Admin/dashboard.webp',
        'img/asociaciondle-Admin/asociaciones.webp',
        'img/asociaciondle-Admin/categoriasAdmin.webp',
        'img/asociaciondle-Admin/contribucionesAdmin.webp',
        'img/asociaciondle-Admin/galeria.webp',
        'img/asociaciondle-Admin/usuarios.webp',
        'img/asociaciondle-Admin/cambio.webp'
    ]
    const carruselAsocUser = [
        'img/asociaciondle-User/principal.webp',
        'img/asociaciondle-User/info.webp',
        'img/asociaciondle-User/pistas.webp',
        'img/asociaciondle-User/juego.webp',
        'img/asociaciondle-User/coleccion.webp',
        'img/asociaciondle-User/ranking.webp',
        'img/asociaciondle-User/cambioUser.webp'
    ]

    function initCarrusel(rutas, trackId){
        const track = document.getElementById(trackId);
        const html = rutas.map(ruta => `
            <div class="swiper-slide">
                <a href="${ruta}" data-pswp-width="1920" data-pswp-height="1080" target="_blank">
                    <img class="imgCarrusel" src="${ruta}" alt="Captura" width="1920" height="1080" loading="lazy">
                </a>
            </div>
        `).join('');
        track.innerHTML = html;
    }

    function initLightbox(gallerySelector){
        const lightbox = new PhotoSwipeLightbox({
            gallery: gallerySelector,
            children: 'a',
            pswpModule: PhotoSwipe,
        });
        lightbox.init();
    }

    initCarrusel(carruselGuardiaAdmin, 'carruselAdmin');
    initCarrusel(carruselGuardiaApp, 'carruselProf');
    initCarrusel(carruselEnviromental, 'carruselEnviromental');
    initCarrusel(carruselAsocAdmin, 'carruselAdminAsoc');
    initCarrusel(carruselAsocUser, 'carruselUserAsoc');

    initLightbox('.guardias1');
    initLightbox('.guardias2');
    initLightbox('.enviromental');
    initLightbox('.asoc1');
    initLightbox('.asoc2');

    new Swiper('.guardias1', {
        loop: true,
        navigation: {
            nextEl: '.guardias1 .swiper-button-next',
            prevEl: '.guardias1 .swiper-button-prev',
        },
    });

    new Swiper('.guardias2', {
        loop: true,
        navigation: {
            nextEl: '.guardias2 .swiper-button-next',
            prevEl: '.guardias2 .swiper-button-prev',
        },
    });

    new Swiper('.enviromental', {
        loop: true,
        navigation: {
            nextEl: '.enviromental .swiper-button-next',
            prevEl: '.enviromental .swiper-button-prev',
        },
    });

    new Swiper('.asoc1', {
        loop: true,
        navigation: {
            nextEl: '.asoc1 .swiper-button-next',
            prevEl: '.asoc1 .swiper-button-prev',
        },
    });

    new Swiper('.asoc2', {
        loop: true,
        navigation: {
            nextEl: '.asoc2 .swiper-button-next',
            prevEl: '.asoc2 .swiper-button-prev',
        },
    });
})
