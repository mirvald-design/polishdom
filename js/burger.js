const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', () => {
	menuItems.classList.toggle('open');
});

document.addEventListener('click', (event) => {
	if (!event.target.closest('.menu-toggle') && menuItems.classList.contains('open')) {
		menuItems.classList.remove('open');
	}
});
