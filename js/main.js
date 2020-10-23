let sectionList = document.querySelector('#list');
let btnAdd = document.querySelector('#btn_header');
let inputAdd = document.querySelector('#input_header');
let priorityAdd = document.querySelector('#select_header');
let inputFind = document.querySelector('#input_main');
let selectFilter = document.querySelector('#select_main');
let msn = document.querySelector('#msn');

print(list);

let counterId = 0;
btnAdd.addEventListener('click', () => {
    if (inputAdd.value != "" && priorityAdd.value != "") {

        let newOject = {
            idTarea: counterId,
            titulo: inputAdd.value,
            prioridad: priorityAdd.value
        };
        list.push(newOject);
        msn.className = 'blockNone';
        print(list)
        counterId++
    } else {
        msn.className = 'block';
    };
    inputAdd.value = '';
    priorityAdd.value = '';
    inputFind.value = '';
    selectFilter.value = '';
});
function filterListByPriority(pList, pPriority) {
    let filterList = pList.filter(el => el.prioridad == pPriority);

    (filterList.length != 0) ? print(filterList) : print(pList);
};

selectFilter.addEventListener('change', event => {
    let result = event.target.value;
    filterListByPriority(list, result);
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

function findWord(event) {
    let letters = event.target.value;
    let filterList = list.filter(task => task.titulo.toLowerCase().includes(letters.toLowerCase()));
    letters.toLowerCase();
    selectFilter.value = '';
    print(filterList);
}

inputFind.addEventListener("input", findWord);


