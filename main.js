function setup(){
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pM-Z_dPVg/model.json',modelLoaded);

}
function draw(){
image(video,0,0,400,400);
classifier.classify(video,gotResult);
}
function modelLoaded(){
console.log("model has loaded");
}
function gotResult(error,results){
if(error){console.log(error);}
else{
console.log(results);
document.getElementById("name").innerHTML=results[0].label;
document.getElementById("accuracy").innerHTML=results[0].confidence;
}


}