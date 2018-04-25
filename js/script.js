//JavaScript file

"use strict";

$(document).ready(function () {

    $(".js--sectionGlossary__viewBtnCont--viewBtn").click(function () {
        $(".glossary").toggleClass("u-hideItem");

        if($(".glossary").hasClass("u-hideItem")) {
            $(".stickyNav").css("display", "none");
        }

        
    });

    $(".js--nav__mobileNav--icon").click(function () {

        var mainNav = $(".js--main-nav");
        var hamburger = $(".nav__mobileNav--icon-hamburger");
        var hamburgerVis = $(".nav__mobileNav--icon-hamburger:visible");
        var close = $(".nav__mobileNav--icon-close");

        mainNav.slideToggle(200);
        mainNav.addClass("mainBlock")

        if ((hamburgerVis).length == 0) {
            hamburger.css("display", "block");
            close.css("display", "none");

        }
        else {

            hamburger.css("display", "none");
            close.css("display", "block");
        }

    });

});

