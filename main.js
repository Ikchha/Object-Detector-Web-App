status = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded());
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded(){
    console.log("Model is Loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}
function gotResults(){
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}