$(document).ready(function () {
  let tasks = [];

  // Add a new task
  const addTask = () => {
    const taskInput = $("#taskInput");
    const text = taskInput.val().trim();

    if (text) {
      tasks.push({ text: text, completed: false }); // Add the task to the array
      taskInput.val(""); // Clear the input field
      updateTasksList(); // Update the task list
      updateStats(); // Update stats
    }
  };

  // Toggle task completion
  const toggleTaskComplete = (index) => {
    tasks[index].completed = !tasks[index].completed; // Toggle completion state
    updateTasksList();
    updateStats();
  };

  // Delete a task
  const deleteTask = (index) => {
    tasks.splice(index, 1); // Remove the task from the list
    updateTasksList();
    updateStats();
  };

  // Edit a task
  const editTask = (index) => {
    const task = tasks[index];
    const newText = prompt("Edit your task:", task.text); // Prompt user to edit the task

    if (newText && newText.trim() !== "") {
      tasks[index].text = newText.trim(); // Update the task text
      updateTasksList(); // Re-render the task list
    }
  };

  // Update stats
  const updateStats = () => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;
    const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;

    $("#progress").css("width", `${progress}%`);
    $("#numbers").text(`${completedTasks} / ${totalTasks}`);
  };

  // Render tasks dynamically
  const updateTasksList = () => {
    const taskList = $("#task-list");
    taskList.empty(); // Clear existing tasks

    tasks.forEach((task, index) => {
      const taskItem = $(`
          <li class="taskItem">
            <div class="task ${task.completed ? "completed" : ""}">
              <input type="checkbox" class="checkbox" ${task.completed ? "checked" : ""} />
              <p>${task.text}</p>
            </div>
            <div class="task-actions">
              <a href="#" class="edit-task">
                <img src="/static/images/edit.png" alt="Edit" class="action-icon" />
              </a>
              <a href="#" class="delete-task">
                <img src="/static/images/bin.png" alt="Delete" class="action-icon" />
              </a>
            </div>
          </li>
        `);

      // Add event listeners
      taskItem.find(".checkbox").on("change", () => toggleTaskComplete(index));
      taskItem.find(".delete-task").on("click", (e) => {
        e.preventDefault();
        deleteTask(index); // Call delete functionality
      });
      taskItem.find(".edit-task").on("click", (e) => {
        e.preventDefault();
        editTask(index); // Call edit functionality
      });

      taskList.append(taskItem);
    });
  };

  // Event listener for adding tasks
  $("#newTask").on("click", function (e) {
    e.preventDefault(); // Prevent form submission
    addTask();
  });
});
