//collaborating with: Richard, Anthony, Daisy, Kye, Viviana



class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`The ninja's name is ${this.name}`)
    }

    showStats() {
        console.table(this)
        // console.log(`[ name: ${this.name}, strength: ${this.strength}, speed: ${this.speed}, health: ${this.health}`]) 
    }

    drinkSake() {
        this.health += 10
        console.log(`My health is now ${this.health}! I am unstoppable!!!!!`)
    }

}




const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
