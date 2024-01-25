
// Pricing Section javascript starts
$(function() {

	"use strict";

	$(".section-pricing .plans-buttons .col-lg-8 > span").on("click", function() {
		$(this).siblings().removeClass("active").end().addClass("active");
	});

	$(".section-pricing .header-section .plans-buttons .monthly").on("click", function() {
		$(".section-pricing .plans .startup .number").text("9");
		$(".section-pricing .plans .agency .number").text("99");
		$(".section-pricing .plans .single-plan .plan-name").text("Monthly");
	});

	$(".section-pricing .header-section .plans-buttons .yearly").on("click", function() {
		$(".section-pricing .plans .startup .number").text("99");
		$(".section-pricing .plans .agency .number").text("999");
		$(".section-pricing .plans .single-plan .plan-name").text("Yearly");
	});

});
// Pricing section js start 