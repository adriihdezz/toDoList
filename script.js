const input = document.getElementsByClassName('input')[0];
const boton = document.getElementsByClassName('boton')[0];
const tareas = document.getElementById('tareas');

function addTarea() {
    const texto = input.value.trim();
    if (texto == '') return;
    input.value = '';

    const divExtra = document.createElement('div');
    divExtra.classList.add('tarea')
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const label = document.createElement('label');
    label.textContent = texto;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            label.classList.add('completada');
        } else {
            label.classList.remove('completada');
        }
    });

    const eliminar = document.createElement('button');
    eliminar.textContent = '✖';

    eliminar.addEventListener('click', () => {
        tareas.removeChild(divExtra);
    });
    
    divExtra.appendChild(checkbox);
    divExtra.appendChild(label);
    divExtra.appendChild(eliminar);

    tareas.appendChild(divExtra);
};

boton.addEventListener('click', addTarea());

const form = document.getElementsByClassName('texto')[0];
form.addEventListener('submit', e => {
    e.preventDefault();
    addTarea();
});

