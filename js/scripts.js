$(document).ready(function(){
    $('.reviews-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    $('.carousel-team').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    $('.news-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });

    $(".navbar-nav li").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    function up() {
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
            window.scrollBy(0,((top+100)/-10));
            t = setTimeout('up()',20);
        } else clearTimeout(t);
        return false;
    }

    $('#up').click(function() {
        $('body,html').animate({scrollTop:0},500);
        return false;
    })

    $('.counter').percentageLoader({
        strokeWidth: 6,
        bgColor:'#047378',
        ringColor:'#19bd9a',
        textColor:'#81868e',
        fontSize:'25px'
    });


});

