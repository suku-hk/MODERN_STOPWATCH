let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


let timer = null;



const hourDisplay =
document.getElementById("hours");

const minuteDisplay =
document.getElementById("minutes");

const secondDisplay =
document.getElementById("seconds");

const milliDisplay =
document.getElementById("milliseconds");



function updateDisplay(){


hourDisplay.innerHTML =
hours.toString().padStart(2,"0");


minuteDisplay.innerHTML =
minutes.toString().padStart(2,"0");


secondDisplay.innerHTML =
seconds.toString().padStart(2,"0");


milliDisplay.innerHTML =
milliseconds.toString().padStart(2,"0");


}



function startTimer(){


if(timer!==null)
return;


timer=setInterval(()=>{


milliseconds++;


if(milliseconds==100){

    milliseconds=0;
    seconds++;

}


if(seconds==60){

    seconds=0;
    minutes++;

}



if(minutes==60){

    minutes=0;
    hours++;

}


updateDisplay();



},10);



}



function pauseTimer(){

clearInterval(timer);

timer=null;

}



function resetTimer(){

clearInterval(timer);

timer=null;


hours=0;
minutes=0;
seconds=0;
milliseconds=0;


updateDisplay();


document.getElementById("laps").innerHTML="";


}



function addLap(){


let li=document.createElement("li");


li.innerHTML=

`${hourDisplay.innerHTML}:
${minuteDisplay.innerHTML}:
${secondDisplay.innerHTML}:
${milliDisplay.innerHTML}`;


document
.getElementById("laps")
.appendChild(li);



}



document
.getElementById("start")
.onclick=startTimer;


document
.getElementById("pause")
.onclick=pauseTimer;


document
.getElementById("reset")
.onclick=resetTimer;


document
.getElementById("lap")
.onclick=addLap;



// Dark mode

document
.getElementById("themeBtn")
.onclick=function(){

document.body.classList.toggle("dark");

};



// Keyboard shortcuts

document.addEventListener(
"keydown",
(e)=>{


if(e.code==="Space")
startTimer();


if(e.key==="r")
resetTimer();


if(e.key==="l")
addLap();


}
);