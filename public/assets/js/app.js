$(document).ready(function(){
	$('#submit-burger').on('click', function(e){
		e.preventDefault();
		var burgerInput = $('#burger_name');
		
		if(burgerInput.val().trim() == ''){
			$('.text-danger').remove();
			burgerInput.after('<p class="text-danger">Please enter a burger name.</p>');
			burgerInput.focus();
		} else {
			$('#form-burger').submit();
		}
	});

	$('.submit-customer').on('click', function(e){
		e.preventDefault();

		var id = $(this).data('id');

		var customerInput = $('#customer-name-' + id);

		if(customerInput.val().trim() == ''){
			$('.text-danger').remove();
			customerInput.parent().after('<p class="text-danger">Please enter a customer name.</p>');
			customerInput.focus();
		} else {
			$('#form-customer-' + id).submit();
		}
	})

})