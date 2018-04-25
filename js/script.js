//JavaScript file

"use strict";

$(document).ready(function () {

    //Show_Hide Glossary Button Click 
    $(".js--sectionGlossary__viewBtnCont--viewBtn").click(function () {
        $(".glossary").toggleClass("u-hideItem");
        $(".glossary__sticky").css("display", "none");      
    });

    //Show sticky header row in glossary
    $(".js--showSticky").waypoint(function(direction) {
        if (direction == "down") {
            $(".glossary__sticky").css("display", "flex");
        } else {
            $(".glossary__sticky").css("display", "none");
        }
    });

    //Show_Hide mainNav menu                                     
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

