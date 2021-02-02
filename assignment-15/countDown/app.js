var min;
var sec;
var mm = 0;
var minute = document.getElementById("min")
var second = document.getElementById("sec")
var countdown;

function set() {
    sec = parseInt(prompt("Enter Second", 00))
    second.innerHTML = sec
    min = parseInt(prompt("Enter Minutes", 00))
    minute.innerHTML = min
    start()
}

function count() {
    mm++
    if (mm == 100) {

        sec--
        mm = 0
        second.innerHTML = sec
    } else if (min > 0 && sec == 0) {
        min--
        sec = 60
        second.innerHTML = sec
        minute.innerHTML = min
    } else if (sec == 0 && min == 0) {

        clearInterval(countdown)
        sec = 00
        min = 00

        sec.innerHTML = sec
        minute.innerHTML = min
        alert("TIMER DONE")
    }
}

function start() {
    countdown = setInterval(count, 10)
}

function pause() {
    clearInterval(countdown)
}

function reset() {
    min = 00;
    sec = 00;
    minute.innerHTML = min
    second.innerHTML = sec
    pause()
}
