let sectionList = document.querySelector('#list');
let btnAdd = document.querySelector('#btn_header');
let inputAdd = document.querySelector('#input_header');
let priorityAdd = document.querySelector('#select_header');
let inputFind = document.querySelector('#input_main');
let selectFilter = document.querySelector('#select_main');



function print(pList, pSection = sectionList) {
    pSection.innerHTML = "";
    pList.forEach(el => {
        if (el.prioridad == 'diario') {
            pSection.innerHTML += `<li class ="priority_red">${el.titulo}<button onClick="removeTask()">Eliminar</button></li>`;
        } else if (el.prioridad == 'semanal') {
            pSection.innerHTML += `<li class ="priority_yellow">${el.titulo}<button onClick="removeTask()">Eliminar</button></li>`;
        } else {
            pSection.innerHTML += `<li class ="priority_green">${el.titulo}<button onClick="removeTask()">Eliminar</button></li>`;
        };
    });
};



let counterId = 0;
btnAdd.addEventListener('click', () => {
    if (inputAdd.value != "" && priorityAdd.value != "") {

        let newOject = {
            idTarea: counterId,
            titulo: inputAdd.value,
            prioridad: priorityAdd.value
        };
        list.push(newOject);

        inputAdd.value = '';
        priorityAdd.value = '';
        inputFind.value = '';
        selectFilter.value = '';
        counterId++

        print(list)

    } else {
        alert('Los campos no pueden estar vacios')
        inputAdd.value = '';
        priorityAdd.value = '';
        inputFind.value = '';
        selectFilter.value = '';
    }
});


function filterListByPriority(pList, pPriority) {
    for (const task of pList) {
        if (task.prioridad == pPriority) {
            let arr = [task];
            print(arr)
        }

    }
}
filterListByPriority(list, "semanal");
// falata hacer el addEventListener del select y pasar como parametro