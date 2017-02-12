$(function(){
	function classesVoice(){
		
		var sound = $("#classesVA")[0];
		sound.addEventListener('ended', function(){
			window.location.href='./classes.html';
		},true);
		
		sound.play();
	}
	$('.nav-classes').click(function(){
		classesVoice();
	});
});