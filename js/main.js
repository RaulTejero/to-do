let sectionList = document.querySelector('#list');
let btnAdd = document.querySelector('#btn_header');
let inputAdd = document.querySelector('#input_header');
let priorityAdd = document.querySelector('#select_header');
let inputFilter = document.querySelector('#input_main');
let btnFind = document.querySelector('#select_main');


console.log(list);



// function print(pList, pSection) {
//     pList.forEach(el => {
//         pSection.innerHTML += `<li>${el.titulo}<button>Eliminar</button></li>`;
//     });
// }

// print(list, sectionList);


let counterId = 0;
function addTask() {
    if (inputAdd.value != "" && priorityAdd.value != "") {
        sectionList.innerHTML += `<li class ="priority_${priorityAdd.value}">${inputAdd.value}<button>Eliminar</button></li>`;

        let newArray = { 'idTarea': counterId, 'titulo': inputAdd.value, 'prioridad': priorityAdd.value };
        list.push(newArray);

        counterId++
        inputAdd.value = "";
        priorityAdd.value = "";
        console.log(list);
    } else {
        alert('No pueden estar los campos vacios');
        inputAdd.value = "";
        priorityAdd.value = "";
    }

}

btnAdd.addEventListener('click', addTask)




