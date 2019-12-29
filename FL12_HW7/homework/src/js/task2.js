let game;
let number;
let guessNumber;
let totalPrise = 0;
let attempts = 3;
let prise = 100;
let newPrise = prise;
let maxNumber = 9;
let count = 1;

game = confirm('Do you want to play a game?');
if (game) {
    number = Math.floor(Math.random() * maxNumber);
    for (; count < 4;) {
        guessNumber = parseInt(prompt(`Chose a roulette pocket from 0 to ${maxNumber-1}
attempts left: ${attempts}
total prize: ${totalPrise}$
possibleprize on current attempt: ${newPrise}$`));

        if (guessNumber === number) {
            totalPrise = totalPrise + newPrise;
            game = confirm(`Congratulation, you won!   Your prize is: ${totalPrise} $. Do you want to continue?`);
            if (game) {
                count = 1;
                attempts = 3;
                maxNumber = maxNumber + 4;
                prise = prise * 2;
                newPrise = prise;
                number = Math.floor(Math.random() * maxNumber);
            } else {
                game = confirm('Do you wants to play again?')
                if (game) {
                    count = 1;
                    attempts = 3;
                    maxNumber = 9;
                    prise = 100;
                    newPrise = prise;
                    totalPrise = 0;
                    number = Math.floor(Math.random() * maxNumber);
                } else {
                    break;
                }
            }
        } else {
            attempts--;
            if (attempts === 0) {
                alert(`Thank you for your participation. Your prize is: ${totalPrise} $`);
                game = confirm('Do you wants to play again?')
                if (game) {
                    count = 1;
                    attempts = 3;
                    prise = 100;
                    newPrise = prise;
                    number = Math.floor(Math.random() * maxNumber);
                } else {
                    break;
                }

            } else {
                newPrise = prise / (count * 2);
                count++;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can')
}