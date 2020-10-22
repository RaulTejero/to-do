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
