//JavaScript file

"use strict";

$(document).ready(function () {
    //Header page--Show_Hide mainNav menu                                     
    $(".js--nav__mobileNav--icon").click(function () {

        var mainNav = $(".js--main-nav");
        var hamburger = $(".nav__mobileNav--icon-hamburger");
        var hamburgerVis = $(".nav__mobileNav--icon-hamburger:visible");
        var close = $(".nav__mobileNav--icon-close");

        mainNav.slideToggle(200);

        if ((hamburgerVis).length == 0) {
            hamburger.css("display", "block");
            close.css("display", "none");

        }
        else {
            hamburger.css("display", "none");
            close.css("display", "block");
        }

    });

    //Projects page--Show technical deets popups for touch screens
    //Card1
    $(".js--cardFrontTechnical1").click(function () {
        $(".js--popup1").css("display", "none");
    });

    $(".js--popBack1").click(function () {
        $(".js--popup1").css("display", "flex");
    });

    //Card2
    $(".js--cardFrontTechnical2").click(function () {
        $(".js--popup2").css("display", "none");
    });

    $(".js--popBack2").click(function () {
        $(".js--popup2").css("display", "flex");
    });

    //Card3
    $(".js--cardFrontTechnical3").click(function () {
        $(".js--popup3").css("display", "none");
    });

    $(".js--popBack3").click(function () {
        $(".js--popup3").css("display", "flex");
    });
    /********************
    *GLOSSARY
    ********************/

    //Show_Hide Glossary Button Click 
    $(".js--sectionGlossary__viewBtnCont--viewBtn").click(function () {
        $(".glossary").toggleClass("u-hideItem");
    });

    //Check if glossary open on term click
    $(".js--openGlossary").click(function () {
        if (!$('js--checkVisible').is(':visible')) {
           $(".glossary").removeClass("u-hideItem");
        }
    });

    //Show sticky header row in glossary
    $(".js--showSticky").waypoint(function (direction) {
        if (direction == "down") {
            $(".glossary__sticky").css("display", "flex");
        } else {
            $(".glossary__sticky").css("display", "none");
        }
    });



});

