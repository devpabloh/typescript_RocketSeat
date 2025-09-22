class ContaBancaria{
  valor: number;
  private saldo: number;

  constructor(valor: number, saldo: number){
    this.valor = valor;
    this.saldo = saldo
  }

  depositar(valor: number){
    this.saldo += valor;
  }

  sacar(valor: number){
    if(valor > this.saldo) return false

    this.saldo -= valor;
    return true
    
  }

  getSaldo():number{
    return this.saldo
  }
}

const contaBancaria = new ContaBancaria(0,0);

contaBancaria.depositar(100);
console.log(contaBancaria.getSaldo());
contaBancaria.sacar(100);

class ContaPoupanca extends ContaBancaria{
    taxaDeRendimento: number;

    constructor(valor: number, saldo: number, taxaDeRemdimento: number ){
        super(valor, saldo)
        this.taxaDeRendimento = taxaDeRemdimento;
    }

    aplicarRendimento():void{
        this.depositar(this.getSaldo() * this.taxaDeRendimento)
    }
}

const poupanca = new ContaPoupanca(0,0,10)

poupanca.depositar(100)
console.log(`Saldo da conta após depositar o valor ${poupanca.getSaldo()}`)
poupanca.aplicarRendimento()
console.log(`Saldo da conta após redimento na conta poupança ${poupanca.getSaldo()}`)

