//For whichever button i click on, i want to change the body color to the value of that button

// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

$('#switcher li').click(switchColor);

function switchColor() {
	console.log($(this).attr('data-color'));				//use this to show the data value of the button i clicked on
	
	//gets my color class name from data-color attr.
	var bodyColor = $(this).attr('data-color');
	
	//sets the class name to my body
	$('body').attr('class', bodyColor)
}

// function switchGray() {
//   $('body').attr('class', 'gray');		//better than .adClass('gray') because you might even up with many classes on the background
// }										//but only want to do this when body will only ever have one clas

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }