fireworks = [];
explosions = [];

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(1);
  function touchStarted(){
    speed = random(1,5);
    fireworks.push({x:200,y:401,dx:random(-2,2),speed:speed,height:200-(speed*20)});
  }
  for(i in fireworks){
    rect(fireworks[i].x,fireworks[i].y,5,5);
    fireworks[i].x+=fireworks[i].dx;
    fireworks[i].y-=fireworks[i].speed;
    if(fireworks[i].y <= fireworks[i].height){
      for(j=0;j<10;j++){
        explosions.push({x:fireworks[i].x,y:fireworks[i].y,dx:random(-2,2),dy:random(-2,2),size:random(0,50)});
      }
      fireworks.splice(i,1);
    }
  }
  for(i in explosions){
    ellipse(explosions[i].x,explosions[i].y,explosions[i].size,explosions[i].size)
    explosions[i].x+=explosions[i].dx;
    explosions[i].y+=explosions[i].dy;
    explosions[i].size-=1;
    if(explosions[i].size <= 0){
      explosions.splice(i,1);
    }
  }
}  