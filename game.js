fireworks = [];
explosions = [];
fire = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(60);
}

function draw() {
  background(1);
  fill(255);
  for(i in fireworks){
    rect(fireworks[i].x,fireworks[i].y,5,5);
    fireworks[i].x+=fireworks[i].dx;
    fireworks[i].y-=fireworks[i].speed;
    if(fireworks[i].y <= fireworks[i].height){
      for(j=0;j<10;j++){
        r = random(0,255);
        g = random(0,255);
        b = random(0,255);
        explosions.push({x:fireworks[i].x,y:fireworks[i].y,dx:random(-2,2),dy:random(-2,2),size:random(0,50),r:r,g:g,b:b});
      }
      fireworks.splice(i,1);
    }
  }
  for(i in explosions){
    fill(explosions[i].r,explosions[i].g,explosions[i].b);
    ellipse(explosions[i].x,explosions[i].y,explosions[i].size,explosions[i].size)
    explosions[i].x+=explosions[i].dx;
    explosions[i].y+=explosions[i].dy;
    explosions[i].size-=1;
    if(explosions[i].size <= 0){
      explosions.splice(i,1);
    }
  }
  if(fire == 1){
   speed = random(1,5);
   fireworks.push({x:windowWidth/2,y:windowHeight+1,dx:random(-2,2),speed:speed,height:(windowHeight/2)-(speed*(windowHeight/10))});
  }
}  

function touchStarted(){
  fire = 1;
  fullscreen(true);
}

function touchEnded(){
  fire = 0;
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
  background(1);
}
