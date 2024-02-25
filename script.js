

$(document).ready(function() {
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
$(document).ready(function() {
    // Effet de survol sur les cartes de projet
    $('.card').hover(function() {
        $(this).addClass('shadow-lg').css('transition', 'all 0.3s');
    }, function() {
        $(this).removeClass('shadow-lg');
    });

    // Afficher les détails du projet lors du clic sur "Read More"
    $('.btn-primary').click(function() {
        $(this).closest('.card').find('.card-text').slideToggle();
    });
});
