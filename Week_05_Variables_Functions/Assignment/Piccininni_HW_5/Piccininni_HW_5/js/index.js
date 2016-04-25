/* 
	Hi Gaby!  I put my feedback on your code in Javascript comments like this one.

	Overall, great job with this one!  Plus I'm glad you got the GitHub issues worked out.

	I really like how you included your pseudocode as comments throughout the code.
	More comments inline below.
*/

$(document).ready(function(){

	/*
		You do not need to declare your "city" variable up here, since you will not use it until the
		cityBackground() function is called.  You can declare and assign the "city" variable at the same
		time inside that function.
	*/
	var city;

	$('form').submit(cityBackground);

	//user inputs city name and clicks submit
	//if input matches city term, background changes to relates background class.
	
	function cityBackground(event){
		event.preventDefault();

		/*
			As I mention above, you can declare and assign the "city" variable all at once here, like this:
				var city = $('#city-type').val(); 
		*/
		city = $('#city-type').val(); 

		console.log(city);

			/*
				Your individual conditional statements are great here, but don't forget that you
				can use "else" to combine all of these if statements together.  That is a good way to
				set a "default" action - for example, if someone types in a city that is not
				one of the ones you are checking - that will reset the background image to that
				first image you see when you first load the page (i.e. when you remove all of the 
				classes from the body tag).  So, for example:

				if (user chose NYC) {
					// Show the NYC background
				} else if (user chose SF) {
					// Show the SF background
				} else if (user chose LA) {
					// Show the LA background
				} else {
					// Remove all classes from body to show the default background.
					// This happens when the user chooses anything but NYC, SF, or LA
				}
			*/
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

