document.addEventListener("DOMContentLoaded", function () {
    // gabarito com as respostas corretas
    const respostasCorretas = {
      pergunta1: "gerenciar",
      pergunta2: "Python",
      pergunta3: "Armazenamento",
      pergunta4: "Proteger",
      pergunta5: "segurança",
      pergunta6: "parte",
      pergunta7: "memória",
      pergunta8: "Armazenar",
      pergunta9: "Git",
      pergunta10: "sequência",
    };
  
    // captura o formulário
    const quizForm = document.getElementById("quizForm");
  
    // mensagem de resultado
    const resultado = document.createElement("p");
    resultado.style.textAlign = "center";
    document.body.appendChild(resultado);
  
    // evento de submissão do formulário
    quizForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      let pontuacao = 0;
  
      // percorre as perguntas e verifica as respostas
      Object.keys(respostasCorretas).forEach((pergunta) => {
        const respostaSelecionada = document.querySelector(
          `input[name="${pergunta}"]:checked`
        );
  
        if (respostaSelecionada) {
          const labels = document.querySelectorAll(`label[for="${respostaSelecionada.id}"]`);
  
          if (respostaSelecionada.value === respostasCorretas[pergunta]) {
            pontuacao++;
            labels.forEach(label => label.classList.add("correto")); 
          }
          else{
            labels.forEach(label => label.classList.add("incorreto"));
  
          }
        }
      });
  
      resultado.textContent = `Você acertou ${pontuacao} de 10 perguntas!`;
    });
  });
