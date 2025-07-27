function handleDate() {
  const input = document.getElementById("dateInput").value;
  if (input) {
    const date = new Date(input);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const dayOptions = { weekday: 'long' };

    document.getElementById("showDate").textContent = date.toLocaleDateString('en-US', options);
    document.getElementById("showDay").textContent = date.toLocaleDateString('en-US', dayOptions);

    document.getElementById("dateDayDisplay").style.display = "block";
  }
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");

  const taskLeft = document.createElement("div");
  taskLeft.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onclick = () => {
    span.classList.toggle("done");
  };

  const span = document.createElement("span");
  span.textContent = taskText;

  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(span);

  const buttons = document.createElement("div");
  buttons.className = "task-buttons";

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✎";
  editBtn.onclick = () => {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "edit-field";
    input.value = span.textContent;

    input.onblur = () => {
      if (input.value.trim() !== "") {
        span.textContent = input.value;
      }
      span.style.display = "inline";
      input.remove();
    };

    span.style.display = "none";
    taskLeft.insertBefore(input, span.nextSibling);
    input.focus();
  };

  const delBtn = document.createElement("button");
  delBtn.innerHTML = "✓";
  delBtn.onclick = () => li.remove();

  buttons.appendChild(editBtn);
  buttons.appendChild(delBtn);

  li.appendChild(taskLeft);
  li.appendChild(buttons);
  taskList.appendChild(li);

  taskInput.value = "";
}
