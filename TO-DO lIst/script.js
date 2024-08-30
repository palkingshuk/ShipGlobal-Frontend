// Define the todo lists and navigation buttons
const backlogList = document.getElementById('backlog-list');
const toDoList = document.getElementById('to-do-list');
const ongoingList = document.getElementById('ongoing-list');
const doneList = document.getElementById('done-list');

const backlogLeftBtn = document.querySelector('.backlog .nav-btn.left');
const backlogRightBtn = document.querySelector('.backlog .nav-btn.right');
const toDoLeftBtn = document.querySelector('.to-do .nav-btn.left');
const toDoRightBtn = document.querySelector('.to-do .nav-btn.right');
const ongoingLeftBtn = document.querySelector('.ongoing .nav-btn.left');
const ongoingRightBtn = document.querySelector('.ongoing .nav-btn.right');
const doneLeftBtn = document.querySelector('.done .nav-btn.left');
const doneRightBtn = document.querySelector('.done .nav-btn.right');

let todos = [
    { id: 1, text: 'Todo 1', status: 'backlog' },
    { id: 2, text: 'Todo 2', status: 'backlog' },
    { id: 3, text: 'Todo 3', status: 'to-do' },
    { id: 4, text: 'Todo 4', status: 'ongoing' },
    { id: 5, text: 'Todo 5', status: 'done' },
];

function renderTodoLists() {
    backlogList.innerHTML = '';
    toDoList.innerHTML = '';
    ongoingList.innerHTML = '';
    doneList.innerHTML = '';

    todos.forEach((todo) => {
        const todoElement = document.createElement('li');
        todoElement.textContent = todo.text;

        switch (todo.status) {
            case 'backlog':
                backlogList.appendChild(todoElement);
                break;
            case 'to-do':
                toDoList.appendChild(todoElement);
                break;
            case 'ongoing':
                ongoingList.appendChild(todoElement);
                break;
            case 'done':
                doneList.appendChild(todoElement);
                break;
        }
    });
}

function handleNavigationButtonClick(event) {
    const button = event.target;
    const todoElement = button.parentNode.querySelector('li:selected');
    const todoId = todoElement.dataset.id;
    const todoStatus = button.parentNode.className.split(' ')[1];

    let newStatus;
    if (button.classList.contains('left')) {
        switch (todoStatus) {
            case 'to-do':
                newStatus = 'backlog';
                break;
            case 'ongoing':
                newStatus = 'to-do';
                break;
            case 'done':
                newStatus = 'ongoing';
                break;
        }
    } else if (button.classList.contains('right')) {
        switch (todoStatus) {
            case 'backlog':
                newStatus = 'to-do';
                break;
            case 'to-do':
                newStatus = 'ongoing';
                break;
            case 'ongoing':
                newStatus = 'done';
                break;
        }
    }

    todos = todos.map((todo) => {
        if (todo.id === todoId) {
            todo.status = newStatus;
        }
        return todo;
    });
    renderTodoLists();
}

backlogLeftBtn.addEventListener('click', handleNavigationButtonClick);
backlogRightBtn.addEventListener('click', handleNavigationButtonClick);
toDoLeftBtn.addEventListener('click', handleNavigationButtonClick);
toDoRightBtn.addEventListener('click', handleNavigationButtonClick);
ongoingLeftBtn.addEventListener('click', handleNavigationButtonClick);
ongoingRightBtn.addEventListener('click', handleNavigationButtonClick);
doneLeftBtn.addEventListener('click', handleNavigationButtonClick);
doneRightBtn.addEventListener('click', handleNavigationButtonClick);


renderTodoLists();