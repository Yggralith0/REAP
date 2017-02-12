$(function(){
	function aboutVoice(){
		
		var sound = $("#aboutVA")[0];
		sound.addEventListener('ended', function(){
			window.location.href='./about.html';
		},true);
		
		sound.play();
	}
	$('.nav-about').click(function(){
		aboutVoice();
	});
});