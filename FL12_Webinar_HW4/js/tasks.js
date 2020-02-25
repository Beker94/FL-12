let arr = [1, 3, 4, 5, 6, 77, 7, 3, 2, 2, 3, 4, 5, 5, 1, 2, 3, 4, 5];
let obj = {
    name: 'roman'
};
let str = '123456789';
const url = 'https://jsonplaceholder.typicode.com/users';
const oldObj = {
    name: "someone",
    details: {
        id: 1,
        age: 11,
        university: 'LNULP'
    }
}


//1.
const maxElement = (arr) => {
    return Math.max(...arr);
}

//2.
const copiedArray = (arr) => {
    const newArr = [...arr];
    return newArr;
}

//3.

const addUniquedId = (obj) => {
    let newObj = {
        ...obj,
        id: Symbol('id')
    }
    return newObj;
}

//4.
const regroupObject = (obj) => {
    let {
        name,
        details: {
            id,
            age,
            university
        }
    } = obj;
    const newObj = {
        university: university,
        user: {
            age: age,
            firstName: name,
            id,
            id
        }
    }
    return newObj
}
regroupObject(oldObj);

//5.
const findUniqueElements = (arr) => {
    const newArr = new Set(arr);

    return [...newArr];
}

//6.
const phoneNumber = (numb) => {
    return numb.substr(-4, 4).padStart(10, '*')
}

//7.
const required = () => {
    throw new Error('Missing property');
}
const add = (a = required(), b = required()) => a + b;

//8
function promisNames(url) {
    return fetch(url)
        .then(request => request.text())
        .then((text) => {
            const names = [];
            for (let key in JSON.parse(text)) {
                names.push(JSON.parse(text)[key]['name'])
            }
            return names.sort();
        })
        .catch(error => console.log(`ERROR: ${error.stack}`));
}

promisNames(url).then(res => console.log(res));

//9.
async function asyncNames(url) {
    try {
        const request = await fetch(url);
        const text = await request.text();

        const names = [];
        for (let key in JSON.parse(text)) {
            names.push(JSON.parse(text)[key]['name'])
        }
        return names.sort();
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
    }
}

asyncNames(url).then(res => console.log(res));