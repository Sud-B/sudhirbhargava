//Object to draw bunny in different scenarios
function MakeBunny (bunnyX, bunnyY) {
  this.x = bunnyX;
  this.y = bunnyY;
  this.score = score;

//sub function for normal bunny
  this.drawBunny = function () {
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(this.x, this.y, 42);
  ellipse(this.x, this.y + 48, 100, 60);
  ellipse(this.x - 15, this.y - 30, 15, 35);
  ellipse(this.x + 15, this.y - 30, 15, 35);
  ellipse(this.x - 10, this.y - 5, 3);
  ellipse(this.x + 10, this.y - 5, 3);
  ellipse(this.x - 30, this.y + 75, 20);
  ellipse(this.x + 30, this.y + 75, 20);
  ellipse(this.x + 30, this.y + 75, 20);
  ellipse(this.x - 30, this.y + 80, 5);
  ellipse(this.x + 30, this.y + 80, 5);
  ellipse(this.x - 35, this.y + 80, 5);
  ellipse(this.x + 35, this.y + 80, 5);
  line(this.x, this.y + 8, this.x - 35, this.y + 3);
  line(this.x, this.y + 8, this.x - 35, this.y + 13);
  line(this.x, this.y + 8, this.x + 35, this.y + 3);
  line(this.x, this.y + 8, this.x + 35, this.y + 13);
  fill(254, 158, 244);
  ellipse(this.x + 15, this.y - 30, 5, 15);
  ellipse(this.x - 15, this.y - 30, 5, 15);
  ellipse(this.x, this.y + 8, 10);
},

//function called on collision to draw bunny with carrot color
this.changeBunny = function () {
  fill(247, 145, 33);
  stroke(0);
  strokeWeight(1);
  ellipse(this.x, this.y, 42);
  ellipse(this.x, this.y + 48, 100, 60);
  ellipse(this.x - 15, this.y - 30, 15, 35);
  ellipse(this.x + 15, this.y - 30, 15, 35);
  ellipse(this.x - 10, this.y - 5, 3);
  ellipse(this.x + 10, this.y - 5, 3);
  ellipse(this.x - 30, this.y + 75, 20);
  ellipse(this.x + 30, this.y + 75, 20);
  ellipse(this.x + 30, this.y + 75, 20);
  ellipse(this.x - 30, this.y + 80, 5);
  ellipse(this.x + 30, this.y + 80, 5);
  ellipse(this.x - 35, this.y + 80, 5);
  ellipse(this.x + 35, this.y + 80, 5);
  line(this.x, this.y + 8, this.x - 35, this.y + 3);
  line(this.x, this.y + 8, this.x - 35, this.y + 13);
  line(this.x, this.y + 8, this.x + 35, this.y + 3);
  line(this.x, this.y + 8, this.x + 35, this.y + 13);
  fill(254, 158, 244);
  ellipse(this.x + 15, this.y - 30, 5, 15);
  ellipse(this.x - 15, this.y - 30, 5, 15);
  ellipse(this.x, this.y + 8, 10);
  textSize(42);
  textAlign(CENTER);
  fill(246, 242, 23);
  text('Bunny POP!', this.x, this.y);
}
}
