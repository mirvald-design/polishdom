$(document).ready(function () {
	// Hide all answers by default
	$('.answer').hide();

	// Show answer when question is clicked
	$(document).on('click', '.question1', function () {
		$(this).siblings('.answer').slideToggle();
	});
});
