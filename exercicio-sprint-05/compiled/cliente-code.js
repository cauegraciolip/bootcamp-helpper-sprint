"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ProgrammerFactory_1 = require("./ProgrammerFactory");
const programmerFactory = new ProgrammerFactory_1.ProgrammerFactory();
const ada = programmerFactory.getPerson(1, "ada", "programadora");
console.log(ada);
