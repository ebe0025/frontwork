$(()=>{
    /*
        $('.nav>li').mouseover(function(){

             $('.submenu').stop().slideDown();
        })
        $('.nav').mouseout(function(){
            $('.submenu').stop().slideUp();
        })

        */

        //각각 내려오기
        $('.nav>li').mouseover(function(){
            $(this).children('.submenu').stop().slideDown();
        })

        $('.nav>li').mouseout(function(){
            $(this).children('.submenu').stop().slideUp();
        })

        setInterval(slide, 2000);
        let x = $('#imgslide > div');
        let slideCount = $('#imgslide img').length;
        $('#imgslide>div').append($('#imgslide img:first').clone());

        function slide() {
            x.animate({left: `-=1000px`}, 1000, function() {
                if (parseInt(x.css('left')) <= -1000 * slideCount) {
                    x.css('left', 0);
                }
            });
        }

        
})

