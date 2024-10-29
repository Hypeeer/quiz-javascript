import { questionJavaScript, questionNodeJS } from '../database/datas.js'; //faz o import do arquivo datas.js
import readlineSync from 'readline-sync';

//Função para gera aleatoriamente perguntas
// Recebe como o paramentro o retorn da userChoiceVerification
const randomQuestions = (quizChoice) => {
  // Verifica se o array está definido e não está vazio
  if (!quizChoice || quizChoice.length === 0) {
    console.error(`Erro: Nenhuma pergunta disponível.`);
    return []; // Retorna um array vazio se arr estiver indefinido ou vazio
  }
  const newArr = quizChoice.sort(() => Math.random() - 0.5).slice(0, 10); //(callBack) => Embaralha o array
  return newArr.map((item, index) => ({
    ...item, //spread operator ("espalha ou copia os elementos para outros array ou objetos")
    id: index + 1, // propriedade do novo objeto
  }));
};
//Função para verificar e alternar entre quizzes
const userChoiceVerification = (userChoice) => {
  if (userChoice === '1') {
    return randomQuestions(questionJavaScript);
  } else if (userChoice === '2') {
    return randomQuestions(questionNodeJS);
  }
};
//Função para exiber 10 perguntas formatadas e contabilizar os pontos
const SystemOfVerificationAndCounter = (userChoice) => {
  const tenQuestions = userChoiceVerification(userChoice); // consome a entrada do usuario e retorna o quiz selecionado
  let counter = 0;
  tenQuestions.forEach((item) => {
    console.log(`\n${item.id} - ${item.question}`);
    let userResponse = readlineSync.question(`Digite a resposta: `);
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
// Recebe como paramentros a entreda do usuario na "main"
const SystemOfMenssage = (userName, userChoice) => {
  const score = SystemOfVerificationAndCounter(userChoice); // Consome a entrada do usuario
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
  console.log(`Jogado(a): ${userName}`);
  console.log(`Pontuação final: ${score}\n`);
  console.log(`${msg}`);
};

export default SystemOfMenssage; // Exporta a saida da função para a raiz do projeto
