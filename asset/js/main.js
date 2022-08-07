$(document).ready(function(){

    $(".accordion .acc-header").click(function(){
        $(".accordion .item").removeClass("show");
        $($(this).parent()).addClass("show");
    });

    $(".tab-header a").click(function(th){
        th.preventDefault();

        $(".tab-header a").removeClass("active");
        $(this).addClass("active");
        $(".tab-ct").removeClass("show");
        $("#" + $(this).attr("href")).addClass("show");

        $(".map-area img").removeClass("show");
        $(".map-area img." + $(this).attr("href")).addClass("show");
    });

    $(".burger").click(function(){
        $("header").toggleClass("active");

        $(".burger i").toggleClass("fa-bars fa-times");
    });
});