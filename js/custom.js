(function ($){
    "use strict"

    $('.veer-menu .icon .fa-bars').on('click',function (){
        $('.veer-menu ul').slideDown();
        $('.veer-menu .icon .fa-times').show();
        $(this).hide()
    });

    $('.veer-menu .icon .fa-times').on('click',function (){
        $('.veer-menu ul').slideUp();
        $(this).hide()
        $('.veer-menu .icon .fa-bars').show()
    })

    $(window).resize(function (){
        let screensize = $(window).width()
        if (screensize > 991){
            $('.veer-menu ul').removeAttr('style')
        }
    })

    // venobox

    new VenoBox();

    // isotope

    $(document).ready(function ($) {
    setTimeout(function(){ 
            // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
    });
    var $grid = $('.grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
        // use element for option
        columnWidth: '.grid-item'
    }
    });
        }, 1000);
    });

    // work buttons

    $('.veer-work-buttons button').on('click', function(){
        $('.veer-work-buttons button').removeClass('active');
        $(this).addClass('active');
    });


    



}) (jQuery);
