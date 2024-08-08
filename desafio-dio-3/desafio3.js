class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    // Definir o tipo de ataque com base no tipo do herói
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    // Exibe a mensagem de ataque
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Criando e usando instâncias da classe Heroi
const mago = new Heroi("Marcus Mann", 33, "mago");
const guerreiro = new Heroi("Theodore Gill", 30, "guerreiro");
const monge = new Heroi("Chase Underwood", 20, "monge");
const ninja = new Heroi("Bernard Bowen", 25, "ninja");

// Chamando o método atacar para cada herói
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
