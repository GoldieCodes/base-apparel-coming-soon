/* This program checks an email input field and ensures 
	that the input matches a valid email address*/
	
const submitButton = document.querySelector('.arrow-div');
	
const alertMessage = document.querySelector('.error-message');

const alertImage = document.querySelector('.icon-error');

const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	submitButton.addEventListener('click', e => { 
	//------IMPORTANT!!------
/*    Here's how this works: after getting all the needed elements from html (as you
	  can see from the 3 active lines above), I added the event listener to the 
	  submit button, AFTER WHICH I got the value of the input field, i.e email.
	  
	  !! Do not attempt to get the value of the input field before this 4th step!!! It
	  won't work and it'll just frustrate you, I spent 3 hours of frustration before 
	  stumbling on this realization. 

	  Remember afterwards, to give your subsequent function a parameter, which
	  should be the value gotten from the input field.
	  Also remember to give the function call an argument when you call it. Good luck! :) */
	
		var email = document.querySelector('input').value;
		validateEmail(email)	
	});


	function validateEmail(email) {
		// the validation constant contains the regex with which every email input is tested. 
		// See the constant at line 10 above.

		if (validation.test(email)) {
			alertMessage.innerHTML = 'Your email has been recorded';
			alertImage.style.visibility = 'hidden';
			submitButton.setAttribute('href', '#');
		}
		else {
			alertImage.style.visibility = 'visible';
			alertMessage.innerHTML = 'Please provide a valid email';
			submitButton.removeAttribute('href', '#');
		}
	
	}		 
	