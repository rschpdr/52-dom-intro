// DOM - Document Object Model

// Query Selector
// Seleciona tags do HTML usando a mesma sintaxe de seletor do CSS. Sempre retorna somente a primeira ocorrência

const h1 = document.querySelector("h1");

console.log(h1);

console.log(document.querySelector("#mainTitle"));
console.log(document.querySelector(".title"));

// Query Selector All
// Seleciona todas as tags que atenderem o seletor (na mesma sintaxe do CSS)

console.log(document.querySelectorAll("li.list-item"));

// Retorna somento o primeiro <li> de 3, pois o querySelector retorna somente a primeira ocorrência
console.log(document.querySelector(".list-item"));

// getElementById

console.log(document.getElementById("mainTitle"));

// getElementsByClassname

// Esse método retorna uma lista de todos os elementos que possuem essa classe no atributo class
console.log(document.getElementsByClassName("list-item"));

// getElementsByTagname

console.log(document.getElementsByTagName("li"));
