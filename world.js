function changeColor1(){
	document.getElementById("Earthbtn").className="buttonWorld active";
	document.getElementById("AWbtn").className="buttonWorld";
	document.getElementById("Olitebtn").className="buttonWorld";
	
	document.getElementById("Description").innerHTML = "Due to Yaldabaoth's power of creation, various life forms have sprung up. REAP wishes to forge ties with the new xeno creatures. However, there are now beasts known as \"Devas\" that roam Earth and though they tend to be calm around Humans, there are those that will attack on sight.";
	
	document.getElementById("IMG").src="Earth.png";
}

function changeColor2(){
	document.getElementById("Earthbtn").className="buttonWorld";
	document.getElementById("AWbtn").className="buttonWorld active";
	document.getElementById("Olitebtn").className="buttonWorld";
	
	document.getElementById("Description").innerHTML = "The Affinity World is a chart that shows the ties people have with one another. How they feel about a certain person is shown in the Affinity World. It is great to build affinity with those around you.";
	
	document.getElementById("IMG").src="AWbg.png";
}

function changeColor3(){
	document.getElementById("Earthbtn").className="buttonWorld";
	document.getElementById("AWbtn").className="buttonWorld";
	document.getElementById("Olitebtn").className="buttonWorld active";
	
	document.getElementById("Description").innerHTML = "Your hometown. Apparently, it seems that you were not born there but rather found and raised there since you were young. Where you actually came from is unknown. (Please note that the picture shown is just a sketch.)";
	
	document.getElementById('IMG').src="Olite.png";
}

function init(){
	changeColor1();
	document.getElementById("Earthbtn").onclick = changeColor1;
	document.getElementById("AWbtn").onclick = changeColor2;
	document.getElementById("Olitebtn").onclick = changeColor3;
}

window.onload = init;