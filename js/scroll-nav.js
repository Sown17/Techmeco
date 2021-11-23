$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()){
            $("nav").addClass("sticky")
        }else (
            $("nav").removeClass("sticky")
        )
    })
})
