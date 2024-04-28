const human = {
    height: 180,
    weight: 70,
    age: 31,
    sing() {
        console.log("Click, click, boom! I'm coming down on the stereo, hear me on the radio...");
    }
}

const player = {
    result: 1.2,
    //prototype inheritance
    __proto__: human
}

console.log(player);
console.log(player.sing());
console.log(player.__proto__.weight);

//getters and setters

const playerJohn = {
    name : "John",
    surname: "Doe",
    //Destructurization
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' '); //кортеж
        this.name = firstName;
        this.surname = lastName;
    }
}

//console.log(playerJohn.fullName());
playerJohn.fullName = "Jon Snow";
console.log(playerJohn)

//Constructors

function Player(name, height, weight, result) {
    this.name = name;
    this.height = height;
    this.weight = weight;
    this.result = result;
}

const player1 = new Player("Magic Mike", 175, 80, 1.5);
const player2 = new Player("John Constantine", 180, 70, 1.3);
const player3 = new Player("Billy One-Eye", 185, 90, 1.6);

