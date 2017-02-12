$(function(){
	function quotesVoice(){
		
		var sound = $("#quotesVA")[0];
		sound.addEventListener('ended', function(){
			window.location.href='./quotes.html';
		},true);
		
		sound.play();
	}
	$('.nav-quotes').click(function(){
		quotesVoice();
	});
});