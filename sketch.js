function setup() {
    createCanvas(650, 500);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    fill("red");
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  
    //console.log(mouseIsPressed);
  }