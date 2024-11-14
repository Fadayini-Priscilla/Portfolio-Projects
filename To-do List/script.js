const formButton = document.querySelector(".formBtn");
const formInput = document.querySelector(".formInput");

const todos = document.querySelector("div.todos");

let isEditing = false;
let toBeEdited = null;

formButton.addEventListener("click", () => {
  const newTodo = formInput.value;
  if (!isEditing) {
    todos.innerHTML += `
    <div class="todo">
        <p>${newTodo}</p>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    </div>
    `;
  } else {
    toBeEdited.children[0].innerHTML = newTodo;
    isEditing = false;
    formButton.innerHTML = "Add Todo";
  }
  formInput.value = "";
});

//Event Bubbling

todos.addEventListener("click", (event) => {
  console.log(event.target.className);

  let { className } = event.target;
  if (className === "delete") {
    event.target.parentNode.remove();
  }
  if (className === "edit") {
    const todo = event.target.parentNode;
    const todoText = todo.children[0].innerHTML;
    formInput.value = todoText;
    formButton.innerHTML = "Edit Todo";
    isEditing = true; 
    toBeEdited = todo;
  } 
  // const newTodo = formInput.value;
  // todos.innerHTML += `
  //   <div class="todo">
  //   <p>${newTodo}</p>
  //   <button>Edit</button>
  // </div>
  //   `;
  // formInput.value = "";
});
var button = document.getElementsByClassName("edit"),
display = document.getElementsByClassName("display"),
  count = 0;
button.onclick = function() {
  count += 1;
  disp.innerHTML = count;
};
var button = document.getElementsByClassName("delete"),
display = document.getElementsByClassName("output"),
  count = 0;
button.onclick = function() {
  count += 1;
disp.innerHTML = count;
};
var year = new Date();

document.getElementsByTagName('footer')[0].innerHTML= year