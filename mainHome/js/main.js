$("iframe").height($( window ).height());
$(".First-navBar .icons-holder div").on("click",function(){    
    $("iframe").animate({width:$(this).data("value")},500);
});
$(".First-navBar .icons-holder div").eq(3).on("click",function(){
    $(".First-navBar").fadeOut(500);
});