"use strict"

var time = 90;
var score = 0;
var bg_color;
var tx_color;
faceScheduler();
setFace();
timer();

var timerStop = setInterval(timer,1000);
var faceStop = setInterval(setFace,1000);
var faceSchedulerStop = setInterval(faceScheduler,1000);

// time function 
function timer(){
    
    if(time===1){
        clearInterval(timerStop);
        localStorage.setItem("score",score);
        window.open("../level 3/EndGame.html","_self");
    }
    if(time===11)
    {
        leftTimer();
    }
    time=time-1;
    document.getElementById("time").innerHTML=time;
}
function leftTimer(){
    $("#time").css({"color":"white","text-shadow":"4px 4px 25px gray,1px 2px black"});
}

// when click on circle then score increase
 $("#circle--face").on("click",function(){
        score = score + 1;
        document.getElementById("score").innerHTML=score;
   });

function setFace(){
    if(time===1){
        clearInterval(faceStop);
        clearInterval(faceSchedulerStop);
    }
    var x = getXcoordinate();
    var y = getYcoordinate();  
    $("#circle--face").css({"margin-left":x,"margin-top":y,"border":"1px solid black","width":"80px","text-align":"center","border-radius":"50px","background-color":bg_color,"box-shadow": "1px 1px 3px 1px rgba(0, 0, 0, 0.5) , -1px -1px 3px 1px rgba(0, 0, 0, 0.5)","cursor":"pointer","color":tx_color});
}


function faceScheduler(){
    var choose = (Math.floor(Math.random()*4)+1);
    var face="";
    if(choose === 1){
        face = "A";
        bg_color="red";
        tx_color = "black";
    }
    if(choose === 2){
        face = "B";
        bg_color="green";
        tx_color = "lightgreen";
    }
    if(choose === 3){
        face = "C";
        bg_color="blue";
        tx_color = "gray";
    }
    if(choose === 4){
        face = "D";
        bg_color = "purple";
        tx_color = "white";
    }
    document.getElementById("face").innerHTML = face ;
}



//coordinate function return x and y coordinate
function getXcoordinate(min=10,max=1200){
  return (Math.floor(Math.random()*max)+min);
}
function getYcoordinate(min=50,max=320){
    return (Math.floor(Math.random()*max)+min);
}


  
 

   
    
    
