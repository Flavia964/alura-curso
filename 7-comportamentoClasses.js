class cliente {
    nome;
    cpf;
}

class contaCorrente {
    agencia;
    saldo;

   sacar (valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
        
    }

    depositar (valor) {
        if(valor <= 0) {
            return;
        }
        this.saldo += valor;
    }

}

const cliente1 = new cliente ();
const cliente2 = new cliente ();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233309;

cliente2.nome = 'Alice';
cliente2.cpf = 88822211109

const contaCorrenteRicardo = new contaCorrente ();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;

contaCorrenteRicardo.depositar(300);
const valorSacado = contaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(contaCorrenteRicardo);