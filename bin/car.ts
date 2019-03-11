import {
    Vehicle
} from './abstract/vehicle'

import {
    Vehicle as EVehicle,
    Colour as EColour
} from './types/enum';

export class Car extends Vehicle {
    // public type: Vehicle = Vehicle.Car;
    constructor(public registrationNo: string, public colour: EColour, public slotNo: number = -1) {
        super(registrationNo, colour, slotNo);
        this.setType(EVehicle.Car);
    }
    setType(type: EVehicle): void {
        this.type = type;
    }
}