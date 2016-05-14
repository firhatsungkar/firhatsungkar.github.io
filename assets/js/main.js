(function($){

    $(".navbar").css("background","transparent");

    // Navigation
    var mainMenu = $("#mainmenu").find('li');
    mainMenu.find('a').on('click', function(){
        var $this = $(this);
        var attr = $this.attr('href');
        var attrPos = $(attr).offset().top;

        $this.parent().addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop: attrPos
        }, 500);
    });

    // Scroll Event
    var lastScrollUp = 0;
    $(window).scroll(function(){
        $(".navbar").css("background","transparent");
        var wPos = $(this).scrollTop();
        var homePos = $("#home").offset().top * 90/100;
        var aboutPos = $("#about").offset().top * 90/100;
        var portfolioPos = $("#portfolio").offset().top * 90/100;
        var contactPos = $("#contact").offset().top * 90/100;

        // If scroll Down
        if (wPos > aboutPos / 20/100)
        {
            $('nav').addClass('animated slideOutUp');
        }

        // If Scroll Up
        if (wPos < lastScrollUp)
        {
            $('nav').removeClass('animated').removeClass('slideOutUp');
        }

        // Background .navbar
        if (wPos > homePos) { $(".navbar").css("background"," #F2E8C4"); }

        if (wPos > homePos & wPos < aboutPos)
        {
            activeLink(1);
        }

        if(wPos > aboutPos & wPos < portfolioPos)
        {
            activeLink(2);
        }

        if(wPos > portfolioPos & wPos < contactPos)
        {
            activeLink(3);
        }

        if(wPos > contactPos)
        {
            activeLink(4);
        }

        function activeLink(pos)
        {
            $('#mainmenu').find('li').eq(pos-1).addClass('active').siblings().removeClass('active');
        }

        lastScrollUp = wPos;
    }); 
})(jQuery);