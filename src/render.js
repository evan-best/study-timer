// Buttons 
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const restartBtn = document.getElementById("restartBtn")
const pomodoroBtn = document.getElementById("pomodoroBtn")
const shortBreakBtn = document.getElementById("shortBreakBtn")
const longBreakBtn = document.getElementById("longBreakBtn")

const timer = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 15,
    longBreakInterval: 4,
}