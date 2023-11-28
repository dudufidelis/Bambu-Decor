document.addEventListener("DOMContentLoaded", function() {

    let seconds = 5;
    let countdown = setInterval(function() {
        document.getElementById("countdown").innerText = seconds;
        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);
            window.location.href = "../index.html";
        }
    }, 1000);
});
