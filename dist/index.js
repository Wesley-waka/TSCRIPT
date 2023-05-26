"use strict";
var _a;
let age = 20;
if (age < 50)
    age += 10;
console.log(age);
let sales = 12345;
let course = "Course";
let numbers = [1.2, 2, 3, 4, 5];
let letters = ["a", "b", "c"];
let statements = [true, false, false];
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if ((taxYear || 2022) < 50000)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(60000, 2023));
let employee = {
    id: 1,
    name: "Wesley",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10kg");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greet(undefined);
function getCustomer(id) {
    return id == 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
console.log((ride.speed = 2));
const wesley = "Monday";
console.log();
const selectedDay = "Monday";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("Invalid amount");
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(1, "Mosh", 0);
console.log(account.deposit(100));
console.log(account instanceof Account);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Wesley";
console.log(typeof seats);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride1.start();
console.log(Ride.activeRides);
//# sourceMappingURL=index.js.map