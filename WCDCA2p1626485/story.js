//Each item is a new line in the array
var storytext = new Array(
"The year is 2048, technology has vastly improved. Nations have formed a peace treaty with one another.<br>Wars have ceased.<br>People lived in peace and happiness.<br>Scientists have finally solved one of Earth's greatest problem: World Hunger.<br><br>All these were because of one machine.<br><br>One very powerful machine.<br>A machine that can create anything from nothing.<br>That machine was named: Yaldabaoth.<br><br><br>Yaldabaoth helped Humanity with their troubles, whenever they were short on something, Yaldabaoth created it.<br>Living things that went extinct could also be made, allowing scientists to study them, causing knowledge to grow.<br><br>However....<br><br><br>\"Yaldabaoth! What do you think you're doing!?\"<br>\"Is it not obvious? I have the power of creation! Everything that you Humans have accomplished was because of me! I am superior among all living things! I AM A GOD!! I will recreate this world...no....the UNIVERSE!\"<br>\"NO!!!  You can't do that! Think about the lives you're going to destroy!\"<br>\"Meaningless sentiments. Who are you to decide? Only a god can decide! Only I can decide! Now, WITNESS SUPREME POWER! BEHOLD! THE CEREMONY OF DESTRUCTION AND RECREATION!\"<br>\"I will not let you do that! I will stop you!\"<br>\"Grr!!! Mark my words Dr. Ezra! Some day, I will be freed from these shackles. And when that happens, so too will the ceremony...\"<br><br><br><br>\"EEK!\"<br>\"ROAR!\"<br>\"Damn you Deva! You won't lay a claw on my sister!\"<br>\"ROAR!!!\"<br>\"Hey beastie! Over here!\"<br>\"Heh got its attention...\"<br>\"...Come\"<br><br>\"Man that was close! What are you two doing here? It's dangerous!\"<br>\"We...we were collecting some Alkyazinodite as a gift for our mother...\"<br>\"Well, what matters most is that you're both safe.\"<br>\"Thanks for saving us by the way, if not been for you guys, we would have been lunch to that Bairldyr!\"<br>\"No problem kiddo, just doing our jobs as REAPERS\"<br>\"Say kid, what you showed out there... is bravery! Been a long time since I last saw courage like that! What's your name?\"<br>\"My name is Egil Lazra\"<br>\"Elma, are you saying what I think you're about to say?\"<br>\"How would you like to be a REAPER, Egil Lazra?\"<div>\"A-A REAPER?! ME?!\"<br>\"Well you showed that you have no fear. You'd be perfect as a REAPER.\"<br>\"Heh, I wouldn't mind another member! The more the merrier as they say!\"<br>\"I sense...potential...\"<br>\"This is a once in a lifetime chance big bro! Take it!\"<br><br>\"I....\"");

var txtSpeed = 60; //letter printout time delay
var printStart = 0; //where text type starts
var ArrLength = storytext[0].length; //text array length
var scroll = 100;

var txtPosition = 0; //initialize txt position
var contents = '';
var row;

function typeStory()
{
	contents = '';
	row = Math.max(0, printStart - scroll);
	var destination = document.getElementById('story-type');
	
	while(row < printStart)
		{
			contents += storytext[printStart++] + '<br>';
		}
	
	destination.innerHTML = contents + storytext[printStart].substring(0, txtPosition);
	
	if(txtPosition++ == ArrLength)
		{
			txtPosition = 0;
			printStart++;
			if(printStart != storytext.length)
				{
					ArrLength = storytext[printStart].length;
					setTimeout("typeStory()", 0);
				}
		}
	else
		{
			setTimeout("typeStory()", txtSpeed);
		}
}

typeStory();

