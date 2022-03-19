const newTaskForm = document.getElementById("new-task-form");
const tasksList = document.getElementById("tasks-list");

const tasks = [];
const clearList = () => {
  const children = [...tasksList.children];
  children.forEach((child) => {
    tasksList.removeChild(child);
  });
};

const updateList = () => {
  console.log("updateList", tasks);
  clearList();

  tasks.forEach((task) => {
    const listItem = document.createElement("li");
    listItem.textContent = task.title;
    tasksList.appendChild(listItem);
  });
};

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(newTaskForm);
  const formEntries = Object.fromEntries(formData);

  const newTask = {
    id: tasks.length,
    title: formEntries.title,
    description: formEntries.description,
    isDone: false,
  };
  tasks.push(newTask);
  updateList();
};

newTaskForm.addEventListener("submit", handleSubmit);
