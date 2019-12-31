const getMin = (...numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        } else {
            continue;
        }
    }
    return min;
}

getMin(1, 5, 7, 9, 15, 0);