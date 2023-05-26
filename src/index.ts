let age: number = 20;
if (age < 50) age += 10;
console.log(age);

let sales: number = 12345;
let course = "Course";
// ARRAYS
let numbers: number[] = [1.2, 2, 3, 4, 5];
let letters: string[] = ["a", "b", "c"];
let statements: boolean[] = [true, false, false];

// ENUMS
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// functino

function calculateTax(income: number, taxYear = 2022): number {
  if ((taxYear || 2022) < 50_000) return income * 1.2;
  return income * 1.3;
}

console.log(calculateTax(60_000, 2023));

// TYPE ALIASES
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Wesley",
  retire: (date: Date) => {
    console.log(date);
  },
};

// UNION TYPES

function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("10kg");

// INTERSECTION TYPE
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// LITERAL TYPES
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// NULLABLE types
function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hola!");
}

greet(undefined);

// OPTIONAL CHAINING
type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id == 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// optional property access operator
console.log(customer?.birthday?.getFullYear());

let log: any = null;
log?.("a");

let speed: any | null = null;
let ride = {
  // Falsy (undefined,null, '', false,0)
  // NuLLish coalesing operator
  speed: speed ?? 30,
};

console.log((ride.speed = 2));

// TYPE ASSERTIONS
// let phone = <HTMLInputElement>document.getElementById("phone");

// phone.value;

// The unkown type
// function render(document: unknown) {
//   if (document instanceof WordDocument) {
//     // document.toUppercase();
//   }
// //   document.move();
// //   document.fly();
// }

// function reject(message: string): never {
//   throw new Error(message);
// }

// function processEvents(): never {
//   while (true) {
//     //
//   }
// }

// processEvents();
// console.log("Hello World");

type User = {
  name: "string";
  age: number;
  occupation?: string;
};

type Bird = {
  fly: () => void;
};

type Fish = {
  swim: () => void;
};

type DaysOfTheWeek = {
  1: "Monday";
  2: "Tuesday";
  3: "Wednesday";
  4: "Thursday";
  5: "Friday";
  6: "Saturday";
};

type DayOfWeek = "Monday" | "Tuesday";
const wesley: DayOfWeek = "Monday";
console.log();
const selectedDay: DayOfWeek = "Monday";

// let user = getUser();
// console.log(user?.address?.street ?? undefined);
// let x = foo ?? bar();

// let value: string = "a";
// console.log(value.toUpperCase());

// OOP
class Account {
  // readonly id: number;
  // nickname?: string;
  // id: number;
  // owner: string;
  // balance: number;
  // private _balance: number;

  // parameter properties
  constructor(
    public readonly id: number,
    public owner: string,
    public _balance: number
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) throw new Error("Invalid amount");
    this._balance += amount;
  }

  // getter
  get balance(): number {
    return this._balance;
  }
  // setter
  // set balance(value: number) {
  //   if (value < 0) throw new Error("Invalid value");
  //   this._balance = value;
  // }
}

let account = new Account(1, "Mosh", 0);
console.log(account.deposit(100));
console.log(account instanceof Account);
// console.log(account.balance());

// Index signatures

class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Wesley";

console.log(typeof seats);

// static types
class Ride {
  private static _activeRides: number = 0;

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

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride1.start();

// console.log(Ride.activeRides);

class Person {
  constructor(public firstName: string, public lastName: string) {}
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
  // protected methods
  protected walk() {
    console.log("Walking");
  }
}

// inheritance
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("taking test");
  }
}

const Wesley = new Student(1, "Wesley", "Waka");
console.log(Wesley);

// override
class Teacher extends Person {
  override get fullName() {
    return "Professor" + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal" + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);

printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Mary", "Smith"),
]);

// polymorphism
function printNames(people: Person[]) {
  for (let person of people) {
    console.log(person.fullName);
  }
}

// ABSTRACT
abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Circle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log("Rendering a circle");
  }
}

// INTERFACES
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}

  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  removeEvent(): void {
    throw new Error("Method not implemented");
  }
}

class Logger {
  constructor(public fileName: string) {}

  name(): string {
    return this.fileName;
  }
}

let bookName = "Tumbo Lisiloshiba";
const logger = new Logger(bookName);
console.log(logger.name);

class Perso {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Employe extends Person {
  constructor(firstName: string, lastName: string, public salary: number) {
    super(firstName, lastName);
  }
}

interface address {
  street: string;
  city: string;
  zip: string;
}

interface employee {
  name: string;
  salary: number;
  address: address;
}

// GENERICS CLASSES
class KeyValuePair<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePair("1", "a");
// pair.value.

//GENERIC CLASSES
class ArrayUtils {
  static wrapInArray<T>(value: T) {
    return [value];
  }
}

let numbe = ArrayUtils.wrapInArray(1);

// GENERIC INTERFACES
interface Result<T> {
  data: T | null;
  error: string | null;
}

function fetch<T>(url: string): Result<T> {
  return { data: null, error: null };
}

interface Use {
  username: string;
}

interface Product {
  title: string;
}

let result = fetch<Product>("url");
result.data?.title;

// GENERIC CONSTRAINTS

function echo<T extends number | string>(value: T): T {
  return value;
}

echo(1);

function sing<T extends { name: string }>(value: T): T {
  return value;
}

sing({ name: "a" });

interface People {
  name: string;
}

function sit<T extends People>(value: T): T {
  return value;
}

// echo({})

class Mtu {
  constructor(public name: string) {}
}

class Mnunuaji extends Mtu {}

function nduru<T extends Mtu>(value: T): T {
  return value;
}

nduru(new Mnunuaji("c"));

// Extending Generic class
interface Product {
  name: string;
  price: number;
}

class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}

let store = new Store<Product>();
// store._objects;

// generic
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

let stor = new CompressibleStore<Product>();
stor.compress();

// RESTRICT generic type params
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

// FIX generic type parameter
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return [];
  }
}

// keyof operator
interface Bidhaa {
  name: string;
  price: number;
}

class Jumia<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}

let jumia = new Jumia<Bidhaa>();
jumia.add({ name: "a", price: 1 });
jumia.find("name", "a");
jumia.find("price", "1");

// TYPE MAPPING
interface Vitu {
  name: string;
  price: number;
}

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};

let vitu: ReadOnly<Vitu> = {
  name: "a",
  price: 1,
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};
// vitu.name = "b";
