function calcularSaldoRank(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    const saldoVitorias = vitorias - derrotas;
  
    // Determinar o nível do Jogador 
    let nivel;
    if (saldoVitorias < 10) {
      nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
      nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
      nivel = "Prata";
    } else if (saldoVitorias <= 80) {
      nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
      nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
    
    console.log(`O herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}`);
  }
  
  calcularSaldoRank(100,50 );
  
