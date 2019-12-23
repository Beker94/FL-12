let a, b, c;

for (let i = 0; i < 1; i++) {
    a = +prompt('Enter side a');
    b = +prompt('Enter side b');
    c = +prompt('Enter side c');


    if (typeof a !== undefined && typeof b !== undefined && typeof c !== undefined &&
        a !== '' && b !== '' && c !== '' 
        && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
        if (a + b < c || b + c < a || a + c < b) {
            console.log('Triangle doesn’t exist');
        } else if (a === b && b === c) {
            console.log('Equilateral triangle');
        } else if (a !== b && b !== c && c !== a) {
            console.log('Scalene triangle');
        } else {
            console.log('Isosceles triangle');
        }
    } else if (a === 0 || b === 0 || c === 0) {
        console.log('A triangle must have 3 sides with a positive definite length');
    } else {
        console.log('input values should be ONLY numbers');
        i--;
    }
}