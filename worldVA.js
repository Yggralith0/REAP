$(function () {
	function worldVoice() {

		var sound = $("#worldVA")[0];
		sound.addEventListener('ended', function () {
			window.location.href = './world.html';
		}, true);

		sound.play();
	}
	$('.nav-world').click(function () {
		worldVoice();
	});
});

