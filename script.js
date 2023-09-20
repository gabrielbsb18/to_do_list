// Função para adicionar uma nova tarefa à lista
function addItem() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = createTaskElement(taskText);
        const todoList = document.getElementById('todoList');
        todoList.appendChild(newTask);
        taskInput.value = '';
    }
}

// Função para criar um elemento de tarefa
function createTaskElement(text) {
    const li = document.createElement('li');
    li.innerText = text;
    li.addEventListener('click', () => {
        moveItem(li);
    });
    return li;
}

// Função para mover uma tarefa para a próxima seção
function moveItem(item) {
    const inProgressList = document.getElementById('inProgressList');
    const doneList = document.getElementById('doneList');

    if (item.parentElement.id === 'todoList') {
        inProgressList.appendChild(item);
    } else if (item.parentElement.id === 'inProgressList') {
        doneList.appendChild(item);
    }
}

// Função para limpar as listas
function clearItems() {
    document.getElementById('todoList').innerHTML = '';
    document.getElementById('inProgressList').innerHTML = '';
    document.getElementById('doneList').innerHTML = '';
}
