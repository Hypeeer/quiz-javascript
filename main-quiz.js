import readlineSync from 'readline-sync';
import questionsAnswers from './Datas/datas.js'; //faz o import do arquivo datas.js

let userResponse;
let name = '';
//Função principal
const mainMenu = () => {
  console.log(`----- Quiz JavaScript -----`);
  console.log(`Seja Bem-vindo jogador(a)!`);
  name = readlineSync.question(`Digite seu nome: `);
  SystemOfMenssage();
};
//Função para gera aleatoriamente perguntas
const randomQuestions = (arr) => {
  const newArr = arr.sort(() => Math.random() - 0.5); //callBack
  return newArr.map((item, index) => ({
    ...item, //spread operator ("espalha ou copia os elementos para outros array ou objetos")
    id: index + 1, // propriedade do novo objeto
  }));
};
//Função para seleciona apenas 10 peguntas aleatorias
const selectTen = () => {
  return randomQuestions(questionsAnswers).slice(0, 10);
};
//Função para exiber 10 perguntas formatadas e contabilizar os pontos
const SystemOfVerificationAndCounter = () => {
  const tenQuestions = selectTen();
  let counter = 0;
  tenQuestions.forEach((item) => {
    console.log(`\n${item.id} - ${item.question}`);
    userResponse = readlineSync.question(`Digite a resposta: `);
    if (userResponse === item.answers) {
      console.log('Resposta Correta!\n');
      counter++;
    } else {
      console.log('Resposta Errada!\n');
    }
  });
  return counter;
};
//Função de exibir mensagem final e a pontuação do jogador ao terminar o quiz
const SystemOfMenssage = () => {
  const score = SystemOfVerificationAndCounter();
  let msg = '';
  if (score <= 3) {
    msg += `OH NÃO! tente mais uma vez.`;
  } else if (score <= 6) {
    msg += `BOM TRABALHO! pratique um pouco mais.`;
  } else if (score <= 9) {
    msg += `MUITO BOM! Você acertou a maioria.`;
  } else if (score == 10) {
    msg += `EXCELENTE! você e um verdadeiro expert.`;
  }
  console.log(`Jogado(a): ${name}`);
  console.log(`Pontuação final: ${score}\n`);
  console.log(`${msg}`);
};

mainMenu();
