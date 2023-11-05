//todolist
document.addEventListener('DOMContentLoaded', function () {
  const taskInput = document.getElementById('task');
  const addBtn = document.getElementById('add');
  const taskList = document.getElementById('taskList');

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete';

    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    taskList.appendChild(li);

    taskInput.value = '';
  }
  const completedSound = document.getElementById('completedSound');
  function deleteTask(event) {
    if (event.target.classList.contains('delete')) {
      event.target.parentElement.remove();
      completedSound.play();
    }
  }

  function completeTask(event) {
    if (event.target.classList.contains('complete')) {
      event.target.parentElement.querySelector('span').classList.toggle('completed');
    }
  }

  function handleMouseOver(event) {
    if (event.target.tagName === 'LI') {
      event.target.style.backgroundColor = '#e0e0e0';
    }
  }

  function handleMouseOut(event) {
    if (event.target.tagName === 'LI') {
      event.target.style.backgroundColor = 'white';
    }
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      completeTask(event);
    }
  }

  addBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  taskList.addEventListener('click', deleteTask);
  taskList.addEventListener('click', completeTask);

  taskList.addEventListener('mouseover', handleMouseOver);
  taskList.addEventListener('mouseout', handleMouseOut);
  taskList.addEventListener('keypress', handleKeyPress);
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

//Tab animation
function showTab(tabId) {
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(tabContent => {
    tabContent.classList.remove('active');
  });

  setTimeout(() => {
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
  }, 10);
}

