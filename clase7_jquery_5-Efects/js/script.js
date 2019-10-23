$(function() {

    //$("p:last").hide(4000); //Se va ocultando tardando 4 seg en desaparecer
    // $("p:last").show(4000);

    // $("p:last").hide(4000, function() {
    //     $("p:last").show(4000);
    // });

    $("#btnEnviar").toggle(4000, function() {
        $("#btnEnviar").toggle(4000); //si esta visible lo oculta y bis
    });
    // otros efectos:
    // slideup slidedown 


    //VER PQ NO FUNCIONA
    $("#btnCambiar").click(function() {
            $("#btnCambiar").animate({
                    heigth: "+=50px",
                    width: "+=50px"
                }, 1000)
                .animate() {
                    heigth: "-=50px",
                    width: "-=50px"
                }, 2000);
    });


});