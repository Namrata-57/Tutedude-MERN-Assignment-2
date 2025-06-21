// // getting elements by their id and storing into variable 
var box = document.getElementById("box");
var message = document.getElementById("message");
var result = document.getElementById("result");
const contentFixed = document.getElementById("content").offsetHeight;

// storing exact time into a variable 
var startTime = new Date().getTime();

// function made for getting random color
function getRandomColor() {
    var code = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += code[Math.floor(Math.random() * 16)]
    }
    return color;
}

//making box show at random position 
function move() {
    var left = Math.random() * 300;
    var top = Math.random() * 300;
    var wh = ((Math.random() * 400) + 100);
    box.style.left = left + "px";
    box.style.top = (top + contentFixed) + "px";
    box.style.width = wh + "px";
    box.style.height = wh + "px";
    box.style.display = "block";
    box.style.background = getRandomColor();
    startTime = new Date().getTime();
}
move();

//Event used when box gets clicked 
box.onclick = function () {
    box.style.display = "none";
    var endTime = new Date().getTime();
    var timeTakenInSeconds = (endTime - startTime) / 1000;
    // var timeTakenInMinutes= (endTime-startTime)/60000;
    result.textContent = `Your reaction time: ${timeTakenInSeconds.toFixed(3)} seconds`;
    move();
}