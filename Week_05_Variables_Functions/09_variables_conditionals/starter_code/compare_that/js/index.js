$(document).ready(function() {

<<<<<<< HEAD
<<<<<<< HEAD
	var a;
	var b;
	var myName = "Bob";

	//Defining my function
	function whatIsMyName (myName){
		console.log(myName);
	}


	// Using my function
	whatIsMyName (myName);

	//OR you do not need to define the variable at the top of the page and can just pass in a String Literal
	//this is more common with complex code. B/c doesn't really matter how you define a function, just that the instructions of the function exist.
	//more important to know what you are passing into the function.
	whatIsMyName ('Jane')




	$('#submit').click(compareNumbers);

	function compareNumbers() {
		a = $('#a').val();  //.val();  is a jQuery function that gets the value of the input
		a = parseFloat(a, 10);
		b = $('#b').val(); //ANYTHING YOU GET FROM AN INPUT FIELD IS A STRING. therefore we need to convert the string to an number
		b = parseFloat(b, 10);

		console.log(a);
		console.log(b);


		if (a > b) {
			$('#comparison').html('>');
			$('body').removeClass('greenBackground') // this removes a specific class
			$('body').addClass('pinkBackground') //do not need the . because the function is to add a Class.
		} else if (a < b) {
			$('#comparison').html('<');
			$('body').removeClass()  // this removes all classes 
			$('body').addClass('greenBackground')
		} else if (a == b) {
			$('#comparison').html('=');
		}
	}
=======
=======
>>>>>>> ga-students/master
    var a;
    var b;

    // Defining my function
    function whatIsMyName(name) {
        console.log(name);
    }


    // Using my function
    whatIsMyName('Jane');
    console.log(name);



    $('#submit').click(compareNumbers);

    function compareNumbers() {
        a = $('#a').val();
        a = parseInt(a);
        b = $('#b').val();
        b = parseInt(b);
        console.log(a);
        console.log(b);

        if (a>b) {
            $('#comparison').html('>');
            $('body').removeClass();
            $('body').addClass('pinkBackground');
        } else if (a<b) {
            $('#comparison').html('<');
            $('body').removeClass();
            $('body').addClass('greenBackground');
        } else if (a == b) {
            $('#comparison').html('=');
        }
    }
<<<<<<< HEAD
>>>>>>> ga-students/master
=======
>>>>>>> ga-students/master

});