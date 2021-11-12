"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const programmer_1 = require("./programmer");
const programmerFactory = new programmer_1.Programmer();
const ada = programmerFactory.getProgrammer(1, "Ada", "Programadora");
const jean = programmerFactory.getProgrammer(2, "Jean Ichbiah", "Programador foda");
console.log(ada);
console.log(jean);
