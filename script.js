let tamanhoFonte = 100; // Porcentagem inicial da fonte

const botaoAumentar = document.getElementById('botao-aumentar');
const botaoDiminuir = document.getElementById('botao-diminuir');
const botaoContraste = document.getElementById('botao-contraste');

// Aumentar o tamanho do texto
botaoAumentar.addEventListener('click', () => {
  if (tamanhoFonte < 150) {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + '%';
  }
});

// Diminuir o tamanho do texto
botaoDiminuir.addEventListener('click', () => {
  if (tamanhoFonte > 80) {
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + '%';
  }
});

// Alternar o modo de Alto Contraste
botaoContraste.addEventListener('click', () => {
  document.body.classList.toggle('alto-contraste');
});
