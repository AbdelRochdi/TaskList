const taskForm = document.querySelector('.task__field');
const taskInput = document.querySelector('.task__field__input');
const taskList = document.querySelector('.task-collection');
const clearBtn = document.querySelector('.clear-button');
const filter = document.querySelector('#filter');


function loadAllEvents() {
    taskForm.addEventListener('submit', addTask);

    taskList.addEventListener('click', delTask);

    clearBtn.addEventListener('click', clearTasks);

    filter.addEventListener('keyup', filterTasks);
}

function addTask(e){
    if (taskInput.value === '') {
        alert('please add a task');
    }else{
        const li = document.createElement('li');
        li.textContent = taskInput.value;
        li.className = 'task-collection__item';

        const delBtn = document.createElement('img');
        delBtn.setAttribute('src', 'images/icon-close.svg');
        delBtn.className = 'close';
        li.appendChild(delBtn);
        

        taskList.appendChild(li);
    }

    taskInput.value = '';

    e.preventDefault();
}

function delTask(e){

    if (e.target.classList.contains('close')) {
        e.target.parentElement.remove();
    }
}

function clearTasks(){
    // taskList.innerHTML = '';

    while (taskList.firstChild) {
        taskList.firstChild.remove();
    }
}

function filterTasks(){
    let text = filter.value.toLowerCase();
    document.querySelectorAll('.task-collection__item').forEach(function(task) {
        let item = task.textContent.toLowerCase();
        if (item.indexOf(text) != -1) {
            task.style.display = 'flex';
        }else{
            task.style.display = 'none';
        }
    })
}




loadAllEvents();