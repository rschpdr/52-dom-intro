// Toda ação do usuário no nosso site (clique, pressionar uma tecla, colocar o cursor do mouse em cima de algum elemento) é representada por um 'evento'. Podemos 'escutar' determinados eventos e fazer algo quando eles acontecem

// Selecionando o botão do menu
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

// 'Escutar' o evento de clique nesse elemento que já foi selecionado
// Referência de nomes de evento: https://developer.mozilla.org/en-US/docs/Web/Events
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// Gerando elementos dinamicamente através de estruras de dados

const fruitListUl = document.getElementById("fruitList");
const fruitListSortBtnAsc = document.getElementById("fruitListSortBtnAsc");
const fruitListSortBtnDesc = document.getElementById("fruitListSortBtnDesc");

const fruitList = [
  "banana",
  "maçã",
  "mamão",
  "abacaxi",
  "uva",
  "kiwi",
  "laranja",
];

function renderList() {
  // Limpar os elementos atuais na lista
  fruitListUl.innerHTML = "";
  // Para cada elemento da array, gere um <li> cujo conteúdo textual é o elemento atual da array
  fruitList.map((fruit) => {
    // Gerar um novo elemento
    const li = document.createElement("li");

    // Manipular o conteúdo textual desse elemento
    li.innerText = fruit;

    // Inserir a li recém criada dentro da ul existente
    fruitListUl.appendChild(li);
  });
}

renderList();

// Escutando o clique no botão "Sort Ascending"

fruitListSortBtnAsc.addEventListener("click", () => {
  // Ordenando a array de frutas alfabeticamente em ordem crescente
  fruitList.sort((a, b) => {
    return a.localeCompare(b);
  });

  // Não existe sincronia entre as estruturas de dados do Javascript e o HTML. Toda vez que alteramos a origem dos dados no js, precisamos manualmente atualizar o DOM
  renderList();
});

// Escutando o clique no botão "Sort Descending"

fruitListSortBtnDesc.addEventListener("click", () => {
  // Ordenando a array de frutas alfabeticamente em ordem decrescente
  fruitList.sort((a, b) => {
    return b.localeCompare(a);
  });

  // Não existe sincronia entre as estruturas de dados do Javascript e o HTML. Toda vez que alteramos a origem dos dados no js, precisamos manualmente atualizar o DOM
  renderList();
});
