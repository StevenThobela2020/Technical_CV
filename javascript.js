// sticky navigation
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navigation').addClass("sticky_nav");
        }else{
            $('.navigation').removeClass("sticky_nav");
        }

        $('.menu_bar_button').click(function(){
            $('.navigation .menu_bar').toggleClass("active");
            $('.menu_bar_button i').toggleClass("active");
        });
        
        //scroll up button
        if(this.scrollY > 550){
            $('.scrollbtn').addClass("show");
        }else{
            $('.scrollbtn').removeClass("show");
        }
    });
    
    $('.scrollbtn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navigation .menu_bar li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
});
