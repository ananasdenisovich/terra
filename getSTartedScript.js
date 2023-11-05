//Timer
document.addEventListener('DOMContentLoaded', function() { //countdown converting from previous labs
  const timerDisplay = document.getElementById('timer');
  const progressBar = document.querySelector('.progress-bar');
  let countdown;

  function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeRemaining = nextYear - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const display = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = display;//outputs a timer

    const percentage = (timeRemaining / (365 * 24 * 60 * 60 * 1000)) * 100;
    progressBar.style.width = 100 - percentage + '%';
  }

  updateCountdown();
  countdown = setInterval(updateCountdown, 1000);//sets an interval for second changing
});


