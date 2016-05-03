var foodImages = [
<<<<<<< HEAD
	'images/food1.jpg',
	'images/food2.jpg',
	'images/food3.jpg',
	'images/food4.jpg', 
	'images/food5.jpg',
	'images/food6.jpg',
	'images/food7.jpg',
	'images/food8.jpg'   //the last element in your array should not have a comma
];



var currentIndex = 0;    //assuming that when load the page, we are looking at first image

//Skip button: when you click the button, display the next image in the array

$('.btn').click(function() {
	var action = $(this).val();  //when i click on a button, i cant to get the value of the image. store this in a variable called action

	if (action == "Skip") {
		if (currentIndex < (foodImages.length - 1)  ) {
		// go to the next image.
		//Joni puts the .length equation in () just to see the unit easier
		currentIndex = currentIndex + 1;
		} else { 
			currentIndex = 0;
		}
	}
	
	if (action == "Back"){
		if (currentIndex > 0) {
		//Without ^^ current index would become negative, and then with hit Skip button, will not go to next image, but progress through negative numbers first.
		currentIndex = currentIndex - 1;
		//go to previous image
		} else {
			currentIndex = foodImages.length - 1;
		}

	}

	
	$('#image-to-vote-on').attr('src', foodImages[currentIndex]);
	// changing the value of the src attribute to whatever file path is in the food image array of whatver food image in browser
	//we move ^^ piece outside of the if statements because it applies to both indexes
=======
    'images/food1.jpg',
    'images/food2.jpg',
    'images/food3.jpg',
    'images/food4.jpg',
    'images/food5.jpg',
    'images/food6.jpg',
    'images/food7.jpg',
    'images/food8.jpg'
];

var currentIndex = 0;

// Skip button: When you click the button, display the next image in the array.

$('.btn').click(function() {
    var action = $(this).val();

    if (action == "Skip") {
        if ( currentIndex < (foodImages.length - 1) ) {
            // Go to the next image.
            currentIndex = currentIndex + 1;
        } else {
            currentIndex = 0;
        }
    }

    if (action == "Back") {
        // Make sure currentIndex is not on the first image!
        if (currentIndex > 0) {
            // Go to the previous image.
            currentIndex = currentIndex - 1;
        } else {
            currentIndex = foodImages.length - 1;
        }
    }

    $('#image-to-vote-on').attr('src', foodImages[currentIndex]);
>>>>>>> ga-students/master
});