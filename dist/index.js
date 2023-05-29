"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log("Inserting the component in the DOm");
        };
    };
}
function Pipe(constructor) {
    console.log("Pipe decorator called");
    constructor.prototype.pipe = true;
}
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("Before");
        original.call(this, ...args);
        console.log("After");
    };
}
class Pers {
    say(message) {
        console.log("Person says" + message);
    }
}
__decorate([
    Log
], Pers.prototype, "say", null);
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Per {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Per.prototype, "fullName", null);
let person = new Per("Wesley", "Waka");
console.log(person.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be atleat ${length} long`);
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class websiteUser {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], websiteUser.prototype, "password", void 0);
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({
        methodName,
        parameterIndex,
    });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParameters);
function log(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Executing method ${propertyKey} with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        return result;
    };
    return descriptor;
}
class Example {
    greet(name) {
        console.log(`Hello, ${name}!`);
    }
}
__decorate([
    log
], Example.prototype, "greet", null);
const example = new Example();
example.greet("Alice");
function uppercase(target, propertyName) {
    let value;
    const getter = function () {
        return value;
    };
    const setter = function (newValue) {
        value = newValue.toUpperCase();
    };
    Object.defineProperty(target, propertyName, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
class Kitu {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    uppercase
], Kitu.prototype, "name", void 0);
const kitu = new Kitu("Jane");
console.log(kitu.name);
//# sourceMappingURL=index.js.map