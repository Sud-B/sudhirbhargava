//Declare variables
let bullets = [];
let score;
let pistolX;
let pistolY;
let bulletY;
let bunnyX;
let bunnyY;
let bunnies = {bunnyX, bunnyY};
let timer;
let switchy = false;
let counter = 0;
let every   = 2;
let pop;
let squeal;
let grunt;

//preload function for sound
function preload() {
  soundFormats('mp3', 'ogg');
  pop = loadSound('assets/pop.mp3');
  squeal = loadSound('assets/squeal.mp3');
  grunt = loadSound('assets/grunt.mp3');
}

function setup() {
// Setting an initial random location for bunny
  newBunnyLocation();

//Background green field with sun and Headings
  angleMode(DEGREES);
  let canvas = createCanvas(windowWidth, windowHeight);
  let instruction1 = createElement("h3",'Bunny hops all over the screen. Get bunny if you can! ');
  let instruction2 = createElement("h3",'Click your mouse on the pistol to shoot a carrot at bunny ');
  let header1 = createElement("h1", 'Bunny POP!');
  let header2 = createElement("h2", 'Instructions');
  let button1 = createButton("Return to Sudhir's portfolio", )
  button.position(900, 0);
  button.mousePressed(changeBG);
  header1.style('background-color', '#FDF867');
  header2.style('background-color', '#FDF867');
  instruction1.style('background-color', 'white');
  instruction2.style('background-color', 'white');
  canvas.position(0, 0);
  header1.position(250, 0);
  header2.position(550, 0);
  instruction1.position(680, 0);
  instruction2.position(680, 35);

  canvas.style("z-index", "-1");

  fill(246, 242, 23);
  ellipse(0, 0, 80);
  stroke(246, 242, 23);
  strokeWeight(3);
  line(50, 2, 150, 2);
  line(cos(15) * 50, sin(15) * 50, cos(15) * 100, sin(15) * 100);
  line(cos(30) * 50, sin(30) * 50, cos(30) * 150, sin(30) * 150);
  line(cos(45) * 50, sin(45) * 50, cos(45) * 100, sin(45) * 100);
  line(cos(60) * 50, sin(60) * 50, cos(60) * 150, sin(60) * 150);
  line(cos(75) * 50, sin(75) * 50, cos(75) * 100, sin(75) * 100);
  line(2, 50, 2, 150);
}

function draw() {
  background(33, 148, 25);
  fill(246, 242, 23);
  stroke(246, 242, 23);
  strokeWeight(3);
  ellipse(0, 0, 80);
  line(50, 2, 150, 2);
  line(cos(15) * 50, sin(15) * 50, cos(15) * 100, sin(15) * 100);
  line(cos(30) * 50, sin(30) * 50, cos(30) * 150, sin(30) * 150);
  line(cos(45) * 50, sin(45) * 50, cos(45) * 100, sin(45) * 100);
  line(cos(60) * 50, sin(60) * 50, cos(60) * 150, sin(60) * 150);
  line(cos(75) * 50, sin(75) * 50, cos(75) * 100, sin(75) * 100);
  line(2, 50, 2, 150);
//Pistol is called by the function here
  pistol();
//Function to create bunny is called here
for (let j = 0; j < 20; j++) {
  MakeBunny();
}
let bunny = new MakeBunny(bunnyX, bunnyY);
bunny.drawBunny();

 //Function to generate bullets (carrots) through an array
   run(myFunction);
  for (let i = 0; i < bullets.length; i++) {
        bullets[i].move();
        bullets[i].display();
        if (bullets[i].collision(bunny)) {
          grunt.play();
          bunny.changeBunny();
          console.log("bullet");
//         bullets.splice(i, 1);
        }
    }
}

//function to create random location co-ordinates for bunny
function newBunnyLocation() {
  bunnyX = random(150, windowWidth - 40);
  bunnyY = random(120, windowHeight - 80);
}
//function to give bunny a timed pause at one location
function run(functionToRun) {
    if (millis() - counter > (every * 1000)) {
        functionToRun();
        counter = millis();
    }
}
//function calling for new location of bunny
function myFunction() {
   newBunnyLocation();
}
//function to create pistol
function pistol() {
  fill(0);
  noStroke();
  rect(20, mouseY - 5, 50, 15);
  rect(20, mouseY +10, 20, 20);
  stroke(0);
  line(45, mouseY + 10, 45, mouseY + 15);
  line(40, mouseY + 15, 45, mouseY + 15);
}
//Function to fire bullets (carrots) on mouse press
function mousePressed() {
  pop.play();
  bullets.push(new Bullet(mouseX, mouseY));
}


function windowResized () {
resizeCanvas(windowWidth, windowHeight);
background(33, 148, 25);
  fill(246, 242, 23);
  ellipse(0, 0, 80);
  stroke(246, 242, 23);
  strokeWeight(3);
  line(50, 2, 150, 2);
  line(cos(15) * 50, sin(15) * 50, cos(15) * 100, sin(15) * 100);
  line(cos(30) * 50, sin(30) * 50, cos(30) * 150, sin(30) * 150);
  line(cos(45) * 50, sin(45) * 50, cos(45) * 100, sin(45) * 100);
  line(cos(60) * 50, sin(60) * 50, cos(60) * 150, sin(60) * 150);
  line(cos(75) * 50, sin(75) * 50, cos(75) * 100, sin(75) * 100);
  line(2, 50, 2, 150);
}
