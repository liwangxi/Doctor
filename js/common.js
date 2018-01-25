$(".foot-head span").click(function(){
    $('html , body').animate({ scrollTop: 0 }, 'slow');
})
function right() {
    let left = ($(window).width()-1150)/2
    $(".content-right").css("right",left);
}
$(document).ready(function(){
    right()
})
$(document).resize(() => {
    right()
})