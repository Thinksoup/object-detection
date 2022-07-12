Status = "";
function preload(){
    img = loadImage('book.jpg');
}
function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
}
function modelLoaded(){
    console.log("modelLoaded");
    Status = true;
}
function gotResult(results){
    if(results){
      console.log(results);
      objects = results;
    }
}
function home(){
    window.location = "index.html";
}
