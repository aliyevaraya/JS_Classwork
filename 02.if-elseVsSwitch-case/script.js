let hour = 12;
let isWeekend = false;

if (hour < 10 || hour > 18 || isWeekend) {
    console.log('The office is closed!');
} else {

    console.log("The office is open!");
}

let age = 16
if (age >= 16 && age <= 35) {
    console.log('you are allowed');
} else {
    console.log('you are not allowed!');
}


if (7 < 4) {
    console.log('I am in if');
} else if (4 > 22) {
    console.log('I am in else if');
} else {
    console.log('I am in else');
}

let num = 4

switch (num) {
    case 1:
        console.log('first case');
        break;
    case 4:
        console.log('second case');
    case 4:
        console.log('it found');
    default:
        console.log('not found');
}

