var min = 0;
var sec = 0;
var msec = 0;
var interval;

var buttonStart = document.getElementById("start")

var headingmin = document.getElementById("min")
var headingsec = document.getElementById("sec")
var headingmsec = document.getElementById("msec")

function timer() {
    msec++;
    headingmsec.innerHTML = msec;

    if (msec >= 100) {
        sec++;
        headingsec.innerHTML = sec;
        msec = 0;
    }

    else if (sec >= 60) {
        min++
        headingmin.innerHTML = min
        sec = 0;
    }
}

function start() {
    interval = setInterval(timer, 10)
    buttonStart.disabled = true
}

function stop() {
    buttonStart.disabled = false
    clearInterval(interval)
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    headingmin.innerHTML = min
    headingsec.innerHTML = sec;
    headingmsec.innerHTML = msec;
    stop()
    buttonStart.disabled = false
}