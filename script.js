// Pricing Section javascript starts
$(function () {

    "use strict";

    $(".section-pricing .plans-buttons .col-lg-8 > span").on("click", function () {
        $(this).siblings().removeClass("active").end().addClass("active");
    });

    $(".section-pricing .header-section .plans-buttons .monthly").on("click", function () {
        $(".section-pricing .plans .startup .number").text("9");
        $(".section-pricing .plans .agency .number").text("99");
        $(".section-pricing .plans .single-plan .plan-name").text("Monthly");
    });

    $(".section-pricing .header-section .plans-buttons .yearly").on("click", function () {
        $(".section-pricing .plans .startup .number").text("99");
        $(".section-pricing .plans .agency .number").text("999");
        $(".section-pricing .plans .single-plan .plan-name").text("Yearly");
    });

});
// Pricing section js start 

// testimonial section js starts 


$(document).ready(function () {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [650, 1],
        pagination: true,
        navigation: false,
        slideSpeed: 1000,
        autoPlay: true
    });
});
// Testimonial section js ends 