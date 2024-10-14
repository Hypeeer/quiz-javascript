import readlineSync from "readline-sync";
import SystemOfMenssage from "./funcoes/funcaos.js";

//Função principal
const mainMenu = () => {
  console.log(`----- Quiz JavaScript -----`);
  console.log(`Seja Bem-vindo jogador(a)!`);
  let name = readlineSync.question(`Digite seu nome: `);
  SystemOfMenssage(name);
};

mainMenu();
