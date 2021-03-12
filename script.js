
let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

$(document).ready(function () {
	$('#hidden').fadeIn(5000);
});

function validateForm() {
	var name = document.forms["myForm"]["name"].value;
	var subject = document.forms["myForm"]["subject"].value;
	var email = document.forms["myForm"]["email"].value;
	var message = document.forms["myForm"]["message"].value;
	if (name == "") {
		alert("Name must be filled out");
		return false;
	}
	if (subject == "") {
		alert("Subject must be filled out");
		return false;
	}
	if (email == "") {
		alert("Email must be filled out");
		return false;
	}
	if (message == "") {
		alert("Message must be filled out");
		return false;
	}
	
	alert("message sent")
}
