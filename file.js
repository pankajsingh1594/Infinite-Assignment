$(document).ready(function(){
    /* slider */
    $(".banner").slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
    })

    /* tab */
    $(".pods div").on("click",function(){
        const tab = $(this).text();
        const image = $(this).find(".old").attr("src");
        const background = $(this).css("background");
        const color = $(this).css("color");
        const content = $(this).find(".title").attr("href");
        $(".target").text(tab);
        $(".new").attr("src", image);
        $(".experience").css("color",color);
        $(".experience").css("background",background);
        $(content).show();
        $(content).siblings().hide();
    })

    /* accordion */
    $(".parent").on("click",function(){
        const accordion = $(this).parent();
        accordion.find(".child").slideToggle("slow");
        accordion.siblings().find(".child").slideUp("slow");
    })

    /* Back to top button */
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".backToTop").fadeIn();
        } else{
            $(".backToTop").fadeOut();
        }
    })

    $(".backToTop").on("click",function(){
        $("html , body").animate({scrollTop: 0},1000);
    })

    /* Video will play only in viewport */
    $(window).scroll(function(){
        if((".video").is("in:viewport")){
            $(".video")[0].play();
        } else{
            $(".video")[0].pause();
        }
    })
})