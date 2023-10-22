document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('task');
  const addBtn = document.getElementById('add');
  const taskList = document.getElementById('taskList');

  function addTask() { //adds a new task to the list
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li'); // creates a new list item with task text and buttons

    li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
            <button class="complete">Complete</button>
        `;

    taskList.appendChild(li);

    taskInput.value = '';
  }


  function deleteTask(event) { //deletes task from the list
    if (event.target.classList.contains('delete')) { //checks if a task exists and removes it
      event.target.parentElement.remove();
    }
  }


  function completeTask(event) {
    if (event.target.classList.contains('complete')) { //checks if a task exists and crosses it
      event.target.parentElement.querySelector('span').classList.toggle('completed');

    }
  }

  addBtn.addEventListener('click', addTask); //add button
  taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  taskList.addEventListener('click', deleteTask);
  taskList.addEventListener('click', completeTask);
});

//Pagination+Tabs.js
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach((tab) => {
    tab.style.display = "none"; //hides tab contents
  });

  const pageLinks = document.querySelectorAll(".page-link"); //shows tab content in accordance with link
  pageLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      tabs.forEach((tab) => {
        tab.style.display = "none";
      });

      const target = this.getAttribute("href").replace("#", "");
      document.getElementById(target).style.display = "block";
    });
  });
});
