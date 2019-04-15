interface ICreature {

    health : number;
    energy : number;
    vision : number;
    step : number;

    set_base_properties();
    set_health(value);
    set_energy(value);
    set_vision(value);
    set_step(value);

    move();
    eat();
    watch();
    sleep();

    // private health : number;
    // private energy : number;
    // private step_length : number;
    // private vision : number;
}
