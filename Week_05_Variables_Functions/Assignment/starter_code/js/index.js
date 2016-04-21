$(document).ready(function(){

	var city;

	$('form').submit(cityBackground);

	//user inputs city name and clicks submit
	//if input matches city term, background changes to relates background class.
	
	function cityBackground(event){
		event.preventDefault();
		city = $('#city-type').val(); 

		console.log(city);

			if (city === "New York" || city === "NYC" ||  city === "New York City") {
				$('body').removeClass();
				$('body').addClass('nyc');
			}

		//if city is "San Francisco" || "SF" || "Bay Area" show image of city. If else keep default background
		
			if (city === "San Francisco" || city === "SF" ||  city === "Bay Area") {
				$('body').removeClass();
				$('body').addClass('sf');
			}

		//if city is "Los Angeles" || "LA" || "LAX"  show image of city. If else keep default background
		
			if (city === "Los Angeles" || city === "LA" || city === "LAX") {
				$('body').removeClass();
				$('body').addClass('la');
			}

		//if city is "Austin" || "ATX"  show image of city. If else keep default background
		
			if (city === "Austin" || city === "ATX") {
				$('body').removeClass();
				$('body').addClass('austin');
			}
		
		//if city is "Sydney" || "SYD" show image of city. If else keep default background
		
			if (city === "Sydney" || city === "SYD") {
				$('body').removeClass();
				$('body').addClass('sydney');
			}


	}
});

