var box

function setup() {
  createCanvas(400, 400);

box ={
 x: 100,
 y: 100, 
 w: 50,
 h: 50,
 cor: ["blue","green","red","yellow","orange","purple"],
 vx:2,
}

}

function draw() {
  background(0);
rectMode(CENTER);
fill (box.cor[5])
rect (box.x,box.y,box.w,box.h)
box.x = box.x + box.vx;
}