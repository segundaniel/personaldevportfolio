const currentTimeUTC = document.getElementById("currentTimeUTC");
const currentDay = document.getElementById("currentDay");

function updateDateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });

    currentTimeUTC.textContent = `Current time in UTC: ${utcTime}`;
    currentDay.textContent = `Current Day of the week: ${day}`;
}

updateDateTime(); // Initial update
setInterval(updateDateTime, 1000); // Update every second

