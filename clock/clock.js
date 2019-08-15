function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);

  let hrs = hour();
  mns = minute();
  scs = second();
  mn = nf(mns, 2);
  sc = nf(scs, 2);
  hr = nf(hrs, 2);


  fill(255);
  noStroke();
  textSize(36);
  text(hr + ':' + mn + ':' + sc, 50, 50);

  translate(300, 300);
  rotate(-90);

  // loop to create 3 coordinated rectangles

  noFill(0);
  strokeWeight(12);
  let endh = map(hrs % 12, 0, 12, 0, 360);
  push();
  rotate(endh);
  stroke(255, 5, 0);
  line(0, 0, 100, 0);
  pop();

  let endm = map(mns, 0, 60, 0, 360);
  push();
  rotate(endm);
  stroke(5, 255, 0);
  strokeWeight(7);
  line(0, 0, 125, 0);
  pop();

  let ends = map(scs, 0, 60, 0, 360);
  push();
  rotate(ends);
  stroke(0, 5, 255);
  strokeWeight(4);
  ellipse(50, 0, 196, 20);
  pop();

  
  stroke(0, 5, 255);
  ellipse(0, 0, 39);
  ellipse(60, 120, 7);
  ellipse(120, 60, 7);
  ellipse(180, 0, 39);
  ellipse(120, -60, 7);
  ellipse(60, -120, 7);
  ellipse(0, 180, 39);
  ellipse(-60, 120, 7);
  ellipse(-120, 60, 7);
  ellipse(-175, 0, 39);
  ellipse(-120, -60, 7);
  ellipse(-60, -120, 7);
  ellipse(0, -180, 39);
  stroke(255, 5, 7);
  strokeWeight(4);
  ellipse(0, 0, 450);
  stroke(5, 255, 0);
  ellipse(0, 0, 475);
  stroke(255, 5, 7);
  strokeWeight(4);
  ellipse(0, 0, 500);
}
