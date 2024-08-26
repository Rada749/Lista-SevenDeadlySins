// READ - method GET - URL: http://localhost:3000/characters
async function getCharacters() {
    const response = await fetch("http://localhost:3000/characters", {
        method: "GET",
        headers: {'Content-Type': 'application/json'} 
    });
    const data = await response.json();
    return data;
}

// DELETE - method DELETE - URL: http://localhost:3000/characters/${id}
async function deleteCharacter(id) {
    await fetch(`http://localhost:3000/characters/${id}`, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'} 
    });
    updateTable();
}

// CREATE - method POST - URL: http://localhost:3000/characters
async function createCharacter(characterData) {
    const characters = await getCharacters();
    const nextId = characters.length > 0 ? parseInt(characters[characters.length - 1].id) + 1 : 1;
    characterData.id = nextId.toString();
    await fetch("http://localhost:3000/characters", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(characterData)
    });
    updateTable();
}

// UPDATE - method PUT - URL: http://localhost:3000/characters/${id}
async function updateCharacter(id, characterData) {
    await fetch(`http://localhost:3000/characters/${id}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(characterData)
    });
    updateTable();
}

// FUNCION PARA ACTUALIZAR LA TABLA
async function updateTable() {
    const characters = await getCharacters();
    const tbody = document.getElementById('data');
    tbody.innerHTML = '';

    characters.map((character, index) => {
        let characterItem = document.createElement('tr');
        characterItem.id = `character-${character.id}`;
        characterItem.innerHTML = `
            <td>${index + 1}</td>
            <td class="character-name">${character.name}</td>
            <td class="character-gender">${character.gender}</td>
            <td class="character-race">${character.race}</td>
            <td class="table-secondary">
                <button class="btn btn-danger" onclick="deleteCharacter('${character.id}')">Eliminar</button>
                <button class="btn btn-edit" onclick="openEditForm('${character.id}')">✏️</button>
            </td>
        `;
        tbody.appendChild(characterItem);
    });
}

document.addEventListener('DOMContentLoaded', updateTable);

// FORMULARIO AÑADIR PERSONAJE
const addBtn = document.getElementById('add-btn');
const closeAddBtn = document.getElementById('closeAdd-btn');
const allForm = document.getElementById('character-form');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    allForm.classList.add('forms');
    allForm.classList.remove('forms-hidden');
});

closeAddBtn.addEventListener('click', (e) => {
    e.preventDefault();
    allForm.classList.add('forms-hidden');
    allForm.classList.remove('forms');
});

document.getElementById('character-form').addEventListener('submit', async (event) => {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const characterData = {
        name: formData.get('name'),
        gender: formData.get('gender'),
        race: formData.get('race')
    };
    await createCharacter(characterData);
});

// FORMULARIO EDITAR PERSONAJE

function openEditForm(id) {
    const character = document.getElementById(`character-${id}`);
    const name = character.querySelector('.character-name').innerText;
    const gender = character.querySelector('.character-gender').innerText;
    const race = character.querySelector('.character-race').innerText;

    document.getElementById('character-edit').dataset.id = id;
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-gender').value = gender;
    document.getElementById('edit-race').value = race;    

    document.getElementById('character-edit').classList.add('forms');
    document.getElementById('character-edit').classList.remove('forms-hidden');
};

const editForm = document.getElementById('character-edit');
const closeEditBtn = document.getElementById('closeEdit-btn');

closeEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    editForm.classList.add('forms-hidden');
    editForm.classList.remove('forms');
});

document.getElementById('character-edit').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = event.target.dataset.id;
    const formData = new FormData(event.target);
    const characterData = {
        name: formData.get('edit-name'),
        gender: formData.get('edit-gender'),
        race: formData.get('edit-race')
    };
    await updateCharacter(id, characterData);
    editForm.classList.add('forms-hidden');
    editForm.classList.remove('forms');
});

// CAPITALIZAR PRIMERAS LETRAS EN EL FORMULARIO
const form = document.querySelectorAll('input');

function capitalizeFirstLetter(word) {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

form.forEach(input => {
    input.addEventListener('input', (event) => {
        const value = event.target.value;
        event.target.value = capitalizeFirstLetter(value);
    });
});
