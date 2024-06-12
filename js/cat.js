jQuery(document).ready(function(){
    var $carousel = $('.main-carousel').flickity();

    // previous
    $('.button--previous').on( 'click', function() {
        $carousel.flickity('previous');
    });
})