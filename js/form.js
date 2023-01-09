// JavaScript for the form modal

// Get the modal
var modal = document.getElementById("form-modal");

// Get the button that opens the modal
var btn = document.getElementById("form-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
	modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window
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
