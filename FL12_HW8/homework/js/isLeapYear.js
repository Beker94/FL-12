const isLeapYear = (data) => {
    let year = new Date(data);
    if ((year.getFullYear() % 4 === 0) && (year.getFullYear() % 100 !== 0) || (year.getFullYear() % 400 === 0)) {
        console.log(`${year.getFullYear()} is a leap year`);
    } else if ((year.getFullYear() === "Invalid Date") || (isNaN(year.getFullYear()))) {
        console.log(`Invalid Date`);
    } else {
        console.log(`${year.getFullYear()} is not leap year`);
    }
}

isLeapYear('2020-01-15  13:00:00');
isLeapYear('2020-01-01  00:00:00777');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);