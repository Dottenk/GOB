$(document).ready(function () {
    //Carga el loader del form
    $("#formClaveUnica form").submit(function () {
        var fieldset = $(this).find("fieldset");
        var ajaxLoader = $(fieldset).find(".ajaxLoader");
        $(ajaxLoader).css({ visibility: "visible", left: ($(fieldset).width() / 2 - $(ajaxLoader).width() / 2) + "px", top: ($(fieldset).height() / 2 - $(ajaxLoader).height() / 2) + "px" });
    });

    //Carga la funcionalidad de menu sliders de los botones debajo del form de ClaveUnica
    $(".menuButton").click(function () {
        var clickedMenuButton = this;

        $(".menuButton").not(clickedMenuButton).removeClass("active");
        $(clickedMenuButton).toggleClass("active");

        if ($(clickedMenuButton).hasClass("active")) {
            if ($(".menuContent.active").length) {
                $(".menuContent.active").slideUp(400, function () {
                    $(".menuContent").removeClass("active");
                    $($(clickedMenuButton).attr("href")).slideDown(400).addClass("active");
                });
            } else {
                $($(clickedMenuButton).attr("href")).slideDown(400).addClass("active");
            }
        } else {
            $(".menuContent.active").slideUp(400, function () {
                $(".menuContent").removeClass("active");
            });
        }

        return false;
    });


    $("input.rut").change(function () {
        var rut = $(this).val();
        $(this).val(RutHelper.formatearFull(rut, false));

        return false;
    });
});
