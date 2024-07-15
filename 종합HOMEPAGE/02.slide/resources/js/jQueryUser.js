$(() => {
    // 전체 내려오기
    /*
    $('.nav').mouseover(function() {
        $('.submenu').stop().slideDown();
    });
    $('.nav').mouseout(function() {
        $('.submenu').stop().slideUp();
    })
    */

    // 각각 내려오기
    $('.nav>li').mouseover(function() {
        $(this).children('.submenu').stop().slideDown();
    })
    $('.nav>li').mouseout(function() {
        $(this).children('.submenu').stop().slideUp();
    })


    // setInterval(slide, 2000);
    // // 이미지 fadeIn_Out 적용
    // let x = $('#imgslide>div');
    // function slide() {
    //     if(x.position().left == -2000){
    //         x.animate({left:'-=1000px'}, function(){
    //             x.css('left', 0);
    //         })
    //     }
    //     x.animate({left:'-=1000px'})
    // }

    setInterval(slide, 2000);

    // 이미지 슬라이드 요소
    let x = $('#imgslide>div');
    let slideWidth = $('#imgslide img').width(); // 이미지의 너비
    let slideCount = $('#imgslide img').length; // 이미지의 개수

    // 슬라이드 끝에 첫 번째 슬라이드를 복제하여 추가
    $('#imgslide>div').append($('#imgslide img:first').clone());

    function slide() {
        x.animate({left: `-=${slideWidth}px`}, 1000, function() {
            // 마지막 슬라이드가 끝나면 첫 번째 슬라이드로 빠르게 이동
            if (parseInt(x.css('left')) <= -(slideWidth * slideCount)) {
                x.css('left', 0);
            }
        });
    }




})