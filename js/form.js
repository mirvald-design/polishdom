// Get the form element
const form = document.getElementById("contact-form");

function openModal() {
    document.getElementById("form-modal").style.display = "block";
}

function closeModal() {
    document.getElementById("form-modal").style.display = "none";
}

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the user's input from the form
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;

    let message = `Имя: ${name}, Номер: ${number}, Email: ${email}`;
    //for sending message to telegram you will need bot apiKey and chatid .
    const botToken = '5888482946:AAH48A_SlXa1XvJlnOPkPcXdOFwCdjHzwF8';
    const chatId = '-1001707722226';
    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    // Send the message
    fetch(url)
        .then(response => response.json())
        .then(data => {
            alert("Успешно отправлено сообщение");
            // Reset the form
            form.reset();
        })
        .catch(error => {
            alert("Ошибка отправки сообщения");
            console.error(error);
        });
});
