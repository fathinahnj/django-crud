document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (storedTasks.length > 0) {
      tasks = storedTasks;
      updateTasksList();
      updateStats();
  }
});

let tasks = [];

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Add Task
const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const category = document.querySelector("input[name='category']:checked");

  const text = taskInput.value.trim();

  if (text && category) {
      tasks.push({
          text: text,
          category: category.value, // Save the selected category
          completed: false,
      });
      taskInput.value = "";
      category.checked = false; // Clear category selection
      updateTasksList();
      updateStats();
      saveTasks();
  } else {
      alert("Please enter a task and choose a category.");
  }
};

// Toggle Task Complete
const toggleTaskComplete = (index) => {
  tasks[index].completed = !tasks[index].completed;
  updateTasksList();
  updateStats();
  saveTasks();
};

// Delete Task
const deleteTask = (index) => {
  tasks.splice(index, 1);
  updateTasksList();
  updateStats();
  saveTasks();
};

// Edit Task
const editTask = (index) => {
  const taskInput = document.getElementById("taskInput");
  const categoryInput = document.querySelector(
      `input[name='category'][value='${tasks[index].category}']`
  );

  // Prepopulate task text and category
  taskInput.value = tasks[index].text;
  if (categoryInput) {
      categoryInput.checked = true;
  }

  tasks.splice(index, 1); // Remove the task from the list
  updateTasksList();
  updateStats();
  saveTasks();
};

// Update Stats
const updateStats = () => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

  document.getElementById("progress").style.width = `${progress}%`;
  document.getElementById("numbers").innerText = `${completedTasks} / ${totalTasks}`;
};

// Update Task List
const updateTasksList = () => {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = ""; // Clear the list

  tasks.forEach((task, index) => {
      const listItem = document.createElement("li");
      listItem.classList.add("taskItem");

      listItem.innerHTML = `
          <div class="task ${task.completed ? "completed" : ""}">
              <input type="checkbox" 
                     class="task-checkbox ${task.category}" 
                     ${task.completed ? "checked" : ""} />
              <span>${task.text}</span>
          </div>
          <div class="task-actions">
              <img src="{% static 'images/edit.png' %}" 
                   onclick="editTask(${index})" 
                   class="action-icon" 
                   alt="Edit" />
              <img src="{% static 'images/bin.png' %}" 
                   onclick="deleteTask(${index})" 
                   class="action-icon" 
                   alt="Delete" />
          </div>
      `;

      // Checkbox Listener
      listItem.querySelector(".task-checkbox").addEventListener("change", () =>
          toggleTaskComplete(index)
      );

      taskList.appendChild(listItem);
  });
};

// Event Listener for Adding Task
document.getElementById("newTask").addEventListener("click", function (e) {
  e.preventDefault();
  addTask();
});
