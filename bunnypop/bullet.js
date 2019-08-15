// bullet (carrot) object
function Bullet(_xPos, _yPos) {

  // attributes
  this.x = 70;
  this.y = _yPos;
  this.speed = 10;
  this.size1 = 40;
  this.size2 = 10;
  this.score = score;

  // methods
  //To draw carrot
  this.display = function() {
    fill(247, 145, 33);
    noStroke();
    ellipse(this.x, this.y, this.size1, this.size2);
    strokeWeight(6);
    stroke(58, 195, 11);
    line(this.x - 25, this.y - 5, this.x - 20, this.y);
    line(this.x - 30, this.y, this.x - 20, this.y);
    line(this.x - 25, this.y + 5, this.x - 20, this.y);
  },

//To move carrot
  this.move = function() {
    this.x = this.x + this.speed;
  },

//Condition for collision action
  this.collision = function(makeBunny) {
    let distance = dist(this.x, this.y, bunnyX, bunnyY);
    if (distance < 75) {
      return true;
      this.x = 5000;
      bullets.splice(i, 1);
      score ++;
    } else {
      return false;
    }
  },

  this.score = function(makeBunny) {
    let distance = dist(this.x, this.y, bunnyX, bunnyY);
    if (distance = 75) {
    this.score = this.score + 1;
  }
}
}
