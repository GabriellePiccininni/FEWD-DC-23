$(document).ready(function() {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	//This is the total of the cash register when I load the page
	var total = 0;

	$('#entry').submit(useRegister);
	//selecting the thing called entry, and when I submit it I want to use my register

	function useRegister(event) {
		event.preventDefault();
		//Get what the user entered. 
		var newEntry = $('#newEntry').val();
		$('#entries').html('<td>' + newEntry + '</td>');

		//all imputs are text, so need to convert to number
		newEntry = parseInt(newEntry);
		total = total + newEntry;
		console.log(total);

		$('#total').html(total);

	}
=======
=======
>>>>>>> ga-students/master
=======
>>>>>>> ga-students/master
=======
>>>>>>> ga-students/master
    // This is the total of my register when I load page.
    var total = 0;

    $('#entry').submit(useRegister);

    function useRegister(event) {
        event.preventDefault();

        // Get what the users entered.
        var newEntry = $('#newEntry').val();
        $('#entries').html('<td>' + newEntry + '</td>');

        newEntry = parseInt(newEntry);
        total = total + newEntry;
        console.log(total);

        $('#total').html(total);
    }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ga-students/master
=======
>>>>>>> ga-students/master
=======
>>>>>>> ga-students/master
=======
>>>>>>> ga-students/master

});