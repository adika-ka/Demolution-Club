$(document). ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger', '.header__menu'). toggleClass('active');
    })
    
});
$(document). ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__list'). toggleClass('active');
    }) 
});
$(document). ready(function() {
    $('.header__burger').click(function(event) {
        $('body'). toggleClass('lock');
    })
    
});
$(document). ready(function() {
    $('.header__burger').click(function(event) {
        $('.header-logo__text'). toggleClass('active');
    })
});
$(document). ready(function() {
    $('.header__burger').click(function(event) {
        $('.main'). toggleClass('active');
    })
});
$(document). ready(function() {
    $('.header__burger').click(function(event) {
        $('.menu__lang'). toggleClass('active');
    })
});
$(document). ready(function() {
    $('.header__burger').click(function(event) {
        $('.header'). toggleClass('active');
    })
});

$(document).ready(function(){
    $('.slider').slick({
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3.2,
        slidesToScroll:2,
        // infinite:false,
        initialSlide:1,
        centerMode:true,
        responsive:[
            {
                breakpoint: 1660,
                settings: {
                    slidesToShow:3,
                    slidesToScroll:1,
                    infinite:false,
                }
            },{
                breakpoint: 1520,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:false,
                }
            },{
                breakpoint: 1100,
                settings: {
                    slidesToShow:1,
                    slidesToScroll:1,
                    infinite:false,
                }
            }
        ]
    });
});

$(document).ready(function(){
    $('.slider__reviews').slick({
        adaptiveHeight:true,
        slidesToShow:2.99,
        // slidesToScroll:1,
        infinite:false,
        initialSlide:1,
        centerMode:true,
        responsive:[
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow:2,
                    slidesToScroll:1,
                }
            },{
                    breakpoint: 1100,
                    settings: {
                        slidesToShow:1,
                        slidesToScroll:1,
                        infinite:false,
                    }
                }
        ]
    });
});


