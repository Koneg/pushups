const form = document.getElementById("form");
const todolist = document.getElementById("todolist");

function addTodo (todo){
    const div = document.createElement('div');
    const todoTitle = document.createElement("span");
    todoTitle.innerText = todo.name 
    const todoGoal = document.createElement("span");
    todoGoal.innerText = todo.goal
    div.appendChild(todoTitle)
    div.appendChild(todoGoal)
    todolist.appendChild(div) 
}
form.addEventListener("submit", (event) => {
  event.preventDefault;
  const FormData = new FormData();
  const Data = {
    name:FormData.get('name')
    goal:FormData.get('goal')
    type:FormData.get('type')
  }
  console.log(FormData.get("name"));
});

