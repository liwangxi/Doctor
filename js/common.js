$(".foot-head span").click(function(){
    $('html , body').animate({ scrollTop: 0 }, 'slow');
})
function right() {
    let left = ($(window).width()-1150)/2
    $(".content-right").css("right",left);
}
function right1() {
    let left = ($(window).width() - 1150) / 2
    $(".list .item div").css("right", left);
}
$(document).ready(function(){
    right()
})
$(window).resize(function () {
    right()
})
$(".hove").hover(function () {
    $(".head-slide").slideDown();
})
$(".head-slide").mouseleave(function () {
    $(this).slideUp();
})