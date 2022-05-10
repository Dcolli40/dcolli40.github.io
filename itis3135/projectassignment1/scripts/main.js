$(document).ready(function(){
    $('.forward').on('click',function(){
        var currentIMG = $(".active");
        var firstIMG = currentIMG;
        var nextIMG =  currentIMG.next();

        if(nextIMG.length){
            currentIMG.removeClass('active').css('z-index',-10);
            nextIMG.addClass('active').css('z-index',10);
        }
      
    });
    $('.back').on('click',function(){
        var currentIMG = $(".active");
        var prevIMG =  currentIMG.prev();

        if(prevIMG.length){
            currentIMG.removeClass('active').css('z-index',-10);
            prevIMG.addClass('active').css('z-index',10);
        }
    
        });
    });

    
   
