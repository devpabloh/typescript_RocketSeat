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
/* Tipagem em arrays */
// Tipagem explicita ou notação de tipo
let names = ["Pablo", "Henrique"];
let numbers = [1, 2, 3, 4, 5, 6, 7];
// inferência de tipo 
let produtos = ["teclado", "mouse", "monitor",];
/* Tipagem de funções */
function sum(x, y) {
    const result = x + y;
    console.log(` Resultado é = ${result}`);
    return result;
}
/* function signIn(email: string, password: string){
  // lógica de conectar o usuário na aplicação.
}

signIn("Pablo@gmail.com", "123") */
function signIn({ email, password }) {
    // Lógica de conectar o usuário a aplicação.
}
signIn({ email: "pablohenriqueadm94@gmail.com", password: "123456" });
// Arrow function 
const showMessage = (name) => {
    const message = `Olá ${name}`;
    return message;
};
/* Tipagem de objetos */
// Observação: Quando passamos uma interrogação antes dos : quer dizer que aquele parametro é opcional
let users = { name: "Rodrigo", age: 17 };
/* diferença entre undefined e null */
//undefined
let value;
/* Union Types */
let response;
response = "Pablo";
response = null;
function newProduct(Product) {
}
newProduct({ id: 1, name: "Produto X" });
let teacher = { id: 1, name: "Rodrigo", subjects: ["Javascript", "Typescript"] };
let student = { id: 2, name: "Pablo", age: 23 };
