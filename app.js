const form = document.getElementById("form");
const inputValue = document.getElementById("inputTask");

const todoContainer = document.getElementById("todo-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputed = inputValue.value;
  if (inputed) {
    createTodo(inputed);
    inputValue.value = "";
  }
});

const taskArray = [];

function createTodo(inputed) {
  taskArray.push(inputed);
  const li = document.createElement("li");
  li.innerHTML = inputed;
  li.style.color = "#398f8a";
  const deleteTask = document.createElement("button");
  deleteTask.innerText = "Delete Todo";
  deleteTask.addEventListener("click", () => {
    taskArray.splice(taskArray[li], 1);
    li.remove();
  });
  li.appendChild(deleteTask);
  todoContainer.appendChild(li);
  changeColor();
}

const title = document.getElementById("title");

function changeColor() {
  if (createTodo !== "") {
    title.style.color = "#398f8a";
  }
}
