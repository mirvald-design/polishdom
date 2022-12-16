const burgerMenu = document.getElementById("burger-menu");
const navigation = document.getElementById("navigation");

burgerMenu.addEventListener("click", function () {
	navigation.classList.toggle("active");
});
