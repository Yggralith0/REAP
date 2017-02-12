$(function(){
	function accessVoice(){
		
	  var sound = $("#accessVA")[0];
		sound.addEventListener('ended', function(){
			window.location.href = './Access.html';
		}, true);
		
		sound.play();
	}
	$('.enter').click(function(){
		accessVoice();
	});
});