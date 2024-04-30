
let tasks = []

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if(taskText !== ''){
        tasks.push(taskText);
        displayTasks();
        taskInput.value = ''
    }
}

function displayTasks(){
    const taskList = document.getElementById('taskList')
    taskList.innerHTML=''
    tasks.forEach((task,index)=> {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Delete'
        deleteButton.onclick = function(){
            tasks.splice(index,1)
            displayTasks()
        }

        const updateButton = document.createElement('button')
        updateButton.textContent = 'Update'
        updateButton.onclick=  function(){
            const updatedTask = prompt('enter updated task:',task)
            if(updatedTask !== null){
                tasks[index] = updatedTask.trim()
                displayTasks()
            }
        }

        li.appendChild(deleteButton)
        li.appendChild(updateButton)

        taskList.appendChild(li)
    })
}


