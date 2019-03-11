import { 
    Ticket as ITicket 
} from './types/interface';

import { 
    Colour as EColour
} from './types/enum';
import { Vehicle } from 'abstract/vehicle';

export class Ticket implements ITicket {
    public dateTime: Date;
    public registrationNo: string;
    public colour: EColour;
    public slotNo:number;
    
    constructor (vehicle: Vehicle) {
        this.slotNo = vehicle.slotNo;
        this.registrationNo = vehicle.registrationNo;
        this.colour = vehicle.colour;
        this.dateTime = new Date();
    }
    toString(): void {
        console.log('Registration No ', this.registrationNo);
        console.log('Colour ', this.colour);
        console.log('slotNo ', this.slotNo);
        console.log('dateTime ', this.dateTime);
    }
}