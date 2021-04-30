export class Pokemon {
    name : string;
    speed : Number;
    attack : Number;
    defense : Number;
    hp: number;

    constructor(name: string, speed: Number, attack: Number, defense: Number, hp: number) {
        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
    }

    Battle = (p2 : Pokemon) => {
        if(this.speed >= p2.speed ) {
            return this ;
        }
        if(this.speed < p2.speed ) {
            return p2 ;
        }

    }

}
