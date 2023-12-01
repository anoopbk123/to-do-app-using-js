const toDoList = [];
const listContainer = document.getElementById("listContainer");
const toDoInput = document.getElementsByTagName("input")[0];

function addToTodo() {
  if (toDoInput.value.trim()) {
    toDoList.push(toDoInput.value);
    toDoInput.value = "";
    console.log(toDoList);
    addList();
  } else {
    alert("please enter activity");
  }
}

function addList() {
  listContainer.innerHTML = "";
  toDoList.forEach((toDo, index) => {
    const toDoItem = document.createElement("div");
    toDoItem.className = "toDoItem";
    const toDoP = document.createElement("p");
    toDoP.className = "toDoP";
    toDoP.innerHTML = toDo;
    const remove = document.createElement("button");
    remove.className = 'removeBtn'
    remove.innerHTML = "remove";
    remove.onclick = (event) => {
        toDoList.splice(index, 1);
        console.log(toDoList);
        event.target.parentNode.remove();
        addList();//to get correct index
        if (toDoList.length == 0) {
            listContainer.innerHTML = "No Activities";
          }
    }
    toDoItem.appendChild(toDoP);
    toDoItem.appendChild(remove);
    listContainer.appendChild(toDoItem);
  });
}
