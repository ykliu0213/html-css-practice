
var createdTime;
var clickedTime;
var reactionTime;

function getRandomColor() {
    
    var max = 200;
    var min = 50;

    var green = Math.floor(Math.random() * (max - min + 1) + min);

    var color = "rgba(255, " + green + ", 243, 1.0)";

    return color;

}


function makeBox() {

    var time = Math.random() * 2000;

    setTimeout(function() {

        if(Math.random() >= 0.5) {
            document.getElementById('box').style.borderRadius = "70px";
        }else{
            document.getElementById('box').style.borderRadius = "0";
        }

        var min = 0;
        var max = window.innerHeight - 280;
        var top = Math.floor(Math.random() * (max - min + 1) + min);

        min = 0;
        max = window.innerWidth - 140;
        var left = Math.floor(Math.random() * (max - min + 1) + min);

        document.getElementById('box').style.top = top + "px";
        document.getElementById('box').style.left = left + "px";
        document.getElementById('box').style.backgroundColor = getRandomColor();
        document.getElementById("box").style.display = "block";
        createdTime = Date.now();

    }, time);

}

document.getElementById("box").onclick = function() {

    this.style.display = "none";
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000 ;
    document.getElementById('time').innerHTML = reactionTime;

    makeBox();

}

makeBox();