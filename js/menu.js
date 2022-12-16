const burgerIcon = document.getElementsByClassName("burger-icon");
const navigation = document.getElementsByClassName("navigation");

burgerIcon.addEventListener("click", function () {
	navigation.classList.toggle("active");
});
