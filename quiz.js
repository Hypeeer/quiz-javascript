import readlineSync from 'readline-sync';
//Coleções de perguntas sobre JS
const questionsAnswers = [
  { id: 1, question: 'Em que ano o JavaScript foi criado? (a) 1995 (b) 1990 (c) 2005', answers: 'a' },
  { id: 2, question: 'Qual empresa desenvolveu o JavaScript? (a) Microsoft (b) Netscape (c) Google', answers: 'b' },
  { id: 3, question: 'Qual o nome original do JavaScript? (a) Mocha (b) Java (c) LiveScript', answers: 'a' },
  { id: 4, question: 'Qual operador é usado para atribuir um valor a uma variável? (a) == (b) === (c) =', answers: 'c' },
  { id: 5, question: 'Como se cria uma função em JavaScript? (a) function (b) func (c) lambda', answers: 'a' },
  { id: 6, question: 'Qual é o resultado de "2" + 2 em JavaScript? (a) 4 (b) 22 (c) NaN', answers: 'b' },
  { id: 7, question: 'Qual o método utilizado para adicionar um elemento ao final de um array? (a) pop (b) push (c) add', answers: 'b' },
  { id: 8, question: 'Como se declara uma variável que não pode ser reatribuída? (a) let (b) var (c) const', answers: 'c' },
  { id: 9, question: 'Qual o comando para imprimir algo no console? (a) print (b) echo (c) console.log', answers: 'c' },
  { id: 10, question: 'Como você converte uma string em um número em JavaScript? (a) toString (b) parseInt (c) number', answers: 'b' },
  { id: 11, question: 'Qual é o escopo de uma variável declarada com var? (a) Bloco (b) Global ou função (c) Local', answers: 'b' },
  { id: 12, question: 'Qual é o resultado de typeof null em JavaScript? (a) null (b) undefined (c) object', answers: 'c' },
  { id: 13, question: 'Qual a palavra-chave utilizada para definir uma classe em JavaScript? (a) class (b) function (c) constructor', answers: 'a' },
  { id: 14, question: 'Qual método é usado para adicionar ou remover elementos do início de um array? (a) push/pop (b) unshift/shift (c) splice/slice', answers: 'b' },
  { id: 15, question: 'Como você acessa o terceiro elemento de um array chamado "arr"? (a) arr[1] (b) arr[3] (c) arr[2]', answers: 'c' },
  { id: 16, question: 'O que o método array.map() faz? (a) Filtra elementos (b) Mapeia elementos para um novo array (c) Reduz o array', answers: 'b' },
  { id: 17, question: 'Qual o operador lógico "E" em JavaScript? (a) || (b) && (c) ==', answers: 'b' },
  { id: 18, question: 'Como se chama a função que é executada imediatamente após sua criação? (a) IIFE (b) Closure (c) Callback', answers: 'a' },
  { id: 19, question: 'Qual o valor de retorno de uma função sem uma declaração explícita de return? (a) null (b) 0 (c) undefined', answers: 'c' },
  { id: 20, question: 'Qual a diferença entre == e === em JavaScript? (a) Compara valores e tipos (b) Compara valores (c) Compara referências', answers: 'a' },
  { id: 21, question: 'Como se chama o processo de chamar uma função dentro dela mesma? (a) Recursão (b) Iteração (c) Looping', answers: 'a' },
  { id: 22, question: 'Qual a função que executa uma ação após um tempo determinado? (a) setInterval (b) setTimeout (c) setDelay', answers: 'b' },
  { id: 23, question: 'Como se chama uma função dentro de um objeto? (a) Atributo (b) Método (c) Propriedade', answers: 'b' },
  { id: 24, question: 'Como você remove o último elemento de um array? (a) pop (b) shift (c) remove', answers: 'a' },
  { id: 25, question: 'Qual a diferença entre var, let e const? (a) Tipo de dado (b) Escopo e reatribuição (c) Performance', answers: 'b' },
  { id: 26, question: 'O que é o DOM no contexto do JavaScript? (a) Document Object Model (b) Data Object Model (c) Dynamic Object Model', answers: 'a' },
  { id: 27, question: 'Como você adiciona um evento de clique a um botão em JavaScript? (a) button.onClick() (b) button.addEventListener("click", ...) (c) button.addListener("click", ...)', answers: 'b' },
  { id: 28, question: 'O que é o NaN em JavaScript? (a) Not a Number (b) Not a Null (c) Not a Namespace', answers: 'a' },
  { id: 29, question: 'Qual a diferença entre null e undefined? (a) Ambos são iguais (b) null é atribuído, undefined é padrão (c) undefined é uma função', answers: 'b' },
  { id: 30, question: 'Como você mescla dois arrays em JavaScript? (a) merge (b) concat (c) join', answers: 'b' },
];
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
