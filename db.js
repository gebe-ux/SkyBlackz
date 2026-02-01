// BANCO FAKE
let DB = {
  usuarios: JSON.parse(localStorage.getItem("usuarios")) || [],
  produtos: JSON.parse(localStorage.getItem("produtos")) || [],
  vendas: JSON.parse(localStorage.getItem("vendas")) || [],
  notificacoes: JSON.parse(localStorage.getItem("notificacoes")) || []
};

function salvarDB() {
  localStorage.setItem("usuarios", JSON.stringify(DB.usuarios));
  localStorage.setItem("produtos", JSON.stringify(DB.produtos));
  localStorage.setItem("vendas", JSON.stringify(DB.vendas));
  localStorage.setItem("notificacoes", JSON.stringify(DB.notificacoes));
}
