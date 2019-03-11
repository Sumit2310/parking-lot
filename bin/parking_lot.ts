import {
    readFileSync
} from 'fs';

import {
    Parking
} from './parking';


import {
    Colour
} from './types/enum';
import { Car } from './car';
import { Ticket } from 'ticket';



let result:Buffer = readFileSync('/home/dharm/workspace/go-jek/parking_lot/bin/input.txt');
let fileInput: string = result.toString();
let fileLines: Array<string> = fileInput.split('\n');


const MAX_PARKING_SIZE: number = +fileLines[0].replace("create_parking_lot", "").trim()

let parking: Parking = Parking.getInstance(MAX_PARKING_SIZE);


fileLines.forEach((line: string, index: number) => {
    if (index == 0) return;
    if (line.includes("park")) {
        let [registrationNo, clr]:any = line.replace("park", "").trim().split(" ");
        let colour:string = clr;
        let ticket:Ticket = parking.add(new Car(registrationNo, Colour[colour]));
        if (ticket){
            console.log(`Allocated slot number: ${ticket.slotNo +1}`);
        } else {
            console.log('Sorry, parking lot is full');
        }
    } else if (line === "status") {
        parking.status();
    } else if (line.includes("leave")) {
        let slotNo:number = +line.replace("leave", "").trim();
        let isRemoved: Boolean = parking.remove(slotNo);
        if (isRemoved) {
            console.log(`Slot number ${slotNo} is free`);
        }
    } else if (line.includes("registration_numbers_for_cars_with_colour")) {
        let clr:string = line.replace("registration_numbers_for_cars_with_colour", "").trim()
        let registrationNumbers:Array<string> = parking.registrationNumbersForCarsWithColour(Colour[clr]);
        if (registrationNumbers.length){
            console.log(registrationNumbers.join(', '));
        } else {
            console.log('Not found');
        }
    } else if (line.includes("slot_number_for_registration_number")) {
        let registrationNo:string = line.replace("slot_number_for_registration_number", "").trim()
        parking.slotNumberForRegistrationNumber(registrationNo);
        let slots:Array<number> = parking.slotNumberForRegistrationNumber(registrationNo);
        if (slots.length){
            console.log(slots.join(', '));
        } else {
            console.log('Not found');
        }
    } else if (line.includes("slot_numbers_for_cars_with_colour")) {
        let clr:string = line.replace("slot_numbers_for_cars_with_colour", "").trim()
        let slots:Array<number> = parking.slotNumbersForCarsWithColour(Colour[clr]);
        if (slots.length){
            console.log(slots.join(', '));
        } else {
            console.log('Not found');
        }
    }
});


// var readline = require('readline');
// var rl = readline.createInterface(process.stdin, process.stdout);
// rl.setPrompt('guess> ');
// rl.prompt();
// rl.on('line', function(line) {
//     console.log(line);
//     rl.setPrompt('guess> ');
//     rl.prompt();
//     if (line === "right") rl.close();
// }).on('close',function(){
//     process.exit(0);
// });