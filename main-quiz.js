import readlineSync from "readline-sync";
import SystemOfMenssage from "./funcoes/funcaos.js"; //Importa a saida da função

//Função principal
const mainMenu = () => {
  console.log(`----- Quiz JavaScript -----`);
  console.log(`Seja Bem-vindo jogador(a)!`);
  let name = readlineSync.question(`Digite seu nome: `);
  SystemOfMenssage(name); // Consome o "name" para a sainda na função
};

mainMenu();
