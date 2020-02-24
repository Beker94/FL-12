//******************************  Task 1  ********************

class Deck {
    constructor() {
        this.cards = (() => {
            let cards = [];
            let suit = ['hearts', 'diamonds', 'clubs', 'spades'];
            for (let i = 1; i < 14; i++) {
                for (let j = 0; j < 4; j++) {
                    cards.push(new Card(suit[j], i));
                }
            }
            return cards;
        })()

    }
    shuffle() {
        let currentIndex = this.cards.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
        }
    }
    draw(n) {
        return this.cards.splice(this.cards.length - n);
    }
}

class Card {
    constructor(suit, rank) {
        this.suit = suit,
            this.rank = rank,
            this.isFaceCard = (() => {
                if (this.rank === 1 || this.rank > 10) {
                    return true;
                } else {
                    return false;
                }
            })()
    }
    toString() {
        const face = {
            1: 'Ace',
            11: 'Jack',
            12: 'Queen',
            13: 'King'
        }
        if (this.isFaceCard) {
            return `${face[this.rank]} of ${this.suit}`;
        } else {
            return `${this.rank} of ${this.suit}`;
        }
    }
    static compare(card1, card2) {
        if (card1.rank > card2.rank) {
            return 1;
        } else if (card1.rank < card2.rank) {
            return 0;
        } else {
            return -1
        }
    }
}

class Player {
    constructor(name) {
        this.name = name,
            this._wins = 0,
            this.deck = new Deck()
    }

    get wins() {
        return this._wins
    }

    addWin() {
        this._wins++;
    }

    static Play(playerOne, playerTwo) {
        playerOne.deck.shuffle();
        playerTwo.deck.shuffle();

        for (let i = 51; i >= 0; i--) {
            console.log(`${playerOne.name} ${playerOne.deck.cards[i].toString()}`);
            console.log(`${playerTwo.name} ${playerTwo.deck.cards[i].toString()}`);
            let winns = Card.compare(playerOne.deck.cards[i], playerTwo.deck.cards[i]);
            switch (winns) {
                case 1:
                    playerOne.addWin();
                    console.log(`${playerOne.name} win`)
                    break;
                case 0:
                    playerTwo.addWin();
                    console.log(`${playerTwo.name} win`)
                    break;
                case -1:
                    console.log(`a draw`);
                    break;
            }
            playerOne.deck.draw(1);
            playerTwo.deck.draw(1);

        }

        if (playerOne.deck.cards.length === 0 && playerTwo.deck.cards.length === 0) {
            console.log(`*******END*********`)
            if (playerOne.wins > playerTwo.wins) {
                console.log(`${playerOne.name} win ${playerOne.wins} to ${playerTwo.wins}`)
            } else if (playerOne.wins < playerTwo.wins) {
                console.log(`${playerTwo.name} win ${playerTwo.wins} to ${playerOne.wins}`)
            } else {
                console.log(`a draw`);
            }
        }

    }
}


//Player.Play(new Player('Roman'), new Player('Pasha'));


//******************************  Task 2  ********************

class Employee {
    constructor(about) {
        this.id = about.id,
            this.firstName = about.firstName,
            this.lastName = about.lastName,
            this.birthday = about.birthday,
            this.salary = about.salary,
            this.position = about.position,
            this.department = about.department,
            this.age = (() => {
                let age = new Date().getFullYear() - new Date(Date.parse(this.birthday)).getFullYear();
                return age;
            })(),
            Employee.EMPLOYEES.push(this);
    }

    static EMPLOYEES = [];

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    quit() {
        Employee.EMPLOYEES.forEach((employee, id, arr) => {
            if (employee === this) {
                arr.splice(id, 1);
            }
        })
    }
    retire() {
        console.log("It was such a pleasure to work with you!");
        this.quit();
    }
    getFired() {
        console.log("Not a big deal!");
        this.quit();
    }
    changeDepartment(newDepartment) {
        this.department = newDepartment;
    }
    changePosition(newPosition) {
        this.position = newPosition;
    }
    changeSalary(newSalary) {
        this.salary = newSalary;
    }
    getPromoted(benefits) {
        if (benefits) {
            for (let key in benefits) {
                switch (key) {
                    case (key === 'salary'):
                        this.changeSalary(benefits[key]);
                        break;
                    case (key === 'position'):
                        this.changePosition(benefits[key]);
                        break;
                    case (key === 'department'):
                        this.changeDepartment(benefits[key]);
                        break;
                }
            }
            console.log("Yoohooo!")
        }
    }
    getDemoted(punishment) {
        if (punishment) {
            for (let key in punishment) {
                switch (key) {
                    case (key === 'salary'):
                        this.changeSalary(punishment[key]);
                        break;
                    case (key === 'position'):
                        this.changePosition(punishment[key]);
                        break;
                    case (key === 'department'):
                        this.changeDepartment(punishment[key]);
                        break;
                }
            }
            console.log("Damn!")
        }
    }

}


class Manager extends Employee {
    constructor(about) {
        super(about);
        this.position = 'Manager';
    }
    get managedEmployees() {
        let arr = [];
        Employee.EMPLOYEES.forEach((employee) => {
            if (employee.department === this.department) {
                arr.push(employee);
            }
        })
        return arr;
    }
}

class BlueCollarWorker extends Employee {
    constructor(about) {
        super(about)
    }
}

class HRManager extends Manager {
    constructor(about) {
        super(about);
        this.department = 'hr';
    }
}

class SalesManager extends Manager {
    constructor(about) {
        super(about);
        this.department = 'sales';
    }
}

//******************************  Task 3  ********************


const ManagerPro = (person) => {
    person.promote = (id, salary) => {
        person.managedEmployees.forEach((person) => {
            if (person.id === id) {
                person.getPromoted({
                    salary:salary
                })
            }
        })
    }
}