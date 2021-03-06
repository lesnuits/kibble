//$(document).ready(function(){
jQuery(function($) {

	// for simple example
	$('#simpleForm').validate();

	// for advanced example
	$('#demoForm').validate({
		rules: {
			demoName: {
				minlength: 2,
				required: true
			},
			demoEmail: {
				required: true,
				email: true
			},
			demoPass: {
				minlength: 2,
				required: true
			},
		},
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
		},
		submitHandler: function(form) {
			// do other things for a valid form
			user = $('input[name="demoName"]').val();
			alert("Yay!" + user + " submitted a valid form!");
			form.submit();
		}
	});
	
	$('#specialForm').validate({
		rules: {
			demoName: {
				minlength: 2,
				required: true
			},
			demoEmail: {
				required: true,
				email: true
			},
			demoPass: {
				minlength: 2,
				required: true
			},
			optionsGender: "required",
			checkFunny: {
				required: true
			},
			selFriends: {
				required: true
			},
			selAttitude: {
				required: true
			}
		},
		highlight: function(element) {
			$(element).closest('.form-group').removeClass('has-success').addClass('has-error');
		},
		success: function(element) {
			$(element).closest('.form-group').removeClass('has-error').addClass('has-success');
		},
		submitHandler: function(form) {
			// do other things for a valid form
			user = $('input[name="demoName"]').val();
			alert("Yay! " + user + " submitted a valid form!");
			form.submit();
		}
		
	});

}); // end document.ready
