function calcularComissao(preco) {
  return Math.floor(preco / 2) * 0.5;
}

function criarNotificacao(texto, userId = null) {
  DB.notificacoes.push({
    id: Date.now(),
    texto,
    userId,
    data: new Date().toLocaleString()
  });
  salvarDB();
}
