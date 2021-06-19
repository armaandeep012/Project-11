//~~~~~~~~~VARIABLES~~~~~~~~~
var path;
var runner;
var wallLeft;
var wallRight;
var bomb1;
var bomb2;
var bomb3;
var bomb4;

function preload(){

  pathImg = loadAnimation("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
  bombImg = loadAnimation("bomb.png");
  energyDrinkImg = loadAnimation("energyDrink.png");

}


function setup(){

  createCanvas(1876, 980);

    path = createSprite(950,500);
    path.addAnimation("path", pathImg);
    path.scale = 2.5;
    path.velocityY = 6;
  
    runner = createSprite(970,700);
    runner.addAnimation("runner", runnerImg);
    runner.scale = 0.1;
  
    bomb1 = createSprite(970,100);
    bomb1.addAnimation("bomb", bombImg);
    bomb1.scale = 0.25;
    bomb1.velocityY = 6;

    bomb2 = createSprite(1200,-250);
    bomb2.addAnimation("bomb", bombImg);
    bomb2.scale = 0.25;
    bomb2.velocityY = 6;

    bomb3 = createSprite(720,100);
    bomb3.addAnimation("bomb", bombImg);
    bomb3.scale = 0.25;
    bomb3.velocityY = 6;

    bomb4 = createSprite(970,-500);
    bomb4.addAnimation("bomb", bombImg);
    bomb4.scale = 0.25;
    bomb4.velocityY = 6;

}


function draw() {
  background(0);
  drawSprites();

  
//~~~~~~~~~~~~~~~WALLS~~~~~~~~~~~~~~~
  wallLeft = createSprite (615, 500, 20, 1000);
  runner.collide(wallLeft);
  wallLeft.visible = false;


  wallRight = createSprite(1300, 500, 20, 1000);
  runner.collide(wallRight);
  wallRight.visible = false;


//~~~~~~~~~~INFINITE LOOP~~~~~~~~~~
  if( path.y > 1080 )
    path.y = 1;

  if( bomb1.y > 1080 )
  bomb1.y = 1;

  if( bomb2.y > 1080 )
  bomb2.y = 1;

  if( bomb3.y > 1080 )
  bomb3.y = 1;

  if( bomb4.y > 1080 )
  bomb4.y = 1;


//~~~~~~~~DYING IF RUNNER TOUCHES THE BOMBS~~~~~~~~
  if( runner.isTouching(bomb1) ){

    runner.visible = false;
    path.velocityY = 0;
    path.visible = false;
    bomb1.visible = false;
    bomb2.visible = false;
    bomb3.visible = false;
    bomb4.visible = false;
  }

  if( runner.isTouching(bomb2) ){

    runner.visible = false;
    path.velocityY = 0;
    path.visible = false;
    bomb1.visible = false;
    bomb2.visible = false;
    bomb3.visible = false;
    bomb4.visible = false;

  }

  if( runner.isTouching(bomb3) ){

    runner.visible = false;
    path.velocityY = 0;
    path.visible = false;
    bomb1.visible = false;
    bomb2.visible = false;
    bomb3.visible = false;
    bomb4.visible = false;

  }

  if( runner.isTouching(bomb4) ){

    runner.visible = false;
    path.velocityY = 0;
    path.visible = false;
    bomb1.visible = false;
    bomb2.visible = false;
    bomb3.visible = false;
    bomb4.visible = false;

  }

//~~~~~~~~~~~~~RESTART BUTTION~~~~~~~~~~~~~
  if( runner.isTouching(bomb1) && keyDown("Space") )
  {
    runner.visible = true;
    path.velocityY = 4;
    path.visible = true;
    bomb1.visible = true;
  }


//~~~~~~~~~~MOVEMENT OF THE RUNNER~~~~~~~~~~
if( keyWentDown("left") && runner.x === 970 )
runner.x = 720;


if( keyWentDown("right") && runner.x === 970 )
runner.x = 1200;


if( keyWentDown("left") && runner.x === 1200 )
runner.x = 970;


if( keyWentDown("right") && runner.x === 720 )
runner.x = 970;

}
