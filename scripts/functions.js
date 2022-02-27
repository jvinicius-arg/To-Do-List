var i = JSON.parse(localStorage.getItem("i"));
let protectDiv = document.getElementsByClassName("verify")[0];
let newTsk = [];
let tsk = [];
let tskText = [];
let remove = [];

function error () {
    alert("Um erro ocorreu, \nA lista será reiniciada");
    localStorage.clear();
} 

var getTasks = function () {
    for (i = 0; i < localStorage.getItem("i"); i++) {
        if (!localStorage.getItem("task-" + i)) {
            console.log("erro get tasks");
        } else {
            taskArr[i] = localStorage.getItem("task-" + i);
            console.log("task-" + i + " atribuída a taskArr[" + i + "].");
        }
    }

    i = parseInt(localStorage.getItem("i"));
}

var recoverTasks = function () { 
    if (localStorage.length > 1 ) {
        taskBox.style.opacity = 1; 
    } else { 
        taskBox.style.opacity = 0; 
    }

    setTimeout(function () {
        for (i = 1; i <= (parseInt(localStorage.getItem("i")) + 1); i++) {
            createTaskDiv();
            console.log("Task recuperada.");
        }
    },10);
}

function styleTasks() {

    setTimeout(function () {
        for (i = 0; i <= (localStorage.getItem("i") - 1); i++) {
            if (!localStorage.getItem("task-" + i)) {
                console.log("erro style task");
            } else {
                tsk[(i)] = document.getElementById("new-task-" + (i));
                
                tsk[(i)].setAttribute("style", "display: flex; align-items: center; justify-content: center; margin: auto; margin-top:10px; width: 80vw; height: 50px; border: 2px solid white; border-radius:5px");
            }
        }
    },10);
}

function addTask () {
    if (!i) {
        i = 0;
    }

    localStorage.setItem("task-"+ i, task.value);
    taskArr.push(task.value);
    i++;
    localStorage.setItem("i", i);

    styleTasks();

    task.value = "";
}

function showTask () {
    setTimeout(function () {
        if (localStorage.length > 1) {
            taskBox.style.opacity = "1";
        } else {
            taskBox.style.opacity = "0";
        }
    },10);
}

function createTaskDiv () {
    newTsk[(i-1)] = (`<div id="new-task-` + (i-1) + `">
                    <div class="checkbox-container">
                        <label class="label-checkbox-` + (i-1) + `" onmousedown="indentifyCheckbox(this)">
                            <input class="checkbox" type="checkbox">
                            <div class="al-checkbox"></div>
                            <img class="checkmark" src="./assets/images/checkmark.png">
                        </label>
                    </div>
                    <div class="task" style="text-decoration: none;">` + taskArr[(i-1)] + `</div>
                    <div class="remove-container">
                        <img class="remove-` + (i-1) + `" onclick="indentifyRemove(this)" src="./assets/images/remove.png">
                    </div>
                </div>`);
    
    if (!taskArr[(i-1)]) {
        console.log("erro taskdiv");
    } else {
        taskBox.insertAdjacentHTML("beforeend", newTsk[(i-1)]);
    }

    if (!taskArr[(i-1)]) {
        console.log("erro tsktext");
    } else {
        tskText[(i-1)] = document.getElementsByClassName("task")[(i-1)];
    }

    tskText[(i-1)] = document.getElementsByClassName("task")[(i-1)];
    
    for (var k = 0; k <= (localStorage.getItem("i") - 1); k++) {
        remove[k] = document.getElementsByClassName("remove-" + k)[0];
    }
}

function indentifyRemove (element) {
    let preTaskId = element.outerHTML;
    if (localStorage.length < 10) {
        taskId = parseInt(preTaskId.substr(19, 1));
    } else {
        taskId = parseInt(preTaskId.substr(19, 2));
    }
    console.log(taskId);

    deleteTask();
}

function deleteTask () {
    setTimeout(function () {
        tsk[taskId].style.display = "none";
        localStorage.removeItem("task-" + taskId);
        
        showTask();
    },10);
}

function indentifyCheckbox (element) {
    let preTaskId = element.outerHTML;
    if (localStorage.length < 10) {
        taskId = parseInt(preTaskId.substr(29, 1));
    } else {
        taskId = parseInt(preTaskId.substr(29, 2));
    }
    console.log(taskId);

    lineThroughTask();
}

function lineThroughTask () {

        if (tskText[taskId].style.textDecoration == "none") {
            tskText[taskId].style.textDecoration = "line-through";
            tskText[taskId].style.color = "gray";
        } else {
            tskText[taskId].style.textDecoration = "none";
            tskText[taskId].style.color = "white";
        }

}

function verify () {
    setTimeout(function () {
        if (task.value == "" || !task.value) {
            protectDiv.setAttribute("style", "display: block");
        } else {
            protectDiv.setAttribute("style", "display: none");
        }
    },10);
}