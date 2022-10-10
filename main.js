function preload(){
img=loadImage("https://i.postimg.cc/xC2MSdSW/Clown-Nose-PNG-Image.png")
}
function setup(){
    canvas=createCanvas(500,370)
    canvas.center()
    webcam=createCapture(VIDEO)
    webcam.hide()
    poseNet = ml5.poseNet(webcam, modelLoaded);
    poseNet.on("pose",gotpose)
}

function modelLoaded() {
    console.log('Model Loaded!');
  }
  
function gotpose(results){
    if(results.length>0){
        console.log(results)
        nose1 =results[0].pose.nose.x
        nose2=results[0].pose.nose.y
    }
  }
  function short(){
    save("realfilter.png")
  }
  function draw(){
    image(webcam,0,0,500,370)
    fill("red")
    image(img,nose1,nose2,50,50)
    

}