//Define Total [JavaScript]
var total = 0;

//Wait for the user to submit the form (type a number hit enter)
$('form#entry').submit(addToTotal);
	//can also use the #entry because that is the name of the form, but bc we only have one form here, we can use 'form'

//When the user subimits the form:
function addToTotal(){
	event.preventDefault();
	//Identity new entry field and Get field value
	var entry = $('#newEntry').val();
		// the variable 'entry' is being defined as the value of the newEntry field

	//Add value to total. anything that comes out of an imput field is a string, so have to convert to a number
	entry = parseInt(entry);
	total = total + entry;

	//Display new total value
	//using .html whenever you want to replace content
	$('#total').html(total);
	
	//Clear the form   
	//DO NOT select the entore form here because you want to change the value of a piece of the form
	$('#newEntry').val('');

	//Show each value the user entered
	$('#entries').append('<tr><td>' + entry + '<tr><td>');

}
