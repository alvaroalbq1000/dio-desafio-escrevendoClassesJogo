// Programa em JavaScript (.js) para resolver o desafio Escrevendo as Classes de Um Jogo

// Criando a Classe "Hero"
class Hero {
    // Criando o método construtor
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        // IFs encadeados para definir o valor atribuído à propriedade "ataque"
        if(tipo === "mago"){
            this.ataque = "magia"
        }else if(tipo === "guerreiro"){
            this.ataque = "espada"
        }else if(tipo === "monge"){
            this.ataque = "artes marciais"
        }else if(tipo === "ninja"){
            this.ataque = "shuriken"
        }else{
            this.ataque = "pauzinho"
        }
    }
    // Criando o método "atacar", que retorna a frase do ataque
    atacar(){
        return `O ${this.tipo} atacou usando ${this.ataque}`
    }
}

// Criando o objeto "heroi" (instância da classe "Hero")
let heroi = new Hero("Alvaro_G10",25,"ninja")
// Imprimindo o ataque do herói
console.log(heroi.atacar())