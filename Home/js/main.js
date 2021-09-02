$(".forthSection .icon").on("click",function(){   
    $(".main").css({
        "display":"block"
    });
    $(".theCard").css({
       "display":"block"
    });
    $(".theCard img").attr("src",$(this).data("src"));
    
    $("body").css("overflow","hidden");
});
$(".theCard i").on("click",function(){
    
    $("body").css("overflow","visible");

    $(".main").css("display","none");
    $(".theCard").css({
       "display":"none" 
    });    
});
var n1 = 923,
    n2 = 173,
    numbers1 = document.querySelector(".fifthSection .media .first"),
    numbers2 = document.querySelector(".fifthSection .media .second");
    numbers1.textContent =n1;
    numbers2.textContent =n2;
    var i =n1,i2=n2;    
$(window).on("scroll",function()
{
    if($(window).scrollTop()>=2704 )
    {
        interval1 = setInterval(function()
        {            
            if(i==3034)
            {        
                return 0;
            }
            i++;
            numbers1.textContent =i;
        },0.1);
        interval2 = setInterval(function()
        {
            
            if(i2==2284)
            {  
                return 0;
            }
            i2++;
            numbers2.textContent =i2;
        },0.1);        
    };    
})
function inter()
{
     
}



