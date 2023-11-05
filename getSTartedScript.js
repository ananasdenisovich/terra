//timer
document.addEventListener('DOMContentLoaded', function() {
  const timerDisplay = document.getElementById('timer');
  const progressBar = document.querySelector('.progress-bar');
  let animationFrameId;

  function updateCountdown() {
    const now = new Date();
    const nextYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeRemaining = nextYear - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const display = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = display;

    const percentage = (timeRemaining / (365 * 24 * 60 * 60 * 1000)) * 100;

    progressBar.style.width = '0%'; 

    const start = performance.now();

    function animateProgress(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / 5000, 1);

      progressBar.style.width = `${progress * (100 - percentage)}%`;

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateProgress);
      }
    }

    animateProgress(performance.now());
  }

  updateCountdown();
  countdown = setInterval(updateCountdown, 1000);
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    }
  });
});
