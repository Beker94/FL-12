const addOne = x => x + 1;

function pipe(x) {
    let summ = x;
    for (let i = 1; i < arguments.length; i++) {
        summ = arguments[i](summ);
    }
    return summ;
}


pipe(1, addOne, addOne,addOne,addOne);