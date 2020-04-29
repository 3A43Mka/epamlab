$(document).ready(function() {
    const start = Date.now();
    let toggle = false;

    $("#go-button").on("click", () => {
        toggle = !toggle;
        toggle ? $("#go-button").text("STOP") : $("#go-button").text("GO");
    });

    $("#reset-button").on("click", () => {
        toggle = false;
        time = 0;
        toggle ? $("#go-button").text("STOP") : $("#go-button").text("GO");
        $('.screen').text(msToTime(time));
    });

    let time = 0;

    let display = "";

    setInterval(function() {
        if (toggle) {
            time += 1000;
            $('.screen').text(msToTime(time));
        }
    }, 1000);
});

function msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;

    if (mins < 10)
        mins = "0" + mins;
    if (secs < 10)
        secs = "0" + secs;

    return mins + ':' + secs;
}