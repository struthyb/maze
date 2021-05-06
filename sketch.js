
function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  noFill();
  
  translate(50, 50);
  stroke(130, 45, 230, 10);
  strokeWeight(0.5);
  rect(0, 0, 300, 300);
  
  //grid
  stroke(130, 45, 230, 10);
  strokeWeight(0.5);
  for (let i = 25; i <= 300; i += 25) {
    line(i, 0, i, 300); 
  }
  
  for (let j = 25; j<=300; j += 25) {
    line (0, j, 300, j);
  }
  
  //MAZE BOARD
  stroke(0);
  strokeWeight(4);
  line(0, 0, 125, 0);
  line(150, 0, 300, 0);
  line(0, 0, 0, 300);
  line(300, 0, 300, 300);
  line(0, 300, 150, 300);
  line(175, 300, 300, 300)
  
  line(50, 0, 50, 25);
  line(125, 0, 125, 50);
  line(150, 0, 150, 25);
  line(200, 0, 200, 25);
  line(25, 25, 25, 50);
  line(75, 25, 75, 50);
  line(175, 25, 175, 50);
  line(225, 25, 225, 50);
  line(250, 25, 250, 75);
  line(275, 25, 275, 100);
  line(100, 50, 100, 75);
  line(150, 50, 150, 125);
  line(50, 75, 50, 100);
  line(75, 75, 75, 150);
  line(125, 75, 125, 125);
  line(175, 75, 175, 175);
  line(225, 75, 225, 150);
  line(100, 100, 100, 150);
  line(200, 100, 200, 275);
  line(25, 150, 25, 225);
  line(50, 150, 50, 200);
  line(150, 150, 150, 200);
  line(275, 150, 275, 175);
  line(125, 175, 125, 225);
  line(250, 175, 250, 225);
  line(225, 200, 225, 250);
  line(175, 225, 175, 300);
  line(25, 250, 25, 275);
  line(50, 250, 50, 300);
  line(75, 250, 75, 275);
  line(125, 250, 125, 275);
  line(100, 275, 100, 300);
  line(150, 275, 150, 300);
  
  line(75, 25, 125, 25);
  line(150, 25, 175, 25);
  line(250, 25, 275, 25);
  line(25, 50, 75, 50);
  line(125, 50, 150, 50);
  line(175, 50, 225, 50);
  line(0, 75, 25, 75);
  line(75, 75, 125, 75);
  line(175, 75, 225, 75);
  line(25, 100, 50, 100);
  line(225, 100, 275, 100);
  line(25, 125, 75, 125);
  line(125, 125, 175, 125);
  line(250, 125, 300, 125);
  line(25, 150, 50, 150);
  line(75, 150, 150, 150);
  line(225, 150, 250, 150);
  line(50, 175, 125, 175);
  line(200, 175, 275, 175);
  line(75, 200, 125, 200);
  line(150, 200, 200, 200);
  line(275, 200, 300, 200);
  line(25, 225, 75, 225);
  line(100, 225, 175, 225);
  line(250, 225, 275, 225);
  line(25, 250, 50, 250);
  line(75, 250, 175, 250);
  line(225, 250, 300, 250);
  line(200, 275, 275, 275);
  
  resetMatrix();

  textSize(10);
  fill(0, 0, 255);
  noStroke();
  textAlign(RIGHT)
  text("DOUBLE CLICK to clear", 350, 385);
  text("CLICK & DRAG to draw", 350, 375);
}

//PLAYER
function mouseDragged(){
  stroke(255, 0, 0)
  line(mouseX, mouseY, pmouseX, pmouseY)
 
}

function doubleClicked(){
  clear();
  background(220);
}
