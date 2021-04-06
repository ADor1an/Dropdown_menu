jQuery(document).ready(function() {

    var btn = $('.scroll-to-top');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});
$('.header_burger').on('click', function (e) {
    e.preventDefault;
    $(this).toggleClass('.header_burger_active');
    $('.navi').toggleClass('navi_active');


});
document.querySelector('#blockNavi').addEventListener('click', function (e) {

    naviActive(this).toggleClass('isActive')
    ;   btnActive('#btnHeader').toggleClass('open')
    ;   e.preventDefault();

});
