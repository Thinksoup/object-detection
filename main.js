Status = "";
function preload(){
img = loadImage('book.jpg');
}
function setup(){
canvas = createCanvas(380,380);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(380,380);
 video.hide();
 document.getElementById("Status").innerHTML = "Status: Detecting objects";
}
function modelLoaded(){
    console.log("modelLoaded");
    Status = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
      console.log(results);
      objects = results;
    }
}
function book(){
    window.location = "book.html";
}