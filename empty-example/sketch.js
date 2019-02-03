function setup() {
  // put setup code here
}

let value  = 0;

function draw() {
  // put drawing code here
  fill(value);
  ellipse(25, 25, 50, 50);
}

function mouseClicked() {
  if (value === 0) {
    value = random(0, 250);
  } else {
    value = random(0, 250);
  }
  console.log("Ellipseee");
}