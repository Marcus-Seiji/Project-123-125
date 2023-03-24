difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(550,550);
    canvas.position(650,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("PoseNet is Intialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log(" leftWristX = " + leftWristX + " rightWristX = " + rightWristX + "Difference = " + difference);
    }
}

function draw()
{
    background('#969A97');
    document.getElementById("text_size").innerHTML = "Font size of the text will be = " + difference + "px";
    textSize(difference);
    fill('#FFE787');
    text('Im cool',50,400);
}

