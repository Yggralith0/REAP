$(function(){
	function weaponVoice(){
		
		var sound = $("#weaponVA")[0];
		sound.addEventListener('ended', function(){
			window.location.href='./Weapons.html';
		},true);
		
		sound.play();
	}
	$('.nav-weapons').click(function(){
		weaponVoice();
	});
}); 