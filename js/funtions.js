let inputHeader = document.querySelector('#input_header');
let selectHeader = document.querySelector('#select_header');
let btnHeader = document.querySelector('#btn_header');
let inputMain = document.querySelector('#input_main');
let selectMain = document.querySelector('#select_main');
let ulMain = document.querySelector('#list');

let list = new Array();

list = [
    { 'idTarea': 0, 'titulo': 'Estudiar Javascript', 'priorida': 'urgente' },
    { 'idTarea': 0, 'titulo': 'Dormir', 'priorida': 'diaria' },
    { 'idTarea': 0, 'titulo': 'Salir a comer a casa de angelito lejod de nna estar fuera de ', 'priorida': 'mensual' }
];




function print(pList) {
    pList.forEach(el => {
        console.log(el.titulo);
        ulMain.innerHTML += `<li>${el.titulo}<button>eliminar</button></li>`
    });
}


print(list);

