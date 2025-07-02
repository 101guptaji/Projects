//Write your javascript here
const countdown = document.querySelector("#countdown");

let timer = 60;
let timeOut;

function startTimer() {
    countdown.innerHTML = "00:01:00";
    timeOut = setInterval(() => {
        if (timer === 0) {
            clearInterval(timeOut);
            return;
        }
        else {
            timer -= 1;
            countdown.innerHTML = `00:00:${String(timer).padStart(2,'0')}`;
        }
    }, 1000);
}

function resetTimer() {
    countdown.innerHTML = "00:01:00";
    timer = 60;
    clearInterval(timeOut);
}