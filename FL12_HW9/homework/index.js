const convert = (...arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            newArr[i] = +arr[i];
        } else {
            newArr[i] = '' + arr[i];
        }
    }
    console.log(newArr);
    return newArr;
}

const executeforEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

const mapArray = (arr, callback) => {
    let newArr = [];
    executeforEach(arr, function (el) {
        newArr.push(callback(el));
    })
    return newArr;
}

const filterArray = (arr, callback) => {
    let newArr = [];
    executeforEach(arr, function (el) {
        if (callback(el) === true) {
            newArr.push(el);
        }
    })
    return newArr;
}

const flipOver = (str) => {
    let newString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const makeListFromRange = (arr) => {
    let newArr = [];
    let el = arr[0];
    for (let i = 0; el !== arr[1] + 1; i++) {
        newArr.push(el);
        el++
    }
    return newArr;
}

const actors = [{
        name: 'tommy',
        age: 36
    },
    {
        name: 'lee',
        age: 28
    }
];

const getArrayOfKeys = (arr, prop) => {
    let newArr = [];
    executeforEach(arr, function (el) {
        for (let key in el) {
            if (key === prop) {
                newArr.push(el[key])
            }
        }
    })
    return newArr;
}

const substitute = (arr) => {
    const _LESS = 30;
    return mapArray(arr, function (el) {
        if (el <= _LESS) {
            el = '*';
            return el;
        } else {
            return el;
        }
    })
}

const date = new Date(2019, 0, 2);

const getPastDay = (d, day) => {
    d.setDate(d.getDate() - day);
    return d.toDateString();
}

const formatDate = (date) => {
    const dateformat = (numb) => {
        if (numb < 10) {
            return '0' + numb
        } else {
            return numb
        }
    }
    let time = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate(),
        hours: date.getHours(),
        minutes: date.getMinutes()
    }
    return `${time.year}/${time.month}/${time.day}  ${dateformat(time.hours)}:${dateformat(time.minutes)}`;
}