const toDoList = [];
const listContainer = document.getElementById("listContainer");
const toDoInput = document.querySelector("input");
const removeAllContainer = document.getElementById("removeAllContainer");
const strikethroughState = [];

function addToTodo() {
  const inputValue = toDoInput.value.trim();

  if (inputValue) {
    toDoList.push(inputValue);
    strikethroughState.push(false);
    toDoInput.value = "";
    updateList();
  } else {
    alert("Please enter an activity");
  }
}

function toggleStrikethrough(index) {
  strikethroughState[index] = !strikethroughState[index];
  updateList();
}

function removeTask(index) {
  toDoList.splice(index, 1);
  strikethroughState.splice(index, 1);
  updateList();
}

function removeAllTasks() {
  toDoList.splice(0, toDoList.length);
  strikethroughState.splice(0, strikethroughState.length);
  updateList();
}

function updateList() {
  listContainer.innerHTML = "";

  if (toDoList.length === 0) {
    listContainer.innerHTML = "No Activities";
  } else {
    toDoList.forEach((toDo, index) => {
      const toDoItem = document.createElement("div");
      toDoItem.className = "toDoItem";

      const toDoP = document.createElement("p");
      toDoP.className = "toDoP";
      toDoP.innerHTML = toDo;

      if (strikethroughState[index]) {
        toDoP.style.textDecoration = "line-through";
      }

      toDoP.addEventListener("click", () => toggleStrikethrough(index));

      const remove = document.createElement("button");
      remove.className = "removeBtn";
      remove.innerHTML = "Remove";
      remove.addEventListener("click", () => removeTask(index));

      toDoItem.appendChild(toDoP);
      toDoItem.appendChild(remove);
      listContainer.appendChild(toDoItem);
    });
  }

  updateRemoveAllButton();
}

function updateRemoveAllButton() {
  removeAllContainer.innerHTML = "";

  if (toDoList.length >= 2) {
    const removeAllBtn = document.createElement("button");
    removeAllBtn.className = "removeAllBtn";
    removeAllBtn.innerHTML = "Remove All";
    removeAllBtn.addEventListener("click", removeAllTasks);
    removeAllContainer.appendChild(removeAllBtn);
  }
}

updateList();
