'use strict';

$(document).ready(function () {
	//your code here

	var nextExample = 'warning';
	$('#warning').hide();
	$('#welcome').show();
	$('#gold').hide();
	$('#silver').hide();
	$('#bronze').hide();

	$('#dashboard').hide();
	$('#options').hide();
	$("#dashboardButton").on("click", function () {
		$("#options").hide("slow");
		$("#dashboard").show("slow");
	});
	$(".optionsButton").on("click", function () {
		$("#dashboard").hide("slow");
		$("#options").show("slow");
	});
	$(".optionsButton").on("click", function () {
		$("#dashboard").hide("slow");
		$("#options").show("slow");
	});

	$(".nextScenario").on("click", function () {
		if (nextExample == 'welcome') {
			$('#warning').hide();
			$('#welcome').show();
			$('#gold').hide();
			$('#silver').hide();
			$('#bronze').hide();
			nextExample = 'warning';
		} else if (nextExample == "warning") {
			$('#warning').show();
			$('#welcome').hide();
			$('#gold').hide();
			$('#silver').hide();
			$('#bronze').hide();
			nextExample = 'gold';
		} else if (nextExample == 'gold') {
			$('#warning').hide();
			$('#welcome').hide();
			$('#gold').show();
			$('#silver').hide();
			$('#bronze').hide();
			nextExample = 'silver';
		} else if (nextExample == 'silver') {
			$('#warning').hide();
			$('#welcome').hide();
			$('#gold').hide();
			$('#silver').show();
			$('#bronze').hide();
			nextExample = 'bronze';
		} else {
			$('#warning').hide();
			$('#welcome').hide();
			$('#gold').hide();
			$('#silver').hide();
			$('#bronze').show();
			nextExample = 'welcome';
		}
		$("#options").hide("slow");
		$("#dashboard").hide("slow");
	});
});
