let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

// CALCULA COMISSÃO EM TEMPO REAL
const precoInput = document.getElementById("preco");
if (precoInput) {
  precoInput.addEventListener("input", () => {
    let preco = Number(precoInput.value);
    let comissao = Math.floor(preco / 2) * 0.5;
    let total = preco + comissao;

    document.getElementById("comissao").innerText =
      "R$ " + comissao.toFixed(2);

    document.getElementById("total").innerText =
      "R$ " + total.toFixed(2);
  });
}

// ANUNCIAR
function anunciar() {
  let nome = document.getElementById("nome").value;
  let preco = Number(document.getElementById("preco").value);
  let msg = document.getElementById("msg");

  if (!nome || preco < 2) {
    msg.innerText = "Preencha o nome e preço mínimo R$ 2,00";
    return;
  }

  let comissao = Math.floor(preco / 2) * 0.5;
  let total = preco + comissao;

  let produto = {
    nome,
    preco,
    comissao,
    total
  };

  produtos.push(produto);
  localStorage.setItem("produtos", JSON.stringify(produtos));

  msg.innerText = "Produto publicado com sucesso ✔";
}

// HOME
function carregarProdutos() {
  let area = document.getElementById("produtos");
  if (!area) return;

  if (produtos.length === 0) {
    area.innerHTML = "<p>Nenhum produto anunciado.</p>";
    return;
  }

  area.innerHTML = "";

  produtos.forEach((p, i) => {
    area.innerHTML += `
      <div class="card" onclick="abrirProduto(${i})">
        <h3>${p.nome}</h3>
        <div class="price">Produto: R$ ${p.preco.toFixed(2)}</div>
        <div class="comissao">Taxa SkyBlack: R$ ${p.comissao.toFixed(2)}</div>
      </div>
    `;
  });
}

function abrirProduto(i) {
  localStorage.setItem("produtoSelecionado", i);
  window.location.href = "produto.html";
}

function carregarProduto() {
  let area = document.getElementById("produto");
  if (!area) return;

  let i = localStorage.getItem("produtoSelecionado");
  let p = produtos[i];

  area.innerHTML = `
    <h2>${p.nome}</h2>
    <div class="price">Preço do produto: R$ ${p.preco.toFixed(2)}</div>
    <div class="info">
      Taxa SkyBlack: R$ ${p.comissao.toFixed(2)}<br>
      Total a pagar: R$ ${p.total.toFixed(2)}
    </div>
    <button class="buy" onclick="alert('Compra simulada')">
      Comprar
    </button>
  `;
}

carregarProdutos();
carregarProduto();
function carregarMenu() {
  let menu = document.getElementById("menu");
  if (!menu) return;

  let user = JSON.parse(localStorage.getItem("usuarioLogado"));

  if (!user) {
    menu.innerHTML = `
      <a href="login.html">Entrar</a>
      <a href="register.html">Criar conta</a>
    `;
  } else {
    menu.innerHTML = `
      <a href="vender.html">Anunciar</a>
      <a href="painel.html">Painel</a>
      <a href="#" onclick="logout()">Sair</a>
    `;
  }
}

function logout() {
  localStorage.removeItem("usuarioLogado");
  window.location = "index.html";
}

carregarMenu();
