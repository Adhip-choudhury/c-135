video="";
status1="";
object=[];

function preload(){
   video=createVideo("video.mp4"); 
   video.hide();
   
}


function setup(){
  canvas= createCanvas(400,300);
  canvas.center();
}


function draw(){
  image(video, 0, 0, 400, 300);
 if(status1 !=""){
  Object_detector.detect(video, gotResults);
  for(var i = 0; i <= object.length; i++){
    document.getElementById("status").innerHTML="Status: detected objects";
    document.getElementById("number_of_objects").innerHTML="Number of objectes dectect are: "+object.length;
    fill("v#33ccff");
    percent=floor(object[i].confidence * 100);
    text(object[i].label+" "+ percent+"%", object[i].x+15, object[i].y+10);
  }
 }


}


function start(){
   Object_detector=ml5.objectDetector("cocossd", modelLoaded);
   document.getElementById("status").innerHTML="Status: detecting objects";
}



function modelLoaded(){
    console.log("Model loaded");
    status1=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}




function gotResults(error, results){
   if(error){
     console.error(error);
   }
   else{
     console.log(results);
     object=results;
   }
}