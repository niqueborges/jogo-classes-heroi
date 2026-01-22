// Classe genérica de herói
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  // Método atacar
  atacar() {
    let ataque = "";

    // Estrutura de decisão para definir o ataque
    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}

// Lista de heróis
let herois = [
  new Heroi("Merlin", 150, "mago"),
  new Heroi("Arthur", 35, "guerreiro"),
  new Heroi("Lee", 28, "monge"),
  new Heroi("Hanzo", 30, "ninja")
];

// Laço de repetição
for (let i = 0; i < herois.length; i++) {
  herois[i].atacar();
}
