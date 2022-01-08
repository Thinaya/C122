function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(50, 50)

    canvas = createCanvas(550, 550);
    canvas.position(650, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0)
    {
        console.log(results);
    }
}

function modelLoaded() {
    console.log('PoseNet is Intialized');
}

function draw() {
    background("#BBBEFE");
}