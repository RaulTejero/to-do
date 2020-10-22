let sectionList = document.querySelector('#list');
let btnAdd = document.querySelector('#btn_header');
let inputAdd = document.querySelector('#input_header');
let priorityAdd = document.querySelector('#select_header');
let inputFind = document.querySelector('#input_main');
let selectFilter = document.querySelector('#select_main');

print(list)

function print(pList, pSection = sectionList) {
    pSection.innerHTML = "";
    pList.forEach(el => {
        if (el.prioridad == 'diario') {
            pSection.innerHTML += `<li class ="priority_red" data-id="${el.idTarea}">${el.titulo}<button onClick="removeTask(this)"><i class="fas fa-eraser"></i></button></li>`;
        } else if (el.prioridad == 'semanal') {
            pSection.innerHTML += `<li class ="priority_yellow"data-id="${el.idTarea}">${el.titulo}<button onClick="removeTask(this)"><i class="fas fa-eraser"></i></button></li>`;
        } else {
            pSection.innerHTML += `<li class ="priority_green"data-id="${el.idTarea}">${el.titulo}<button onClick="removeTask(this)"><i class="fas fa-eraser"></i></button></li>`;
        };

    });
    console.log(list);
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


        print(list)
        counterId++
    } else {
        alert('Los campos no pueden estar vacios')
        inputAdd.value = '';
        priorityAdd.value = '';
        inputFind.value = '';
        selectFilter.value = '';
    };
});


function filterListByPriority(pPriority) {
    let filterList = list.filter(el => el.prioridad == pPriority);
    (filterList.length != 0) ? print(filterList) : print(list);
};

selectFilter.addEventListener('change', event => {
    let value = event.target.value;
    filterListByPriority(value);
});

function remove(pList, id) {
    findRemove = pList.findIndex(el => el.idTarea == id);
    pList.splice(findRemove, 1);
    print(pList);
}
function removeTask(event) {
    let id = event.parentNode.dataset.id;
    remove(list, id);
};

const findTask = inputFind.addEventListener('input', (event) => {
    let word = event.target.value;

});

function filterWord(pList, pWord) {

}


