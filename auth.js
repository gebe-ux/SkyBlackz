function registrar() {
  let nome = nomeInput.value;
  let email = emailInput.value;
  let senha = senhaInput.value;

  DB.usuarios.push({
    id: Date.now(),
    nome,
    email,
    senha,
    saldo: 0,
    saqueHoje: 0,
    ultimoSaque: null
  });

  salvarDB();
  window.location = "login.html";
}

function login() {
  let user = DB.usuarios.find(
    u => u.email === emailInput.value && u.senha === senhaInput.value
  );

  if (!user) return alert("Dados inválidos");

  localStorage.setItem("usuarioLogado", JSON.stringify(user));
  window.location = "index.html";
}

function getUser() {
  return JSON.parse(localStorage.getItem("usuarioLogado"));
}
