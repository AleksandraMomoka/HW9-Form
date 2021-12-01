let input = document.getElementById('input-pole-tasks');
let list = document.getElementById('to-do-list');
let btn = document.getElementById('btn-add-tasks');
let form = document.getElementById('form');
let task;
let deletBtn;
let regExp = /^[\s\w]{2,15}$/i;

input.addEventListener('blur', (e) => {
    e.preventDefault();
    if (!validate(regExp, input.value)) {
        notvalid(input);
    } else if (validate(regExp, input.value)) {
        valid(input);
    }
});

function validate(regExp, input) {
    return regExp.test(input);
}

function valid(input) {
    input.classList.remove('input-pole-task-invalid');
}

function notvalid(input) {
    input.classList.add('input-pole-task-invalid');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validate(regExp, input.value))  {
        alert('notvalid');
    } else {
        createElement(input.value);
    }
});

function createElement(value) {
    console.log(value);
    task = document.createElement('li');
    task.className = 'to-do-tasks';
    task.innerHTML = input.value;
    list.append(task);
    input.value = '';
    deletBtn = document.createElement('button');
    deletBtn.className = 'deletBtn';
    deletBtn.textContent = 'x';
    task.append(deletBtn);
}

list.addEventListener('click', (event) => {
    if (event.target.className === 'deletBtn') {
        let deletTask = event.target.parentNode;
        deletTask.remove();
    }
    else {
        event.target.classList.toggle('tasks-done');
    } 
});



