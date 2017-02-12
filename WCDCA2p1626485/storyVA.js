$(function(){
	function storyVoice(){
		
		var sound = $("#storyVA")[0];
		sound.addEventListener('ended', function(){
			window.location.href = './story.html';
		}, true);
		
		sound.play();
	}
	$('.nav-story').click(function(){
		storyVoice();
	});
});