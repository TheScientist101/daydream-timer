function setTimeLeft() {
    // Central Time is UTC-5 during daylight saving (CDT)
    const now = new Date();
    const target = new Date("2025-09-28T11:30:00-05:00");
    let diffMs = target.getTime() - now.getTime();
    if (diffMs < 0) diffMs = 0;
    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;
    document.getElementById("timeText").innerHTML = `<textPath href="#countdown">${days}d ${hours}h ${minutes}m ${seconds}s</textPath>`;
}

let intervalId;
window.onload = () => {
    setInterval(setTimeLeft, 100);
};