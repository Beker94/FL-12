let a, b, c, d, x, x1, x2;


for (let i = 0; i < 1; i++) {
    a = +prompt('Enter number a');
    b = +prompt('Enter number b');
    c = +prompt('Enter number c');
    if (typeof a !== undefined && typeof b !== undefined && typeof c !== undefined &&
        a !== '' && b !== '' && c !== '' && a !== 0 
        && Number.isInteger(a) && Number.isInteger(b) && Number.isInteger(c)) {
        d = b * b - 4 * a * c;
        if (d === 0) {
            x = -b / (2 * a);
            alert(`X=${x}`);
        } else if (d < 0) {
            alert('no solution (Discriminant < 0)')
        } else {
            x1 = (-b + Math.sqrt(d)) / (2 * a);
            x2 = (-b - Math.sqrt(d)) / (2 * a);
            alert(`X1=${x1} , X2=${x2}`);
        }
    } else {
        alert('Invalid input data');
        i--;
    }
}