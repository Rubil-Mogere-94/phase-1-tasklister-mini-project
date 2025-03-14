document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the task description from the input field
    const taskDescription = document.getElementById("new-task-description").value;

    // Check if the input is not empty
    if (taskDescription.trim() !== "") {
      // Create a new list item for the task
      const newTask = document.createElement("li");
      newTask.textContent = taskDescription;

      // Add the new task to the task list
      taskList.appendChild(newTask);

      // Clear the input field after adding the task
      document.getElementById("new-task-description").value = "";
    }
  });
});