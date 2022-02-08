$('.owl-carousel').owlCarousel({
    loop:false, /* qdo acaba as imagens não continua o loop. true reinicia o loop */
    margin:15,
    nav:false, /* botão de navegação na parte de baixo. False mostra só as bolinhas */
    responsive:{
        0:{
            items:1
        },
        600:{/* com 600px mostra 3 itens por vez */
            items:3
        },
        1000:{ /* com 1000px mostra 5 itens por vez */
            items:5
        }
    }
})