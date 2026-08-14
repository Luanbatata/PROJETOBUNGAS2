// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {

  // Elementos do DOM
  const botaoAumentar = document.getElementById('botao-aumentar');
  const botaoDiminuir = document.getElementById('botao-diminuir');
  const botaoResetar = document.getElementById('botao-resetar');
  const botaoContraste = document.getElementById('botao-contraste');

  // Configurações de tamanho da fonte (porcentagem)
  let tamanhoFonteAtual = parseInt(localStorage.getItem('lumina_fonte')) || 100;
  const TAMANHO_MINIMO = 80;
  const TAMANHO_MAXIMO = 150;
  const PASSO_FONTE = 10;

  // Verifica se o modo alto contraste estava salvo anteriormente
  const altoContrasteAtivo = localStorage.getItem('lumina_contraste') === 'true';

  // Aplica preferências salvas ao carregar a página
  aplicarTamanhoFonte(tamanhoFonteAtual);
  if (altoContrasteAtivo) {
    document.body.classList.add('alto-contraste');
  }

  // Função para atualizar o tamanho do texto no Body
  function aplicarTamanhoFonte(porcentagem) {
    document.body.style.fontSize = porcentagem + '%';
    tamanhoFonteAtual = porcentagem;
    localStorage.setItem('lumina_fonte', porcentagem);
  }

  // Evento: Aumentar Fonte
  botaoAumentar.addEventListener('click', () => {
    if (tamanhoFonteAtual < TAMANHO_MAXIMO) {
      aplicarTamanhoFonte(tamanhoFonteAtual + PASSO_FONTE);
    }
  });

  // Evento: Diminuir Fonte
  botaoDiminuir.addEventListener('click', () => {
    if (tamanhoFonteAtual > TAMANHO_MINIMO) {
      aplicarTamanhoFonte(tamanhoFonteAtual - PASSO_FONTE);
    }
  });

  // Evento: Resetar Fonte para 100%
  botaoResetar.addEventListener('click', () => {
    aplicarTamanhoFonte(100);
  });

  // Evento: Alternar Alto Contraste
  botaoContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    const estaAtivo = document.body.classList.contains('alto-contraste');
    localStorage.setItem('lumina_contraste', estaAtivo);
  });

});
