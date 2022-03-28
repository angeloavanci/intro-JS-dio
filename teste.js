//Introdução ao JS - Curso da DIO

//Comentário de linha única

/*Comentário de várias linhas,
como a maioria das linguagens*/

var variavel = 0; //declaração de uma váriavel global usando var, hoje se usa let, visto abaixo
let variavel = 0; //a variável declarada com let, fica restrita ao escopo onde ela foi declarada, por exemplo, se uma variável é declarada com VAR dentro de uma função, a mesma pode ser acessada de qualquer lugar do código. Quando uma váriavel é declarada com LET, ela só existe e fica acessável dentro da função*/
const constante = 0; //declaração de constante, valor que não pode ser alterado, apenas lido

function qualquer(parametro){
     //pode receber ou não variaveis externas
     //usar return para retornar um resultado dessa função
     return 0;
} //forma de declarar uma função

qualquer(0); //chamada da função

console.log("Hello World!"); //escreve Hello World! na tela

//usamos 'node + nome do arquivo' para executar o arquivo no terminal do VS Code