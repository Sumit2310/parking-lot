import { Colour } from '../enum/colour';

export interface Ticket {
    registrationNo: string,
    colour: Colour,
    slotNo: number,
    dateTime: Date,
    toString(): void
}