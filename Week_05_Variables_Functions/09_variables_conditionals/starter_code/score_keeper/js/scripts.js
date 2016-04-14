$(document).ready(function(){

	var score = 0;
	//assigning the basic score value of zero

	$('#add5').click(addFive);

	function addFive() {
		score = score + 5;
		//take whatever the score is right now, add five, and assign that value to the score variable
		$('#result').html(score);
		//telling the browser to replace the display of the result to the score value 
	}

	$('#add10').click(addTen);

	function addTen() {
		score = score + 10;
		$('#result').html(score);
	}

	$('#sub1').click(subOne);

	function subOne() {
		score = score - 1;
		$('#result').html(score);
	}

	$('#zero').click(reset);

	function reset() {
		score = 0;
		$('#result').html(score);
	}
});