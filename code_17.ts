import chalk, { Chalk } from "chalk";

let songfrommovie: string = "Yeh Vaada Raha";

let songinmessage: string =
  "\n Tu Tu Hai Vohi typescript Ne Jisse Apna array Kaha\n Typescript Hai Jahan Array Vahan\n Ab To Yeh complier Tere Bin Hai result kahan\n O Join Ho Jaaye Is Tarah, Do slice ho Jis Tarah \n O Join Ho Jaaye Is Tarah, Do slice ho Jis Tarah \n Phir splice sai Na ho Judaa, Haan Yeh index Raha.";

let songinmessage2: string =
  "\n Main Push Hoon To Tu Hai Pop Mera \n Main Push Hoon To Tu Hai Pop Mera\n shift Se Niraala unshift Mera \n Join Ho Jaaye Is Tarah, Do slice ho Jis Tarah \n Join Ho Jaaye Is Tarah, Do slice ho Jis Tarah\n Phir splice sai Na ho Judaa, Haan Yeh index Raha";

console.log(chalk.red.bold(songfrommovie));
console.log(chalk.green(songinmessage));
console.log(chalk.blue(songinmessage2));
