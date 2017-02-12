function RandomizeWord(holder,opt){
  var time = 0;
  var select = this;
  this.now;
  this.then = Date.now();
  
  this.delta;
  this.currentTimeOffset = 0;
  
  this.txt = null;
  this.currentTxt = null;
  this.currentChar = null;
  this.currentTxtLength = null;


  var choices = {
    fps : 30, //how fast the text unscrambles
    timeOffset : 3,
    useCanvas : false,
    mix : false,
    needUpdate : true,
    colors : []
  }
  
  this.needUpdate = true;
  this.fps = choices.fps;
  this.interval = 1000/this.fps;
  this.timeOffset = choices.timeOffset;
  this.mix = choices.mix;
  this.colors = choices.colors;

   this.useCanvas = choices.useCanvas;
  
  this.chars = [
  '&#x2593;','&#x2599;','&#x259A;','&#x259E;','&#x269C;','&#x25BD;','&#x25B3;'
	];//characters used during scramble effect
 
  this.getRandomColor = function () {
    var randomNo = Math.floor( Math.random() * this.colors.length );
    return this.colors[randomNo];
  }

  //if DOM
  if(typeof holder != "undefined"){
    this.holder = holder;
  }

  if(!this.useCanvas && typeof this.holder == "undefined"){
    console.warn('Holder must be defined in DOM Mode.');
  }


  this.getRandCharacter = function(characterToReplace){    
    if(characterToReplace == " "){
      return ' ';
    }
    var randomNo = Math.floor(Math.random() * this.chars.length);
    var lowChoice = Math.random();
    var charPicket = this.chars[randomNo];
    var choosen = charPicket.toLowerCase();
    if(this.mix){
      choosen = lowChoice < 0 ? charPicket.toLowerCase() : charPicket;
    }
    return choosen;
    
  }

  this.writeText = function(txt){
    this.txt = txt;
    this.currentTxt = txt.split('');
    this.currentTxtLength = this.currentTxt.length;

  }

  this.createSingleChar = function (color,character) {
    var span = document.createElement('span');
    span.style.color = color;
    span.innerHTML = character;
    return span;
  }

  this.updateCharacter = function (time) {
    
      this.now = Date.now();
      this.delta = this.now - this.then;

       
      if (this.delta > this.interval) {
        this.currentTimeOffset++;
      
        var txt = [];

        if(this.currentTimeOffset === this.timeOffset && this.currentChar !== this.currentTxtLength){
          this.currentChar++;
          this.currentTimeOffset = 0;
        }
        for(var k=0;k<this.currentChar;k++){
          txt.push(this.currentTxt[k]);
        }

        for(var i=0;i<this.currentTxtLength - this.currentChar;i++){
          txt.push(this.getRandCharacter(this.currentTxt[this.currentChar+i]));
        }


        if(select.useCanvas){
          b.clearRect(0,0,stage.x * stage.dpr , stage.y * stage.dpr);
          txt.forEach(function (a,index) {
            if(index > select.currentChar){
              b.fillStyle = select.getRandomColor();
            }
            b.fillText(select.position.x + spacing, select.position.y);
          });
        }else{
          if(select.currentChar === select.currentTxtLength){
            select.needUpdate = false;
          }
          this.holder.innerHTML = '';
          txt.forEach(function (a,index) {
            var color = null
            if(index > select.currentChar){
              color = select.getRandomColor();
            }
            select.holder.appendChild(select.createSingleChar(color, a));
          }); 
        }
        this.then = this.now - (this.delta % this.interval);
      }
  }

  this.restart = function () {
    this.currentChar = 0;
    this.needUpdate = true;
  }

  function update(time) {
    time++;
    if(select.needUpdate){
      select.updateCharacter(time);
    }
    requestAnimationFrame(update);
  }

  this.writeText(this.holder.innerHTML);

  console.log(this.currentTxt);
  update(time);
}

var yourWorld = document.getElementById('yourworld');
var loveOnes = document.getElementById('yourloveones');

var yourWorldTxt = new RandomizeWord(yourWorld,{
  timeOffset : 2
});

var loveOnesTxt = new RandomizeWord(yourloveones,{
	timeOffset: 2
});

