import { Programmer } from "./programmer";

const programmerFactory = new Programmer();
const ada = programmerFactory.getProgrammer(1, "Ada", "Programadora");
const jean = programmerFactory.getProgrammer(2, "Jean Ichbiah", "Programador foda");

console.log(ada);
console.log(jean);

