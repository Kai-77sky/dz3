const input = document.getElementById('task_input');
const btn = document.getElementById('add_task');

const newTask = [];

function deleteTask(e) {
    newTask.splice(e.target.id, 1)
    render();
}

function changeTask(e) {
    const promtchange = prompt('Change task', newTask[e.target.id].task)
    newTask[e.target.id].task = promtchange;
    render();
}

function render() {
    document.querySelector('.lists').remove();

    const newBlock = document.createElement('div')
    newBlock.setAttribute('class', 'lists');

    for (i = 0; i < newTask.length; i++) {
        const task = `
            <div class="task">
                <p>${newTask[i].task}</p>
                 <div class="room" >
                    <button class="rem" id="${[i]}" onclick="deleteTask(event)">delete</button>
                    <button class="rem" id="${[i]}" onclick="changeTask(event)">change</button>
                </div>
            </div>`
        newBlock.innerHTML += task;
    }
    document.querySelector('.content').append(newBlock)
}

btn.onclick = () => {
    if (input.value.length >= 5){
        const elem = {
            id: newTask.length,
            task: input.value
        };
        newTask.push(elem);
        input.value = '';
        render();
    }
    else {
        alert("Введите больше 5 букв !")
    }
}
render()

input.addEventListener('change', (e) => {
    if (e.target.value.length >= 5){
        const newTask2 = {
            id: newTask.length,
            task: e.target.value
        };
        newTask.push(newTask2);
        e.target.value = '';
        render()
    }
    else  {
        alert("Введите больше 5 букв !")
    }
})
