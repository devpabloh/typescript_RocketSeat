"use strict";
// se quiser ativar o watch para compilar automaticamente quando houver alguma mudança, basta escrever no terminal npx tsc --watch
const mensagem = "Olá, mundo!";
// Consigo mudar?
//mensagem = "typescript"
// Consigo executar?
//mensagem()
const user = {
    name: "Pablo Henrique Ferreira de França",
    email: "pablohenriqueadm94@gmail.com"
};
console.log(user.name);
/* Tipos primitivos */
// String para texto
let userName;
userName = "Pablo";
// number para números
let total;
total = 0;
total = 7.5;
// boolean para boleanos (true or false)
/* Diferença entre inferência de tipos e tipagem explícita */
// Typagem explícita
let myFirstName;
myFirstName = "Pablo";
// Inferência de tipos - é quando o próprio typescript deduz o tipo da variável no momento que você declara a mesma
let message = "Hello, how are you?"; // Aqui o typescript atribuiu como string, se você tentar atribuir algum outro typo, vai dar erro
/* Typo any */
let mensagem1;
// Com o tipo any a variável aceita qualquer valor.
mensagem1 = "Esse é um texto (string)";
mensagem1 = 45;
mensagem1 = true;
