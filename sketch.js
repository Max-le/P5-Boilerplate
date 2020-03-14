// Reference : https://p5js.org/reference/


function setup() {
    createCanvas(640, 480);
    background(200)
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(random(256));
    }
    ellipse(mouseX, mouseY, 80, 80);
  }