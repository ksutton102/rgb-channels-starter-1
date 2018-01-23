var lpkidsred;
var lpkidsgreen;
var lpkidsblue;
var lpkidsgray;
var TV

function preload(){
    lpkidsgray = loadImage("images/lpkids-gray.png");
    lpkidsred = loadImage("images/lpkids-red.png");
    lpkidsblue = loadImage("images/lpkids-blue.png");
    lpkidsgreen = loadImage("images/lpkids-green.png");
    TV = loadImage("images/old-TV.png");
}


function setup(){
    createCanvas(749,524);
}

function draw(){
     if(keyIsPressed){
         if(key=="r"){
            image(lpkidsred, 50, 50);
         }
         if(key=="b"){
            image(lpkidsblue, 50, 50);
         }
         
         if(key=="g"){
            image(lpkidsgreen, 50, 50);
          }
          
         if(keyCode==32){
             fill(0);
             rect(50, 50, 500, 374);
             blendMode(LIGHTEST);
             image(lpkidsred, 50, 50);
             image(lpkidsgreen, 50, 50);
             image(lpkidsblue, 50, 50);
         }
    }
        else{
            image(lpkidsgray, 50, 50);
        }
            blendMode(NORMAL);
            image(TV, 0, 0);
}