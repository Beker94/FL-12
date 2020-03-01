let users = [];
let url = "https://jsonplaceholder.typicode.com/users"

mainPage();
window.addEventListener('hashchange', function (e) {
    if (location.hash == '#main') {
        mainPage();
    }
});

function mainPage() {
    location.hash = '#main';
    addSpiner();
    let root = document.getElementById('root');
    root.innerHTML = '';
    fetch(url)
        .then(response => response.json())
        .then(json => {
            json.forEach(user => {
                show(user);
                users.push(user);
            })
            let buttonDel = document.querySelectorAll('.del');
            let buttonEdit = document.querySelectorAll('.edit');
            let person = document.querySelectorAll('.person');
            for (let i = 0; i < buttonDel.length; i++) {
                buttonDel[i].addEventListener('click', remove.bind(users[i]));
                buttonEdit[i].addEventListener('click', edit.bind(users[i]));
                person[i].addEventListener('click', userPosts.bind(users[i]));
            }
            delSpiner();
        })
}

const show = (post) => {
    let root = document.getElementById('root');
    let user = document.createElement('form');
    user.setAttribute('id', `${post.id}`)
    user.classList.add('users')
    user.innerHTML = `
          <h5 class="person">${post.name}</h5>
          <div><span>Name:</span><input type="text" name="name" value="${post.name}"></div>
          <div><span>Username:</span><input type="text" name="username" value="${post.username}"></div>
          <div><span>Email:</span><input type="text" name="email" value="${post.email}"></div>
          <div><span>Phone:</span><input type="text" name="phone" value="${post.phone}"></div>
          <div><span>Company:</span><input type="text" name="company" value="${post.company.name}"></div>
          <div>
          <button type="submit" class="edit btn btn-success">Edit</button>
          <button class="del btn btn btn-danger">Delete</button>
          </div>`;
    root.append(user);
}

function remove(e) {
    e.preventDefault();
    addSpiner();
    const card = document.getElementById(`${this.id}`);
    fetch(`${url}/${this.id}`, {
            method: 'DELETE'
        })
        .then(() => {
            delSpiner();
            card.remove();
        })
}

function edit(e) {
    e.preventDefault();
    addSpiner();
    let card = document.getElementById(this.id)
    this.name = card.name.value;
    this.username = card.username.value;
    this.email = card.email.value;
    this.phone = card.phone.value;
    this.company = card.company.value;

    fetch(`${url}/${this.id}`, {
            method: 'PUT',
            body: JSON.stringify(this),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(() => {
            delSpiner();
        })
}

function addSpiner() {
    let spiner = document.querySelector('.spiner');
    spiner.style.display = "flex"
}

function delSpiner() {
    let spiner = document.querySelector('.spiner');
    spiner.style.display = "none"
}

function userPosts() {
    location.hash = `#user${this.id}`;
    addSpiner();
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.id}`)
        .then(response => response.json())
        .then(json => {
            let root = document.getElementById('root');
            root.innerHTML = ''
            json.forEach(elem => {
                posts(elem)
            });
        })
}

function posts(post) {
    let root = document.getElementById('root');
    let posts = document.createElement('div');
    posts.setAttribute('id', `post${post.id}`);
    posts.classList.add('posts');
    posts.innerHTML =
        `<h4>${post.title}</h4>
          <p>${post.body}</p>`

    root.append(posts);
    comments(post.id);
}

function comments(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(json => json.forEach((elem, i) => {
            let comment = document.createElement('div');
            comment.classList.add('comments')
            let post = document.querySelector(`#post${id}`);
            comment.innerHTML =
                `<h6>comment ${i+1}</h6>
            <p>name:<span>${elem.name}</span></p>
            <p>email:<span>${elem.email}</span></p>
            <p>body:<span>${elem.body}</span></p>`
            post.append(comment);
            delSpiner();
        }))
}