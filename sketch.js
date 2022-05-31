var song;
var img;


function preload(){
song = loadSound('./abelha.mp3');
}



function setup() {
  createCanvas(400,400);
  song.play();
  img = loadImage('./smallBee.png'); 
  
}

function draw() {

  background(255, 204, 0);
  

  //Variaveis
  var x= 0;
  var y = 10;
  var r = 7;
  var np= 6;
  fill(255,255,0);
  //Ciclo For

  for ( i = -1; i < 29; i++){//Ciclo y
     for ( o = +1; o < 40; o++){ //Ciclo x
  polygon(x + i  * r * 2,y*o,r,np);
  }

  }
  //Ciclo para abelha ter posicao random
   for(l=0; l<2; l++){
     image(img, random(0,400), random(0,400))
   }

   
}
//Hexagono
function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
    
  }
  
  endShape(CLOSE);
}

//Interatividade com o rato

function mousePressed(){
  noLoop();
}
function mouseReleased() {
  loop();
}
function mouseClicked() {
  song.stop();
}

