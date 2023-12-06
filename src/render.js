// Buttons 
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const clearBtn = document.getElementById("clearBtn");
const pomodoroBtn = document.getElementById("pomodoroBtn");
const shortBreakBtn = document.getElementById("shortBreakBtn");
const longBreakBtn = document.getElementById("longBreakBtn");
const timer = document.getElementById("timer");
let countdownInterval;
let remainingTime = { minutes: 25, seconds: 0 };

function setTimerValue(minutes, seconds) {
    timer.textContent = formatTime(minutes, seconds);
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

pomodoroBtn.addEventListener('click', pomodoroBtnOnClick);
shortBreakBtn.addEventListener('click', shortBreakBtnOnClick);
longBreakBtn.addEventListener('click', longBreakBtnOnClick);
startBtn.addEventListener('click', startBtnOnClick);
clearBtn.addEventListener('click', clearBtnOnClick);
pauseBtn.addEventListener('click', stopCountdown);
