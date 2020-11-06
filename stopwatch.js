//selections of variables

let pause = document.querySelector("#pause")
let play = document.querySelector("#play")
let reset = document.querySelector("#reset")



//
let hoursCounter = document.querySelector("#hours");
let minutesCounter = document.querySelector("#minutes")
let secondsCounter = document.querySelector("#seconds")

let hours = 0;
let minutes = 0;
let seconds = 0;
//counter declaration

let interval = 0;
let operation ;

play.addEventListener("click",function(){
    if(!operation){
      interval =  setInterval(startCount,1000)
        operation = true
    }


})

reset.addEventListener("click",function(){
    ResetOperation()
})

pause.addEventListener("click",function(){
pauseOperator()
})


function pauseOperator(){
    clearInterval(interval)
    operation = false;
}

function startCount(){
    seconds++
  
    if(seconds/60 ===1 ){
        seconds = 0;
        minutes++
        if(minutes/60 ===1){
            minutes = 0;
            hours++
            
        }
    }
    secondsCounter.innerHTML= `  <h1 class="seconds">${DoubleDigit(seconds)}</h1>`
    minutesCounter.innerHTML = `  <h1 class="minutes">${DoubleDigit(minutes)}</h1>`
    hoursCounter.innerHTML = `  <h1 class="hours">${DoubleDigit(hours)}</h1>`
}

function ResetOperation(){
    clearInterval(interval)
    operation = false;
    hours = 0;
minutes = 0;
seconds = 0;
secondsCounter.innerHTML= `  <h1 class="seconds">00</h1>`
minutesCounter.innerHTML = `  <h1 class="minutes">00</h1>`
hoursCounter.innerHTML = `  <h1 class="hours">00</h1>`

}

function DoubleDigit(time){
    if(time<10){
        return`0${time}`
    }
    else{
        return time
    }
}
