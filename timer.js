const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEL = document.getElementById('countdown');
setInterval(updateCountdown,1000);

function updateCountdown() {
    const minutes = Math.flooor(tiem/60);
    time--;
}