music1 = "";
music2 = "";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;


function preload()
{
    music1 = loadSound("music.mp3");
    music2 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(450,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("Model is loaded");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist X = " + rightWristX + "Right wrist Y = " rightWristY);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist X = " + leftWristX + "Left wrist Y = " + leftWristY);
    }
}

function draw()
{
    image(video,0,0,450,450);
}
