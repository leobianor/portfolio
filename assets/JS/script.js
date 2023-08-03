const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");
const sidebar = body.querySelector("nav");
const sidebarToggle = body.querySelector("#check-icon");

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "dark") {
  body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if (getStatus && getStatus === "close") {
  sidebar.classList.toggle("close");
} else {
  sidebar.classList.add("close");
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  if (sidebar.classList.contains("close")) {
    localStorage.setItem("status", "close");
  } else {
    localStorage.setItem("status", "open");
  }
});

// Selecione o switch, o ícone e o elemento de texto
const switchElement = document.querySelector('.switch');
const iconElement = document.querySelector('#mode-icon');
const textElement = document.querySelector('#mode-text');

// Adicione um ouvinte de evento para o switch
switchElement.addEventListener('click', function() {
  // Verifique se o ícone atual é "uil-sun"
  const isSunIcon = iconElement.classList.contains('uil-sun');
  
  // Alterne o ícone com base na classe atual
  if (isSunIcon) {
    iconElement.classList.remove('uil-sun');
    iconElement.classList.add('uil-moon');
  } else {
    iconElement.classList.remove('uil-moon');
    iconElement.classList.add('uil-sun');
  }
  
  // Verifique se o texto atual é "Dark Mode"
  const isDarkMode = textElement.textContent === 'Modo Claro';
  
  // Alterne o texto com base no conteúdo atual
  if (isDarkMode) {
    textElement.textContent = 'Modo Escuro';
  } else {
    textElement.textContent = 'Modo Claro';
  }
});
