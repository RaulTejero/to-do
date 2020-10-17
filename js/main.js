let sectionList = document.querySelector('#list');
let btnAdd = document.querySelector('#btn_header');
let inputAdd = document.querySelector('#input_header');
let priorityAdd = document.querySelector('#select_header');
let inputFilter = document.querySelector('#input_main');
let btnFind = document.querySelector('#select_main');

let counterId = 0;
function addTask() {
    if (inputAdd.value != "" && priorityAdd.value != "") {
        sectionList.innerHTML += `<li class ="priority_${priorityAdd.value}">${inputAdd.value}<button>Eliminar</button></li>`;

        let newArray = { 'idTarea': counterId, 'titulo': inputAdd.value, 'prioridad': priorityAdd.value };
        list.push(newArray);

        counterId++
        inputAdd.value = "";
        priorityAdd.value = "";

    } else {
        alert('No pueden estar los campos vacios');
        inputAdd.value = "";
        priorityAdd.value = "";
    }
}

btnAdd.addEventListener('click', addTask)
