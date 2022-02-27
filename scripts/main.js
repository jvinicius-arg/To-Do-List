let task = document.getElementsByTagName("input")[0];
let add = document.getElementsByClassName("btn")[0];
var taskBox = document.getElementsByClassName("bg-tarefas")[0];
let taskArr = [];
var i = new Number();

add.addEventListener("click", addTask);
add.addEventListener("click", showTask);
add.addEventListener("click", createTaskDiv);

onload = getTasks();
onload = recoverTasks();
onload = styleTasks();