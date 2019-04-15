import {BaseProperties} from "./BaseProperties";

abstract export class Creature implements ICreature{

    private health : number;
    private energy : number;
    private vision : number;
    private step : number;

    protected constructor(){

    }

    set_base_properties()
    {
        this.health = BaseProperties.health();
        this.energy = BaseProperties.energy();
        this.vision = BaseProperties.vision();
        this.step = BaseProperties.step();
    }

    set health(value){
        this.health = value;
    }

    set energy(value){
        this.energy = value;
    }

    set vision(value){
        this.vision = value;
    }

    set step(value){
        this.step = value;
    }

    move(){
        console.log('move');
    }

    eat(){
        console.log('eat');
    }

    watch(){
        this.vision = 10;
        console.log('watch');
    }

    sleep(){
        this.vision = 10;
        console.log('sleep');
    }
}
