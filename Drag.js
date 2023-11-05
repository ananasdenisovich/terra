document.addEventListener('DOMContentLoaded', function () {
  const draggableAnswers = document.querySelectorAll('.draggable');
  const droppableSlots = document.querySelectorAll('.droppable');
  const checkButton = document.getElementById('checkButton');
  let incorrectAttempts = 0;

  draggableAnswers.forEach(answer => {
    answer.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', answer.textContent);
    });
  });

  droppableSlots.forEach(slot => {
    slot.addEventListener('dragover', e => {
      e.preventDefault();
    });

    slot.addEventListener('dragenter', e => {
      e.preventDefault();
    });

    slot.addEventListener('drop', (e) => {
      const draggedAnswer = e.dataTransfer.getData('text/plain');
      const answerSlot = e.target;
      if (answerSlot.classList.contains('droppable')) {
        answerSlot.textContent = draggedAnswer;
      }
    });

    checkButton.addEventListener('click', () => {
      const answerSlots = Array.from(document.querySelectorAll('.droppable'));
      const answers = answerSlots.map(slot => slot.textContent);
      const correctAnswers = ["Portuguese", "Polyglot", "Onomatopoeia", "Hindi", "Etymology", "Translation", "Morpheme"];
      const allCorrect = JSON.stringify(answers) === JSON.stringify(correctAnswers);

      if (allCorrect) {
        alert("Congratulations! All answers are correct!");
      } else {
        alert("Some answers are incorrect. Please check your answers.");
        incorrectAttempts++;

        if (incorrectAttempts > 2) {
          setTimeout(() => {
            answerSlots.forEach(slot => {
              slot.textContent = '';
            });
            incorrectAttempts = 0;
          }, 3000);
        }
      }
    });
  });
});
