// Reference : https://p5js.org/reference/

let colorOn;
let colorOff;
let canva;
let canvaWitdh = window.screen.availWidth/2;
let canvaHeight = window.screen.availHeight/2;
let grid
function setup() {
    colorOn =  color(10, 10, 10);
    colorOff = color("white");
    canva = createCanvas(canvaWitdh, canvaHeight);
    canva.mouseClicked(changeColor);
    background(200);

    grid = initGrid(10,20);
    console.table(grid)
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(colorOn);
    } else {
      fill(colorOff);
    }
    ellipse(mouseX, mouseY, 80, 80);
  }

  function initGrid(nbrCols, nbrRows) {
    let grid = new Array(nbrCols);
    for (let i = 0; i < nbrCols; i++) {
      grid[i] = new Array(nbrRows)
    }
    fillGrid(grid)
    return grid;
  }
  function fillGrid(grid){
      for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j <grid[0].length; j++) {
          grid[i][j] = 0
        }        
      }
  }

  function mouseClicked(){
    console.log("mouse click detected")
  }
  function changeColor(){
    colorOn = color(random(256),random(256),random(256))
  }