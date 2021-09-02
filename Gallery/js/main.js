$(".secondSection ul li").on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".secondSection img").css("opacity","0.2");
    $(".secondSection img[data-value*='" + $(this).data("value") + "']").css("opacity","1");
});


