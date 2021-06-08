const mainTitle = document.getElementById("mainTitle");

// Mudando a cor do h1
mainTitle.style.color = "blue";

// Mudando o texto do h1

// a propriedade innerText aceita somente texto
mainTitle.innerText = "Olá Mundo!";

// a propriedade innerHTML aceita também HTML
mainTitle.innerHTML = "<strong>Olá Mundo!</strong>";

// Manipulando classes do CSS

// Adiciona uma classe
mainTitle.classList.add("italic");

// Retira uma classe
mainTitle.classList.remove("italic");

// Se a classe existir, retira, se a classe não existir, adiciona
mainTitle.classList.toggle("italic");
