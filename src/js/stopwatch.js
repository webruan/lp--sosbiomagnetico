function startTimer() {
  // Definir o tempo inicial em segundos (10 minutos = 600 segundos)
  let time = 1200;

  // Atualizar o cronômetro a cada segundo
  let timer = setInterval(() => {
    // Converter o tempo restante para minutos e segundos
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    // Exibir os minutos e segundos nos elementos HTML correspondentes
    document.getElementById('minutes').textContent = minutes.toString();
    document.getElementById('seconds').textContent = seconds.toString();

    // // Verificar se o tempo chegou a zero
    if (time <= 0) {
      clearInterval(timer);
      // Executar a ação desejada quando o tempo terminar
      // Por exemplo, redirecionar para outra página
      window.alert('O tempo está prestes a acabar, você vai mesmo perder essa oportunidades?');
    }

    // Decrementar o tempo em um segundo
    time--;
  }, 1000); // Intervalo de atualização de 1 segundo (1000 milissegundos)
}

// Chamar a função para iniciar o cronômetro ao carregar a página
window.addEventListener('load', startTimer);
