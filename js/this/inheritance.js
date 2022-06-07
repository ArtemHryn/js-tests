/*
 * Наследование
 *  - extends
 *  - super()
 */

class Hero {
  constructor({ name = "Unknown", xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`${this.name} have got ${amount} XP`);
    this.xp += amount;
  }
}

class Warrior extends Hero {
  constructor({ weapon = "hands", ...restAtr } = {}) {
    super(restAtr);
    this.weapon = weapon;
  }
  getName() {
    return this.name;
  }
}

class Archer extends Warrior {
  constructor({attackType, ...restAtr}) {
    super(restAtr)
    this.attackType = this.attackType;
  }
}

class Mag extends Hero {
  constructor({ weapon = "hands", mana = 0, ...restAtr } = {}) {
    super(restAtr);
    this.weapon = weapon;
    this.mana = mana;
  }
}

const hero = new Warrior({ name: "Mango", xp: 1200, weapon: "Axe" });
const heroMag = new Mag({
  name: "Merlin",
  xp: 800,
  weapon: "Sword",
  mana: 1700,
});

console.log(heroMag);
console.log(hero.getName());

const archerHero = new Archer({ name: "Bio", xp: 1200, weapon: "Axe", attackType: "close" });

console.log(archerHero.getName())