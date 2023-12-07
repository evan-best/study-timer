// Buttons 
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const clearBtn = document.getElementById("clearBtn");
const pomodoroBtn = document.getElementById("pomodoroBtn");
const shortBreakBtn = document.getElementById("shortBreakBtn");
const longBreakBtn = document.getElementById("longBreakBtn");

// Initialize timer components
const timer = document.getElementById("timer");
const timerSound = new Audio('audio/marimba-for-smartphone.mp3')
let countdownInterval;
let remainingTime = { minutes: 25, seconds: 0 };

function setTimerValue(minutes, seconds) {
    timer.textContent = formatTime(minutes, seconds)
    remainingTime.minutes = minutes;
    remainingTime.seconds = seconds;
}

function formatTime(minutes, seconds) {
    const formattedMinutes = minutes < 10 ? '0' + minutes : String(minutes);
    const formattedSeconds = seconds < 10 ? '0' + seconds : String(seconds);
    return `${formattedMinutes}:${formattedSeconds}`;
}

function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval = setInterval(function () {
        if (remainingTime.seconds > 0) {
            remainingTime.seconds--;
        } else if (remainingTime.minutes > 0) {
            remainingTime.minutes--;
            remainingTime.seconds = 59;
        } else {
            clearInterval(countdownInterval);
            
            // Play audio at end of timer
            if (remainingTime.minutes === 0 && remainingTime.seconds === 0){
                playTimerSound();
            }
        }

        setTimerValue(remainingTime.minutes, remainingTime.seconds);
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
}

function startBtnOnClick() {
    startCountdown();
}

function clearBtnOnClick() {
    stopCountdown();
    remainingTime = { minutes: 25, seconds: 0 };
    setTimerValue(remainingTime.minutes, remainingTime.seconds);
}

function pomodoroBtnOnClick() {
    stopCountdown();
    remainingTime = { minutes: 25, seconds: 0 };
    setTimerValue(remainingTime.minutes, remainingTime.seconds);
}

function shortBreakBtnOnClick() {
    stopCountdown();
    remainingTime = { minutes: 5, seconds: 0 };
    setTimerValue(remainingTime.minutes, remainingTime.seconds);
}

function longBreakBtnOnClick() {
    stopCountdown();
    remainingTime = { minutes: 15, seconds: 0 };
    setTimerValue(remainingTime.minutes, remainingTime.seconds);
}


function playTimerSound() {
        timerSound.play();
}

// Event listeners for buttons
pomodoroBtn.addEventListener('click', pomodoroBtnOnClick);
shortBreakBtn.addEventListener('click', shortBreakBtnOnClick);
longBreakBtn.addEventListener('click', longBreakBtnOnClick);
startBtn.addEventListener('click', startBtnOnClick);
clearBtn.addEventListener('click', clearBtnOnClick);
pauseBtn.addEventListener('click', stopCountdown);
