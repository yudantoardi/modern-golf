$(document).ready(function(){

    $(".accordion .acc-header").click(function(){
        $(".accordion .item").removeClass("show");
        $($(this).parent()).addClass("show");
    });

});