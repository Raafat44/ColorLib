$(".firstSection input,.firstSection textarea").on("focus",function(){
    $(this).css({
        "color":"black",
        "backgroundColor":"white",
        "transition":"0.3s"
    })
})
$(".firstSection input,.firstSection textarea").on("blur",function(){
    $(this).css({
        "color":"white",
        "backgroundColor":"#393939",
        "transition":"0.3s"
    })
})