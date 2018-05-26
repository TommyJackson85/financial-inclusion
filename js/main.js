$(document).ready(function () {
  //your code here

  	var nextExample = 'warning';
  	$('#warning').hide();
	$('#welcome').show();
  	$('#gold').hide();
  	$('#silver').hide();
  	$('#bronze').hide();

  	 $("#app-base").hide( "slow" );

	$( "#dashboardButton" ).on( "click", function() {
	    $( "#options" ).hide( "slow" );
	   	$("#dashboard").show( "slow" );
	   	$('#warning').hide();
		$('#welcome').hide();
  		$('#gold').hide();
  		$('#silver').hide();
  		$('#bronze').hide();
	});
	$( ".optionsButton" ).on( "click", function() {
		 $("#app-base").show( "slow" );
	    $( "#dashboard" ).hide( "slow" );
	   	$("#options").show( "slow" );
	   	$('#warning').hide();
		$('#welcome').hide();
  		$('#gold').hide();
  		$('#silver').hide();
  		$('#bronze').hide();
	});


	$( ".nextScenario" ).on( "click", function() {
		if(nextExample == 'welcome'){
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
		} else if (nextExample == 'gold'){
			$('#warning').hide();
			$('#welcome').hide();
  			$('#gold').show();
  			$('#silver').hide();
  			$('#bronze').hide();
  			nextExample = 'silver';
		} else if (nextExample == 'silver'){
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
	    /*$( "#options" ).hide( "slow" );
	   	$("#dashboard").hide( "slow" );*/
	   	 $("#app-base").hide( "slow" );
	});

});