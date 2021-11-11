import { ProgrammerFactory } from "./ProgrammerFactory";

const programmerFactory : ProgrammerFactory = new ProgrammerFactory();

const ada = programmerFactory.getPerson(1, "ada", "programadora")

console.log(ada);
