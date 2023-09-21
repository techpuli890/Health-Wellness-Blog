$(".readmore-btn").on('click',function(){
    $(this).parent().toggleClass("showContent");
      //shorthand if-else statement
     var replaseText=$(this).parent().hasClass("showContent") ? "Read Less" : "Read More"
     $(this).text(replaseText);
 });