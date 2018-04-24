//JavaScript file

"use strict";

$(document).ready(function () {

    $(".js--nav__mobileNav--icon").click(function() {

        var mainNav=$(".js--main-nav");
        var mobileIcon=$(".js--nav__mobileNav--icon");
        var hamburger=$(".nav__mobileNav--icon-hamburger");
        var hamburgerVis=$(".nav__mobileNav--icon-hamburger:visible");
        var close=$(".nav__mobileNav--icon-close");
        var closeVis=$(".nav__mobileNav--icon-close:visible");

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




    // $("#js--nav__mobileNav").click(function () {
        
    //     alert("imin")
    //     $(".nav__mainNav--mainNavItem").css("display", "block");
    //     $(".nav__mainNav--mainNavItem").css("padding-bottom", ".3rem");

    //     var txt2 = $("<img src='img/Close.png' class='nav__mobileNav--icon-close'>");
    //     $(".nav__mainNav--mainNavItem:first-child").before(txt2);
    //     if ($("#js--main-nav").hasClass("u-hideItem")) {
    //         $("#js--main-nav").toggleClass("u-hideItem");
    //     }
    //     else {
    //         $("#js--main-nav").css("display", "block");
    //     }
    //     if ($("#js--nav__mobileNav").hasClass("u-hideItem")) {
    //         $("#js--nav__mobileNav").css("display", "none");
    //     }
    //     else {
    //         $("#js--nav__mobileNav").toggleClass("u-hideItem");
    //     }     

    // });
});

// function clickMe() {
//     alert("You are communicating with the script.js file");
//     console.log("imin");
// }