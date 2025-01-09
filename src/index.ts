// se quiser ativar o watch para compilar automaticamente quando houver alguma mudança, basta escrever no terminal npx tsc --watch

const mensagem: string = "Olá, mundo!"

// Consigo mudar?
//mensagem = "typescript"

// Consigo executar?
//mensagem()

const user = {
  name: "Pablo Henrique Ferreira de França",
  email: "pablohenriqueadm94@gmail.com"
}
console.log(user.name)

/* Tipos primitivos */

// String para texto
let userName: string

userName = "Pablo"

// number para números
let total: number

total = 0
total = 7.5

// boolean para boleanos (true or false)

/* Diferença entre inferência de tipos e tipagem explícita */

// Typagem explícita
let myFirstName: string

myFirstName = "Pablo"

// Inferência de tipos - é quando o próprio typescript deduz o tipo da variável no momento que você declara a mesma
let message = "Hello, how are you?" // Aqui o typescript atribuiu como string, se você tentar atribuir algum outro typo, vai dar erro

/* Typo any */
let mensagem1: any
// Com o tipo any a variável aceita qualquer valor.
mensagem1 = "Esse é um texto (string)"
mensagem1 = 45
mensagem1 = true

/* Tipagem em arrays */
// Tipagem explicita ou notação de tipo
let names: string[] = ["Pablo", "Henrique"] 
let numbers: number[] = [1,2,3,4,5,6,7]

// inferência de tipo 
let produtos = ["teclado", "mouse", "monitor",]

/* Tipagem de funções */
function sum(x: number, y: number): number{
  const result = x + y
  console.log(` Resultado é = ${result}`)
  return result
}

/* function signIn(email: string, password: string){
  // lógica de conectar o usuário na aplicação.
}

signIn("Pablo@gmail.com", "123") */

function signIn({email, password}: {email: string, password: string}){
  // Lógica de conectar o usuário a aplicação.
}

signIn({email: "pablohenriqueadm94@gmail.com", password: "123456"})

// Arrow function 
const showMessage = (name:string):string =>{
  const message = `Olá ${name}`
  return message
}

/* Tipagem de objetos */
// Observação: Quando passamos uma interrogação antes dos : quer dizer que aquele parametro é opcional
let users: {name: string, age: number, avatarUrl?: string} = {name: "Rodrigo", age: 17}

/* diferença entre undefined e null */

//undefined
let value: number

/* Union Types */
let response: string | null
response = "Pablo"
response = null

/* Conhecendo interface no typescript */
// uma boa prática é declarar uma interface sempre utilizando letra maiúscula na primeira letra da palavra, outra boa prática é utilizar o I antes do nome da interface para mostrar que é uma interface
interface Product {
  id: number,
  name: string
}

function newProduct(Product: Product){
  
}
newProduct({id:1, name: "Produto X"})

/* Como estender interfaces */
interface Teacher{
  id: number,
  name: string,
  subjects: string[]
}

interface Student{
  id: number,
  name: string,
  age: number,
}

let teacher: Teacher = {id: 1, name: "Rodrigo", subjects: ["Javascript", "Typescript"]}
let student: Student = {id: 2, name: "Pablo", age:23}