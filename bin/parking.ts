import {
    Vehicle
} from './abstract/vehicle'


import {
    Ticket as ITicket,
    Vehicle as IVehicle
} from './types/interface';
import {
    Colour as EColour
} from './types/enum';

import {
    Ticket
} from './ticket';

export class Parking {
    private store: Array<Vehicle> = [];
    private static instance: Parking;
    private mxSize: number = 0;

    constructor(sz: number = 0) {
        this.mxSize = sz;
        console.log(`Created a parking lot with ${this.mxSize} slots`);
    }

    getStoreSize() {
        return this.store.length;
    }

    getMaxSize() {
        return this.mxSize;
    }

    isEmpty() {
        return this.getStoreSize() == 0;
    }

    isFilled() {
        return this.getStoreSize() == this.getMaxSize();
    }

    static getInstance(sz: number): any {
        if (!Parking.instance) {
            Parking.instance = new Parking(sz);
        }
        return Parking.instance;
    }

    add(vehicle: Vehicle): ITicket {
        let availableSlotNo = this.getAvailableParkingSlotNo();
        if (availableSlotNo == -1) {
            return null;
        }
        vehicle.setSlotNo(availableSlotNo);
        this.store.push(vehicle);
        return new Ticket(vehicle);
    }


    getAvailableParkingSlotNo(): number {
        let freeSlotNo = 0;
        if (this.isFilled()) {
            return -1;
        }
        this.store = this.store.sort((first: Vehicle, second: Vehicle) => {
            if (first.slotNo < second.slotNo) {
                return -1;
            } else if (first.slotNo > second.slotNo) {
                return 1;
            } else {
                return 0;
            }
        });

        this.store.forEach((item: Vehicle, index: number) => {
            if (item.slotNo ==  freeSlotNo)
                freeSlotNo ++;
        });

        return freeSlotNo;
    }

    remove(slotNo: number): Boolean {
        let currentSize = this.store.length;
        this.store = this.store.filter((vehicle: Vehicle) => {
            return vehicle.slotNo != slotNo;
        })
        return currentSize != this.store.length;
    }


    status(): void {
        if (!this.store.length) return;
        console.log(`Slot No. Registration No Colour`);
        this.print(this.store);
    }

    print(store: Array<Vehicle>): void {
        store.forEach((vehicle:Vehicle) => {
            vehicle.toString();
        });
    }

    registrationNumbersForCarsWithColour(colour: EColour): Array<string> {
        let vehicles: Array<Vehicle> = this.store.filter((vehicle: Vehicle)=> {
            return vehicle.colour == colour;
        })
        let registrationNumbers: Array<string> = vehicles.map((vehicle:Vehicle) =>{
            return vehicle.registrationNo;
        });
        return registrationNumbers;
    }

    slotNumberForRegistrationNumber(registraionNo: string): Array<number> {
        let vehicles: Array<Vehicle> = this.store.filter((vehicle: Vehicle)=> {
            return vehicle.registrationNo == registraionNo;
        })
        let slots: Array<number> = vehicles.map((vehicle:Vehicle)=>{
            return vehicle.slotNo + 1;
        });
        return slots;
    }

    slotNumbersForCarsWithColour(colour: EColour): Array<number> {
        let vehicles: Array<Vehicle> = this.store.filter((vehicle: Vehicle)=> {
            return vehicle.colour == colour;
        })
        let slotNumbers: Array<number> = vehicles.map((vehicle:Vehicle) => {
            return vehicle.slotNo + 1;
        });
        return slotNumbers;
    }
}