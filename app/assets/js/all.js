$(document).ready(function () {

    //navbar滾動變色
    $(window).scroll(function (e) {
        if ($(window).scrollTop() <= 0) {
            $('.navbar').addClass('bg-white');
            $('.navbar').removeClass('bg-light');
        } else {
            $('.navbar').addClass('bg-light');
            $('.navbar').removeClass('bg-white');
        }
    });

    $('#load img').load(function() {
        //圖片預設隱藏
        $(this).hide();
        //使用fadeIn特效
        $(this).fadeIn('5000');
        });


    // $(body).scroll(function () {
    //     $("p").slideToggle("slow");
    // });





})