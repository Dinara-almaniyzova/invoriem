$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        responsive: {
            // breakpoint from 0 up
            0: {
                items:2,
                dots: false,
                loop: true,
                margin:33
            },
            // breakpoint from 480 up
            601: {
                items:3,
                dots: false,
                margin: 48,
                loop: true,
            },
            // breakpoint from 768 up
            1001: {
                items:3,
                dots: false,
                margin: 48,
                loop: true,
            }
        }
    });
});

// video
const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const videoFile = document.querySelector('#video-file')


videoWrapper.addEventListener('click', function () {

    if (videoFile.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video__overlay');
        videoBtn.classList.add('none')
        videoFile.play()
    } else {
        videoBtn.classList.remove('hidden');
        videoWrapper.classList.add('video__overlay')
        videoBtn.classList.remove('none')
        videoFile.pause()
    }

})

// openMobileNav

const btnOpenNav = document.querySelector('#openMobileNav');
const mobileNav = document.querySelector('#mobileNav');
const closeBtn = document.querySelector('#cloveMobileNav')

btnOpenNav.addEventListener('click', () => {
    mobileNav.classList.remove('none');
    document.body.classList.add('no-scroll')
});

closeBtn.addEventListener('click', ()=>{
    mobileNav.classList.add('none');
    document.body.classList.remove('no-scroll')
})