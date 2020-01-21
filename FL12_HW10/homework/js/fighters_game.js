class Fighter {
    constructor(fighter) {
        this._name = fighter.name,
        this._damage = fighter.damage,
        this._hp = fighter.hp,
        this._health = fighter.hp,
        this._strength = fighter.strength,
        this._agility = fighter.agility,
        this.win = 0,
        this.loss = 0
    }
    get getName() {
        let name = this._name;
        return name;
    }
    get getDamage() {
        let damage = this._damage;
        return damage;
    }
    get getStrength() {
        let strength = this._strength;
        return strength;
    }
    get getAgility() {
        let agility = this._agility;
        return agility;
    }
    get getHealth() {
        let health = this._hp;
        return health;
    }
    attack(opponent) {
        let opponentDef = 100 - (opponent.getStrength + opponent.getAgility);
        let randomNumber = Math.round(Math.random() * 100);

        if (randomNumber > opponentDef) {
            this.dealDamage(opponent);
            console.log(`${this.getName} makes ${this.getDamage} damage to ${opponent.getName}`)
        } else {
            console.log(`${this.getName} attack missed`);
        }
    }
    logCombatHistory() {
        console.log(` Name: ${this.getName}, Wins: ${this.win}, Losses: ${this.loss}`)
    }
    heal(hp) {
        if (hp + this.getHealth >= this._health) {
            this._hp = this._health
        } else {
            this._hp += hp;
        }
    }
    dealDamage(opponent) {
        if (opponent._hp - this.getDamage < 0) {
            opponent._hp = 0;
        } else {
            opponent._hp -= this.getDamage;
        }
    }
    addWin() {
        return this.win++;
    }
    addLoss() {
        return this.loss++;
    }

}

const battle = (fighter1, fighter2) => {
    if (fighter1.getHealth || fighter1.getHealth) {
        while (fighter1.getHealth > 0 && fighter2.getHealth > 0) {
            fighter1.attack(fighter2);
            fighter2.attack(fighter1);
            if (fighter1.getHealth === 0) {
                console.log(`${fighter2.getName} win`);
                fighter1.addLoss();
                fighter2.addWin();
            } else if (fighter2.getHealth === 0) {
                console.log(`${fighter1.getName} win`)
                fighter2.addLoss();
                fighter1.addWin();
            }
        }
    } else {
        if (fighter1.getHealth === 0) {
            console.log(`${fighter1.getName} is dead and can't fight`)
        } else {
            console.log(`${fighter2.getName} is dead and can't fight`)
        }
    }
}
