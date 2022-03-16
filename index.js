// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (driversArray) {
    return [driversArray[0], driversArray[1]]
}


const returnLastTwoDrivers = function (driversArray) {
    return [driversArray[driversArray.length-2], driversArray[driversArray.length-1]];
}

console.log(returnLastTwoDrivers(drivers));

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// console.log(selectingDrivers);

// const fareDoubler = () => num * num 

const createFareMultiplier = function (num) {
    return function(fare) {
        return fare * num 
    }
}

// let x = createFareMultiplier(6)
// console.log(x)
// console.log(x(20));

const fareDoubler = (fare) => {
    return createFareMultiplier(2)(fare)
}

console.log(fareDoubler(10));

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

console.log(fareTripler(12));


const selectDifferentDrivers = (arrayOfDrivers, fun) => {
    // arrayofDrivers -> drivers
    // fun -> returnFirstTwoDrivers
    return fun(arrayOfDrivers)
}

// console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));

