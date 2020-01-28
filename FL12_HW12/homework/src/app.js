let main = document.getElementById('root');
let curent;
const first = 0;

if (!localStorage.getItem('data')) {
    localStorage.setItem('data', JSON.stringify([]));
}

mainPage();
window.addEventListener('hashchange', function (e) {
    if (location.hash === '#add-new') {
        addNew();
    } else if (location.hash === '#main') {
        mainPage();
    } else {
        editItem(curent);
    }
});


function mainPage() {
    location.hash = '#main';
    let body = '<header><button class="add-new buttons">Add new</button></header>';
    let data = JSON.parse(localStorage.getItem('data'));

    for (let i = 0; i < data.length; i++) {

        let key = Object.keys(data[i])[first];
        body += `<div id="${i}" class="items">
                    <span >${key} - ${data[i][key]}</span>
                    <div>
                        <button class="edit-button buttons">Edit</button>
                        <button class="remove-button buttons">Remove</button>
                    </div>
                </div>`
    }

    main.innerHTML = body;
    let remove = document.querySelectorAll('.remove-button');
    let addNewButton = document.querySelector('.add-new');
    addNewButton.addEventListener('click', function () {
        location.hash = '#add-new';
    })

    for (let i = 0; i < remove.length; i++) {
        remove[i].addEventListener('click', function (e) {
            data.splice(remove[i].parentNode.parentNode.id, 1);
            localStorage.setItem('data', JSON.stringify(data));
            mainPage();
        })
    }

    let edit = document.querySelectorAll('.edit-button');

    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener('click', function () {
            curent = edit[i].parentNode.parentNode.id;
            location.hash = `#modify/:item_id${curent}.`;
        })
    }


}

function addNew() {
    let body = `<div class="new-items">
                    <div>
                        <input type="text" placeholder="term" class="term"/>
                        <input placeholder="definition" class="definition"/>
                    </div>
                    <div>
                        <button class="save-button buttons">Save</button>
                        <button class="cancel-button buttons">Cancel</button>
                    </div>
                </div>`;
    main.innerHTML = body;

    let term = document.querySelector('.term');
    let definition = document.querySelector('.definition');
    let save = document.querySelector('.save-button');
    let cancel = document.querySelector('.cancel-button');


    save.addEventListener('click', function () {
        let data = JSON.parse(localStorage.getItem('data'));
        let valueTerm = term.value;
        let valueDefinition = definition.value;
        if (valueTerm && valueDefinition) {
            let obj = {}
            obj[valueTerm] = valueDefinition;

            data.push(obj);
            localStorage.setItem('data', JSON.stringify(data));
            location.hash = '#main';
        }

    })
    cancel.addEventListener('click', function () {
        location.hash = '#main';
    })
}

function editItem(id) {
    let data = JSON.parse(localStorage.getItem('data'));
    let key = Object.keys(data[id])[first];
    let value = data[id][key];
    let body = `<div class="new-items">
                    <div>
                        <input type="text" class="term" placeholder="term" value="${key}"/>
                        <input class="definition" placeholder="definition" value="${value}"/>
                    </div>
                    <div>
                        <button class="save-button buttons">Save</button>
                        <button class="cancel-button buttons">Cancel</button>
                    </div>
                </div>`;
    main.innerHTML = body;

    let term = document.querySelector('.term');
    let definition = document.querySelector('.definition');
    let save = document.querySelector('.save-button');
    let cancel = document.querySelector('.cancel-button');

    save.addEventListener('click', function () {
        let valueTerm = term.value;
        let valueDefinition = definition.value;
        let obj = {}
        obj[valueTerm] = valueDefinition;
        data[id] = obj;
        localStorage.setItem('data', JSON.stringify(data));
        location.hash = '#main';
    })
    cancel.addEventListener('click', function () {
        location.hash = '#main';
    })
}