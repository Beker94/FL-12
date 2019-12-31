const makeNumber = (arr) => {
    let arrNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i])) {
            continue;
        } else {
            arrNumber.push(arr[i]);
        }
    }
    return arrNumber.join('');
}

makeNumber('sn5jov89le3m');