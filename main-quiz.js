import readlineSync from 'readline-sync';
import SystemOfMenssage from './interface/funcaos.js'; //Importa a saida da função

//Função principal
const mainMenu = () => {
  let userName = '';
  console.log(`----- Menu Quizzes -----`);
  console.log(`1 - Quiz JavaScript`);
  console.log(`2 - Quiz NodeJS`);
  const userChoice = readlineSync.question(`Digite seu escolha: `);
  switch (userChoice) {
    case '1':
      console.log(`\n----- Quiz JavaScript -----`);
      console.log(`Seja Bem-vindo jogador(a)!`);
      userName = readlineSync.question(`Digite seu nome: `);
      SystemOfMenssage(userName, userChoice); // Consome o "userName" para a sainda na função
      break;
    case '2':
      console.log(`\n----- Quiz NodeJS -----`);
      console.log(`Seja Bem-vindo jogador(a)!`);
      userName = readlineSync.question(`Digite seu nome: `);
      SystemOfMenssage(userName, userChoice); // Consome o "userName" para a sainda na função
    default:
      break;
  }
};

mainMenu();
