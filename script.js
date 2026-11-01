const cardapio = {
  bebidas: {
    titulo: "🍻 Bebidas",
    grupos: [
      { titulo: "Cervejas", produtos: [
        ["Heineken", "269 ml", "7,00"],
        ["Heineken", "330 ml", "8,50"],
        ["Corona Zero", "330 ml", "10,50"],
        ["Corona", "330 ml", "9,00"],
        ["Império", "269 ml", "4,00"],
        ["Skol", "269 ml", "4,00"],
        ["Budweiser", "269 ml", "4,50"],
        ["Original", "269 ml", "5,00"]
      ]},
      { titulo: "Refrigerantes e água", produtos: [
        ["Água", "500 ml", "3,00"],
        ["Refrigerante", "200 ml — Coca-Cola, Fanta laranja, Fanta uva, Guaraná ou Sprite", "3,50"],
        ["Refrigerante", "350 ml — Coca-Cola, Fanta laranja, Fanta uva, Guaraná ou Sprite", "6,00"],
        ["Guaraná Antarctica", "2 litros", "11,00"],
        ["Coca-Cola", "2 litros", "15,00"],
        ["Sprite", "2 litros", "14,00"]
      ]}
    ]
  },
  lanches: {
    titulo: "🍔 Lanches",
    grupos: [
      { titulo: "Batatas fritas", produtos: [
        ["Batata P simples", "", "10,00"],
        ["Batata M simples", "", "15,00"],
        ["Batata G simples", "", "20,00"],
        ["Batata P completa", "", "15,00"],
        ["Batata M completa", "", "20,00"],
        ["Batata G completa", "", "25,00"]
      ], aviso: "Simples: ketchup, maionese, mostarda e queijo ralado. Completa: ketchup, maionese, mostarda, requeijão, cheddar, queijo ralado e bacon." },
      { titulo: "Pastéis", produtos: [
        ["Carne", "", "12,00"], ["Calabresa", "", "12,00"], ["Frango", "", "12,00"],
        ["Queijo", "", "12,00"], ["Pizza", "", "12,00"], ["Bauru", "", "15,00"],
        ["Carne com queijo", "", "15,00"], ["Carne com cheddar", "", "15,00"],
        ["Carne com ovo", "", "15,00"], ["Calabresa com queijo", "", "15,00"],
        ["Frango com cheddar", "", "15,00"], ["Frango com requeijão", "", "15,00"],
        ["Frango com queijo", "", "15,00"], ["Especial de carne ou frango", "Presunto, queijo, ovo, tomate, azeitona e orégano", "28,00"]
      ]},
      { titulo: "Salgados", produtos: [
        ["Coxinha de frango", "", "1,50"],
        ["Risoles de presunto e queijo", "", "1,50"],
        ["Bolinha de queijo", "", "1,50"],
        ["Bolinho de carne", "", "1,50"],
        ["Bolinho de calabresa", "", "1,50"],
        ["Bolinho de salsicha", "", "1,50"]
      ]},
      { titulo: "Hot dogs", produtos: [
        ["Hot dog simples", "Pão, 1 salsicha, purê, ervilha, milho, alface e batata palha", "12,00"],
        ["Hot dog duplo", "Pão, 2 salsichas, purê, ervilha, milho, alface e batata palha", "14,00"],
        ["Hot dog completo", "Pão, 2 salsichas, purê, ervilha, milho, cheddar, requeijão, alface e batata palha", "17,00"],
        ["Dogão", "Pão, 2 salsichas, purê, ervilha, milho, cheddar, requeijão, bacon, queijo ralado, alface e batata palha", "20,00"]
      ], aviso: "Todos acompanham molho: ketchup, maionese e mostarda."}
    ]
  },
  doces: {
    titulo: "🍰 Doces",
    grupos: [
      { titulo: "Bolos de pote", produtos: [
        ["Dois amores", "Meio chocolate e meio ninho; massa branca ou de chocolate", "7,50"],
        ["Mousse de maracujá", "Massa branca ou de chocolate", "7,50"],
        ["Ninho", "Massa branca ou de chocolate", "7,50"],
        ["Chocolate", "", "7,50"],
        ["Coco", "", "7,50"]
      ]},
      { titulo: "Pudins", produtos: [
        ["Leite", "", "7,50"],
        ["Doce de leite", "", "7,50"],
        ["Chocolate", "", "7,50"]
      ]}
    ],
    aviso: "Preço de cada unidade."
  }
};

const area = document.querySelector("#conteudo-cardapio");
const botoes = document.querySelectorAll(".categoria");

function mostrarCategoria(categoria) {
  const dados = cardapio[categoria];
  botoes.forEach(botao => {
    const selecionado = botao.dataset.categoria === categoria;
    botao.classList.toggle("ativa", selecionado);
    botao.setAttribute("aria-pressed", selecionado);
  });

  let html = `<h2 class="titulo-categoria">${dados.titulo}</h2>`;
  dados.grupos.forEach(grupo => {
    html += `<section class="grupo"><h3>${grupo.titulo}</h3><div class="lista">`;
    grupo.produtos.forEach(([nome, descricao, preco]) => {
      html += `<article class="produto"><div><span class="nome">${nome}</span>${descricao ? `<span class="descricao">${descricao}</span>` : ""}</div><span class="preco">R$ ${preco}</span></article>`;
    });
    html += "</div>";
    if (grupo.aviso) html += `<p class="aviso">${grupo.aviso}</p>`;
    html += "</section>";
  });
  if (dados.aviso) html += `<p class="aviso">${dados.aviso}</p>`;
  area.innerHTML = html;
}

botoes.forEach(botao => {
  botao.addEventListener("click", () => mostrarCategoria(botao.dataset.categoria));
});

mostrarCategoria("bebidas");
