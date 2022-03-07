var i = JSON.parse(localStorage.getItem("i"));
let protectDiv = document.getElementsByClassName("verify")[0];
let newTsk = [];
let tsk = [];
let tskText = [];
let remove = [];

function clearAll () {
    localStorage.clear();
    location.reload(false);
}

var getTasks = function () {
    for (i = 0; i < localStorage.getItem("i"); i++) {
        if (!localStorage.getItem("task-" + i)) {
           
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

    if (localStorage.length > 2) {
        clearBtn.style.display = "flex";
    } else {
        clearBtn.style.display = "none";
    }
}

function styleTasks() {

    setTimeout(function () {
        for (i = 0; i <= (localStorage.getItem("i") - 1); i++) {
            if (!localStorage.getItem("task-" + i)) {
                
            } else if (tskText[i].style.color == "gray") {

                tsk[i].style.display = "flex";
                tsk[i].style.alignItems = "center";
                tsk[i].style.justifyContent = "center";
                tsk[i].style.margin = "auto";
                tsk[i].style.marginTop = "10px";
                tsk[i].style.width = "80vw";
                tsk[i].style.height = "50px";
                tsk[i].style.border = "2px solid white";
                tsk[i].style.borderRadius = "5px";
                tsk[i].style.textDecoration = "line-through";
                tsk[i].style.color = "gray";
            } else {
                tsk[(i)] = document.getElementById("new-task-" + (i));
                
                tsk[i].style.display = "flex";
                tsk[i].style.alignItems = "center";
                tsk[i].style.justifyContent = "center";
                tsk[i].style.margin = "auto";
                tsk[i].style.marginTop = "10px";
                tsk[i].style.width = "80vw";
                tsk[i].style.height = "50px";
                tsk[i].style.border = "2px solid white";
                tsk[i].style.borderRadius = "5px";
                tsk[i].style.textDecoration = "none";
                tsk[i].style.color = "white";
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

    if (localStorage.length > 2) {
        clearBtn.style.display = "flex";
    } else {
        clearBtn.style.display = "none";
    }

    // O line-through é removido ao adicionar uma nova tarefa;
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
                    <div class="task">` + taskArr[(i-1)] + `</div>
                    <div class="remove-container">
                        <img class="remove-` + (i-1) + `" onclick="indentifyRemove(this)" src="./assets/images/remove.png">
                    </div>
                </div>`);
    
    if (!taskArr[(i-1)]) {
        
    } else {
        taskBox.insertAdjacentHTML("afterbegin", newTsk[(i-1)]);
    }

    if (!taskArr[(i-1)]) {
        
    } else {
        tskText[(i-1)] = document.getElementById("new-task-" + (i-1));
    }
    
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