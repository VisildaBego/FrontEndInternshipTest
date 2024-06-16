const config = {
    type: 'carousel',
    perView: 5,
    autoplay: 2000,
    breakpoints: {
        1430: { perView: 4 },
        1230: { perView: 3 },
        767: { perView: 2 },
        600: { perView: 1 }
    }
}

new Glide('.glide', config).mount();
