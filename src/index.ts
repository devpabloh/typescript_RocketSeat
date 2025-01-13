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
interface Person{
  id: number,
  name: string,
}

interface Teacher extends Person{
  // id: number,
  // name: string,
  subjects: string[]
}

interface Student extends Person{
   // id: number,
  // name: string,  
  age: number,
}

let teacher: Teacher = {id: 1, name: "Rodrigo", subjects: ["Javascript", "Typescript"]}
let student: Student = {id: 2, name: "Pablo", age:23}

/*  Usando Type */
type Product1 = {
  id: number,
  name: string
}

function newProduct2(product: Product1){

}

newProduct2({id: 1, name: "Teclado"})

type SelectResponse = Product1[] | null

function selectProducts(): SelectResponse{
  return null
}

/*  Intersecção de tipos */
type Person1 = {
  id: number,
  name: string
}

type Teacher1 = Person1 & {
  subjects: string[]
}

type Student1 = Person1 &{
  age: number
}

let teacher1: Teacher1
 
/*  Interface x type */
// Você pode subscrever Interface, mas não pode fazer o mesmo com types

interface IBaseProduct {
  price: number
}

interface IProduct1 extends IBaseProduct {
  id: number,
  name: string
}

type TBaseProduct = {
  price: number
}

type TProduct = TBaseProduct & {
  id: number,
  name: string
}

let product3: IProduct1 = {id: 1, name:"produto 1", price: 300}
let product4: TProduct = {id: 2, name: "produto 2", price: 400}

 /* Asserção de tipos */
type UserResponse = {
  id: number;
  name: string;
  avatar: string;
}
let userResponse = {} as UserResponse;

 /* Restringir valores */
//pode ser realizado através de tipos literais.

type Size = "Small" | "Medium" | "Large"

let size: Size
size = "Medium"

/* Enums */
enum Profile{
  Admin = 1,
  Client = 2, 
  Seller = 3
}

let profile4: number = Profile.Admin

/* Generic */
/* 
  * S => state
  * T => type
  * K => Key
  * V => Value
  * E => element
*/

function useState<T extends number | string>(){
  let state: T;

  function get(){
    return state;
  }

  function set(newValue:T){
    state = newValue;
  }

  return {get, set};  
}

let newState = useState<number>()
newState.get()
newState.set(123)
newState.set("Pablo Henrique")

/* Utilitários */
// Partial
interface Usuario {
  id: number,
  name: string;
  email: string
}

let newUsuario2: Usuario = {
  id:1,
  name: "Pablo Henrique",
  email: "pablohenriqueadm94@gmail.com"
}

let updateUsuario2: Partial<Usuario> = { name: "Pablo Henrique Ferreira de França"} // o uso do partial faz com que a gente possa colocar apenas as propriedades que quisermos, sem o typescript ficar solicitando que seja colocada todas as propriedades.

interface IBook{
  title: string,
  pages: number,
  author: string
}

const book:Pick<IBook, "title" | "author"> = {title: "O Senhor dos Anéis", author:"Kid"} // podemos usar o pick na interface criada, passando entre as aspas qual das propriedades a gente quer pegar e passar naquela variavel, se quiser adicionar mais de uma propriedade podemos usar o | ou &&.

/* Omit */

interface Book{
  title: string
  pages: number
  author: string
  description: string
}

const book1: Omit<Book, "description" | "pages"> = {title: "O Senhor dos Anéis", author: "J.R.R. Tolkien"} // o omit faz o contrário do pick, ele pega todas as propriedades menos as que você passar. ou seja, ele omite as propriedades que você passar.

/* Record */
// Cria um objeto no qual todas as chaves são textos e os valores são números.
const scores: Record<string, number>={
  "Pablo": 10,
  "Henrique": 9,
  "Ferreira": 8
}

// Utilizando o Record para limitar valores
type Profile1 = "admin" | "user" | "guest"

const user1: Record<Profile1, number> = {
  "admin": 1,
  "user": 2,
  "guest": 3,
}

interface IUser {
  name: string,
  email: string
}

const users1: Record<number, IUser> = {
  1: { name: "Pablo", email: "pablohenriqueadm94@gmail.com"},
  2: {name: "Rodrigo", email: "rodrigo@gmail.com"}

}

/* Type of */
// Definindo uma typagem a partir de algo.
interface IProductA{
  id: number,
  name: string,
  quantify: number
}

const productA: IProductA = {id: 1, name: "Produto 1", quantify: 4} 
const productB: typeof productA = {id: 2, name: "produto 2", quantify: 2} // o typeof pega a tipagem do productA e passa para o productB.

/* keyof */
// O operador keyof cria um tipo que representa todas as chaves de um objeto.
const icons = {
  "nome": "./path/home.svg",
  "add": "./path/add.svg",
  "remove": "./path/remove.svg"
}

type Icon = keyof typeof icons; // Icon será "nome" | "add" | "remove"

const icon: Icon = "add"; // válido
// const invalidIcon: Icon = "edit"; // inválido, pois "edit" não é uma chave em icons






