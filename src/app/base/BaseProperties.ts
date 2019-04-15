export module BaseProperties {

    const health:number = 10;
    const energy:number = 10;
    const vision:number = 3;
    const step:number = 1;

    export function health() {
        return health;
    }

    export function energy() {
        return energy;
    }

    export function vision() {
        return vision;
    }

    export function step() {
        return step;
    }
}
