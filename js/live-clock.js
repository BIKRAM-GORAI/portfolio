/* ==========================================================================
   BIKRAM GORAI — LIVE CLOCK WIDGET
   Real-Time Asansol, India Time Display (IST)
   ========================================================================== */

function initLiveClock() {
  const clockElement = document.getElementById('live-clock-time');
  if (!clockElement) return;

  function updateClock() {
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    const now = new Date();
    const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);
    clockElement.textContent = `ASANSOL · ${timeString} IST`;
  }

  updateClock();
  setInterval(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', initLiveClock);
