$(function(){
	function galleryVoice(){
		
		var sound = $("#galleryVA")[0];
		sound.addEventListener('ended', function(){
			window.location.href='./Gallery.html';
		},true);
		
		sound.play();
	}
	$('.nav-gallery').click(function(){
		galleryVoice();
	});
}); 