var wordlist=["strings","letter","pazazz","fizzle","puzzle","muzzle"];
var chosenword=wordlist[Math.floor(Math.random())];
var timeleft=document.querySelector(".time");
var gamemessage=document.querySelector("#letterbox");

var secondsLeft= 60;

function startTimer() {
    var timerInterval=setInterval(function() {
        secondsleft--;
        timeleft.textContent=secondsLeft + " seconds left!"
        if(secondsLeft===0) {
            clearInterval(timerInterval);
            gameEnd()
        }
    })
}

function gameEnd() {
    timeleft.textContent=" ";
    gamemessage.textContent="GAME OVER!";
}


function keydownAction(event) {
    // The key property holds the value of the key press
    var keyPress = event.key;
    // The code property holds the key's code 
    var keyCode = event.code;
    // Updates content on page

    if (keyPress==="") {
        
    }
    document.querySelector("#key").textContent = keyPress;
    document.querySelector("#code").textContent = keyCode;
    document.querySelector("#status").textContent = "KEYDOWN Event";
  }