class jogador {
  constructor(nome, posicao, numGol) {
    this.nome = nome;
    this.posicao = posicao;
    this.numGol = numGol;
  }

  golsMarcados() {
    console.log(`o ${this.nome} já marcou ${this.numGol} gols em sua carreira`);
  }
}

const Neymar = new jogador("Neymar", "Atacante", 400);
Neymar.golsMarcados()

const pele = new jogador("pele", "Atacante", 1000);
pele.golsMarcados()