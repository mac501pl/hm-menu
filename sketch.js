const ratio = 10;
let red, green, blue;
const speed = 0.1;

function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
}

function draw() {
  frameRate(24);
  for (let i = 0; i < height; i += ratio) {
    red = map(
      i,
      0,
      height,
      map(sin(frameCount * speed), -1, 1, 200, 45),
      map(sin(frameCount * speed), -1, 1, 28, 0)
    );
    green = map(
      i,
      0,
      height,
      map(sin(frameCount * speed), -1, 1, 20, 70),
      map(sin(frameCount * speed), -1, 1, 0, 10)
    );
    blue = map(
      i,
      0,
      height,
      map(sin(frameCount * speed), -1, 1, 110, 90),
      map(sin(frameCount * speed), -1, 1, 12, 10)
    );
    fill(red + random(-1, 1), green + random(-1, 1), blue + random(-1, 1));
    rect(0, i, width, ratio);
  }
}
