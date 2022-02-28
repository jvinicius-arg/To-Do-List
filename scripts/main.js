let task = document.getElementsByTagName("input")[0];
let add = document.getElementsByClassName("btn")[0];
var taskBox = document.getElementsByClassName("bg-tarefas")[0];
let taskArr = [];
let clearBtn = document.getElementsByClassName("clear-btn")[0];
var i = new Number();

add.addEventListener("click", addTask);
add.addEventListener("click", showTask);
add.addEventListener("click", createTaskDiv);

clearBtn.addEventListener("click", clearAll);

onload = getTasks();
onload = recoverTasks();
onload = styleTasks();