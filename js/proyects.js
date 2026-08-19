document.addEventListener('DOMContentLoaded',()=>{
    const carruselGuardiaAdmin = [
        'img/sustituciones-admin/dashboard.png',
        'img/sustituciones-admin/cuadrante.png',
        'img/sustituciones-admin/gestionAus.png',
        'img/sustituciones-admin/calendar.png',
        'img/sustituciones-admin/historial.png',
        'img/sustituciones-admin/detalleAu.png',
        'img/sustituciones-admin/gestionEven.png',
        'img/sustituciones-admin/gestionProf.png',
        'img/sustituciones-admin/gestionGrup.png',
    ]

    const carruselGuardiaApp = [
        'img/sustituciones-profesor/inicio.png',
        'img/sustituciones-profesor/misGuar.png',
        'img/sustituciones-profesor/horario.png',
        'img/sustituciones-profesor/misAus.png',
        'img/sustituciones-profesor/notifica.png',
    ]

    const carruselEnviromental = [
        'img/Enviromental/0.png',
        'img/Enviromental/1.png',
        'img/Enviromental/2.png',
        'img/Enviromental/3.png',
        'img/Enviromental/4.png',
        'img/Enviromental/5.png',
        'img/Enviromental/6.png',
        'img/Enviromental/7.png',
        'img/Enviromental/8.png'
    ]
    const carruselAsocAdmin = [
        'img/asociaciondle-Admin/login.png',
        'img/asociaciondle-Admin/dashboard.png',
        'img/asociaciondle-Admin/asociaciones.png',
        'img/asociaciondle-Admin/categoriasAdmin.png',
        'img/asociaciondle-Admin/contribucionesAdmin.png',
        'img/asociaciondle-Admin/galeria.png',
        'img/asociaciondle-Admin/usuarios.png',
        'img/asociaciondle-Admin/cambio.png'
    ]
    const carruselAsocUser = [
        'img/asociaciondle-User/principal.png',
        'img/asociaciondle-User/info.png',
        'img/asociaciondle-User/pistas.png',
        'img/asociaciondle-User/juego.png',
        'img/asociaciondle-User/coleccion.png',
        'img/asociaciondle-User/ranking.png',
        'img/asociaciondle-User/cambioUser.png'
    ]

    function initCarrusel(rutas, trackId){
        const track = document.getElementById(trackId);
        rutas.forEach((ruta) => {
            track.innerHTML += `
                <div class="swiper-slide">
                    <a href="${ruta}" data-pswp-width="1920" data-pswp-height="1080" target="_blank">
                        <img class="imgCarrusel" src="${ruta}" alt="Captura">
                    </a>
                </div>
            `;
        });
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
