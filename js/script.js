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
        $(".js--popup1").css("transform", "rotatey(-180deg)");
        $("#popup1").css("transform", "rotatey(0)");
        $("#popup1").css("opacity", "1");
        $("#popup1").css("visibility", "1");                
    });

    $(".js--popBack1").click(function () {         
       $(".js--popup1").css("transform", "rotatey(0)");
        $("#popup1").css("transform", "rotatey(-180)");
        $("#popup1").css("opacity", "0");
        $("#popup1").css("visibility", "0");         
    });

    //Card2
    $(".js--cardFrontTechnical2").click(function () {
        $(".js--popup2").css("transform", "rotatey(-180deg)");
        $("#popup2").css("transform", "rotatey(0)");
        $("#popup2").css("opacity", "1");
        $("#popup2").css("visibility", "1");  
    });

    $(".js--popBack2").click(function () {
        $(".js--popup2").css("transform", "rotatey(0)");
        $("#popup2").css("transform", "rotatey(-180)");
        $("#popup2").css("opacity", "0");
        $("#popup2").css("visibility", "0"); 
    });

    //Card3
    $(".js--cardFrontTechnical3").click(function () {
        $(".js--popup3").css("transform", "rotatey(-180deg)");
        $("#popup3").css("transform", "rotatey(0)");
        $("#popup3").css("opacity", "1");
        $("#popup3").css("visibility", "1");  
    });

    $(".js--popBack3").click(function () {
        $(".js--popup3").css("transform", "rotatey(0)");
        $("#popup3").css("transform", "rotatey(-180)");
        $("#popup3").css("opacity", "0");
        $("#popup3").css("visibility", "0"); 
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
        var screenWidth = window.matchMedia("(max-width: 600px");
        if (!screenWidth.matches) {
            if (direction == "down") {
                $(".glossary__sticky").css("display", "flex");
            } else {
                $(".glossary__sticky").css("display", "none");
            }
        }
    });
});

