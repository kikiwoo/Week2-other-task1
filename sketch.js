//lesson2 
var ball = {
 position: {x:0, y:80},
 
 speed: {x:3, y:7},
 
 draw: function() {
   if(this.position.y > height) {
    this.speed.y *= -1;
   }
   
   if(this.position.y > height) {
    this.speed.y *= 1;
   }
   
   if(this.position.x < 0) {
    this.speed.x *= 2;
   }

if(this.position.x < 0) {
    this.speed.x *= 2;
   }

   if(mouseIsPressed){
 background(0,120,35);
}

   if(mouseIsPressed) {
    rect(58,532,150,67);
   }
   
   
   this.position.x += this.speed.x;
   this.position.y += this.speed.y;
   
   
   noStroke();
   fill(89,191,195);
   ellipse(this.position.x, this.position.y, 20, 20);
  }
};

function setup() {
 resizeCanvas(500,500);
 background(232,149,35);
}

function draw() {
 ball.draw();
 fill(0,0,0);

}