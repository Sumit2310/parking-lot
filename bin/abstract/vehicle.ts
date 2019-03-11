import {
    Vehicle as EVehicle,
    Colour as EColour
} from '../types/enum';


export class Vehicle {

    public slotNo: number;
    public type: EVehicle;
    public registrationNo: string;
    public colour: EColour;

    constructor(regNo: string, clr: EColour, sn: number) {
        this.registrationNo  = regNo;
        this.colour = clr;
        this.slotNo = sn || -1;
    }

    setSlotNo(sn: number): void {
        this.slotNo = sn;
    }
    
    setType(type: EVehicle): any {
        throw Error('Set Vehicle Type!');
    }

    toString(): void {
        console.log(this.slotNo, this.registrationNo, this.colour);
    }
}