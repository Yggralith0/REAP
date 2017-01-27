var music = document.getElementById('sound')
sound.src="hero.mp3"
sound.type="audio/mp3"
document.body.appendChild(sound)

function playAudio(){
	document.getElementById('sound').play();
}

setTimeout("playAudio()", 50000);
