document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('rating-form');
  const feedbackMessage = document.getElementById('feedback-message');
  const stars = document.querySelectorAll('input[name="rating"]');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const rating = document.querySelector('input[name="rating"]:checked').value;//gets user's rating
    const comments = document.getElementById('comments').value;
    feedbackMessage.classList.remove('hidden'); //shows thanking message
    form.reset();
    setTimeout(() => {
      feedbackMessage.classList.add('hidden');
    }, 5000);
  });

  stars.forEach((star, index) => { //colors chosen rating stars with checked
    star.addEventListener('click', function () {
      for (let i = 0; i <= index; i++) {
        stars[i].checked = true;
      }
    });
  });
});
