"use strict";


jQuery(document).ready(function ($) {

	$(window).load(function () {
		$(".loaded").fadeOut();
		$(".preloader").delay(1000).fadeOut("slow");
	});
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#navbar-collapse').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });
	
	
	/*---------------------------------------------*
     * Portfolio Pop Up Animation
     ---------------------------------------------*/

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
	/*---------------------------------------------*
     * Menu Background Change
     ---------------------------------------------*/
	
	var windowWidth = $(window).width();
    if (windowWidth > 757) {

        
          
            $(window).scroll(function () {
                if ($(this).scrollTop() > 400) {
                    $('.navbar').fadeIn(400);
                    $('.navbar').addClass('menu-bg');

                } else {
                    
                    $('.navbar').removeClass('menu-bg');
                }
            });
        
    }
	$('#bs-example-navbar-collapse-1').localScroll();


    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

		$.localScroll();



   
});
