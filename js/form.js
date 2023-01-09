// JavaScript for the form modal

// Get the modal
var modal = document.getElementById("form-modal");

// Get the buttons that open the modal
var adultBtn = document.getElementById("adult");
var childBtn = document.getElementById("child");
var groupBtn = document.getElementById("group");
var groupBtn = document.getElementById("header");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

// When the page loads, check the state of the modal in the cookie
if (getCookie("modalState") === "open") {
	modal.style.display
	"block"
} else {
	modal.style.display = "none"
}

// When the user closes the modal, set the state in the cookie to "closed"
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		setCookie("modalState", "closed", 365);
	}
}

// When the user clicks the adult button, open the modal
adultBtn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks the child button, open the modal
childBtn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks the group button, open the modal
groupBtn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

// When the user submits the form, send the data to Telegram

document.getElementById("contact-form").addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent the form from refreshing the page

	// Get the form data
	var name = document.getElementById("name").value;
	var phone = document.getElementById("phone").value;
	var telegram = document.getElementById("telegram").value;

	// Send the data to Telegram using the Telegram Bot API
	// Replace BOT_TOKEN and CHAT_ID with your own values
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.telegram.org/bot5888482946:AAH48A_SlXa1XvJlnOPkPcXdOFwCdjHzwF8/sendMessage?chat_id=-1001707722226&text=" + encodeURIComponent(name + ": " + phone + " (" + telegram + ")"));
	xhr.send();

	// Close the modal
	modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
