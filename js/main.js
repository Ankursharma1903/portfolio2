$(document).ready(function () {
    // it is a jquery function
    // $ takes value of the mentioned thing and call it , it is a usful thing in jquery

    let $btns = $('.project-area .button-group button');
    // it will select all the buttons


    $btns.click(function (e) {
        // it will hear all the click events on the buttons
        //  e is event parameter function
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');
        // it will add the active class on the button selected and remove the active class for that time from rest others


        let selector = $(e.target).attr('data-filter');// by this get data filter value in this button
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
      
    // to get a perfect layout
    $('.project-area .button-group #btn1').trigger('click');// selected buttons by btn1

    // to get magnific pop up add this js as per documentation of magnific pop up plug in after setting its css and js linking do this js same as documentation for images

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true } // by this we can navigate to the different images
    });


    // Owl-carousel
    // owlCarousel is case sensitive so be written properly

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true, // so it work properly
        autoplay: true, // so it work aitomatically
        dots: true, // to intialize that dots
        responsive: { // to make owl carousel responsive
            0: {  // this 0 is as per viewport and give item in it
                items: 1
            },
            560: {
                // when viewport is greater than 560 we see 2 items otherwise only one
                items: 2
            }
        }
    })

    // sticky navigation menu
    // we first get height of the header area and we added 50 more in this header height
    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                // it will hear the scroll event
                let scroll = $(window).scrollTop();// it will give a number on scrolltop as window is selected in this
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
                // it will add or remove the position fixed property to it
            })
        }
    }
// calling this function
// and nedd to mention the properties in global css 
    navbarFixed();

});