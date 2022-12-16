const questions = document.querySelectorAll('.question');

questions.forEach(question => {
	const btn = question.querySelector('h3');
	const content = question.querySelector('p');

	btn.addEventListener('click', () => {
		content.classList.toggle('active');

		if (content.style.maxHeight) {
			content.style.maxHeight = null;
			btn.textContent = btn.textContent.replace('Hide', 'Show');
		} else {
			content.style.maxHeight = content.scrollHeight + "px";
			btn.textContent = btn.textContent.replace('Show', 'Hide');
		}
	});
});
