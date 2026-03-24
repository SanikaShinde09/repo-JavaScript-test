<html>

<head>
    <title>Task Manager</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <style>
        .main {
            margin-left: auto;
            margin-right: auto;
            width: 50%;

        }

        h1 {
            color: rgb(3, 156, 245);
            text-align: center;
        }

        #taskInput {
            height: 25px;

        }

        #addTaskBtn {
            padding: 5px;
            background-color: #1067ff;
            color: white;
            border-radius: 8px;
            border: none;
        }

        #remove {
            padding: 4px;
            background-color: #ff4810;
            color: white;
            border-radius: 8px;
            border: none;
        }
    </style>
</head>





<body>

<script>
let tasks = [];

// Function to add a task to the array
function addTask() {
  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    tasks.push({ text: taskText, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

// Function to remove a task from the array
function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to toggle task completion status
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Function to render tasks
function renderTasks() {
  const taskList = document.getElementById('task-list');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.innerHTML = `
      <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
      <span style="text-decoration: ${task.completed ? 'line-through' : 'none'}">${task.text}</span>
      <button class="remove-btn" onclick="removeTask(${index})">Remove</button>
    `;
    taskList.appendChild(taskItem);
  });
}

// Add event listener to add task button
document.getElementById('add-task-btn').addEventListener('click', addTask);
</script>

</html>