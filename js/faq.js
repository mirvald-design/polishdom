$(document).ready(function () {
	// Hide all answers by default
	$('.answer').hide();

	// Show answer when question is clicked
	$('.question1').click(function () {
		$(this).siblings('.answer').slideToggle();
	});
});
