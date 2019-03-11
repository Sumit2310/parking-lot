import { Colour } from '../enum/colour';

export interface Vehicle {
    registratoinNo: string,
    colour: Colour,
    slotNo: number,
    dateTime: Date
}