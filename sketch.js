var boy,boyimg
var zombie,zombieimg
var ground,groundimg



function preload(){
  boyimg=loadImage("boy.png")
  groundimg=loadImage("ground2.png")
  zombieimg=loadImage("zombie.png")
}


function setup(){
  createCanvas(600,500)
  background(200)

  boy=createSprite(100,400)
  boy.addImage("boy",boyimg)
  boy.scale=0.5


  ground=createSprite(300,490,600,100)
  ground.addImage("ground",groundimg)
  ground.velocityX=-1
  


  

}



function draw(){
  
  spawnzombie()
  drawSprites()
}

function spawnzombie(){
  if(frameCount%60===0){
    zombie=createSprite(400,430)
    zombie.addImage("zombie",zombieimg)
    zombie.scale=0.3
    zombie.veloccityX=-1
    zombie.lifetime=200

  }
}


   
  



