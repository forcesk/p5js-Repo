
var spot =
{
  x: 50,
  y: 50
}

var col =
{
  r: 255,
  g: 0,
  b: 0,
}
var black = 20;

function setup()
{
	createCanvas(windowWidth, windowHeight);
	background(black);
}

function draw()
{
	col.r = random(0,255);
	col.b = random(0,190);
	spot.x = random(0, width);
	spot.y = random(0, height);
		noStroke();

	fill(col.r,col.g,col.b,100);
	ellipse(spot.x,spot.y,24,24);

}

function mousePressed()
{
	black = black-10;
	background(black);
}
