document.addEventListener('DOMContentLoaded', () => {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");

    const perguntas = [
        {
            enunciado: "Você acabou de obter sua primeira moto esportiva. Qual é a sua reação inicial?",
            alternativas: [
                {
                    texto: "Estou animado para começar a andar e explorar!",
                    afirmacao: "Você se sentiu entusiasmado com a ideia de liberdade e novas experiências."
                },
                {
                    texto: "Estou preocupado com a segurança e manutenção.",
                    afirmacao: "Você decidiu estudar a fundo as melhores práticas de segurança e manutenção."
                }
            ]
        },
        {
            enunciado: "Você está participando de um passeio de moto em grupo e se depara com um trajeto desafiador. O que você faz?",
            alternativas: [
                {
                    texto: "Encaro o desafio e tento acompanhar o grupo.",
                    afirmacao: "Você provou suas habilidades e a sensação de aventura foi gratificante."
                },
                {
                    texto: "Opto por uma rota mais segura e sigo com calma.",
                    afirmacao: "Você preferiu manter a segurança e evitar riscos desnecessários."
                }
            ]
        },
        {
            enunciado: "Você está planejando uma viagem longa de moto. Qual é a sua prioridade ao se preparar?",
            alternativas: [
                {
                    texto: "Garantir que a moto esteja em perfeitas condições e verificar todos os equipamentos.",
                    afirmacao: "Você fez uma revisão completa e preparou tudo para uma viagem segura e tranquila."
                },
                {
                    texto: "Planejar o roteiro e identificar pontos de parada para descanso e alimentação.",
                    afirmacao: "Você organizou a viagem de forma a maximizar o conforto e a diversão."
                }
            ]
        },
        {
            enunciado: "Após uma viagem longa, você percebe que a moto precisa de alguns reparos. Como você procede?",
            alternativas: [
                {
                    texto: "Levo a moto a uma oficina especializada para os reparos necessários.",
                    afirmacao: "Você garantiu que a manutenção fosse realizada por profissionais qualificados."
                },
                {
                    texto: "Tento resolver os problemas por conta própria usando tutoriais e ferramentas.",
                    afirmacao: "Você usou suas habilidades e recursos para economizar e aprender mais sobre manutenção."
                }
            ]
        },
        {
            enunciado: "Durante uma competição de motocross, você enfrenta um obstáculo inesperado. Qual é a sua abordagem?",
            alternativas: [
                {
                    texto: "Adapto minha técnica e tento superar o obstáculo da melhor forma possível.",
                    afirmacao: "Você demonstrou flexibilidade e habilidade para lidar com situações imprevistas."
                },
                {
                    texto: "Decido evitar o obstáculo e buscar uma rota alternativa.",
                    afirmacao: "Você optou por uma abordagem mais segura e estratégica para alcançar seu objetivo."
                }
            ]
        }
    ];

    let atual = 0;
    let perguntaAtual;
    let historiaFinal = "";

    function mostraPergunta() {
        if (atual >= perguntas.length) {
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.innerHTML = ""; 
        mostraAlternativas();
    }

    function mostraAlternativas() {
        for (const alternativa of perguntaAtual.alternativas) {
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
    }

    function respostaSelecionada(opcaoSelecionada) {
        const afirmacoes = opcaoSelecionada.afirmacao;
        historiaFinal += afirmacoes + " ";
        atual++;
        mostraPergunta();
    }

    function mostraResultado() {
        caixaPerguntas.classList.add('hidden');
        caixaAlternativas.classList.add('hidden');
        caixaResultado.classList.remove('hidden');
        textoResultado.textContent = historiaFinal;
    }

    function iniciarQuestionario() {
        botaoIniciar.classList.add('hidden');
        caixaPerguntas.classList.remove('hidden');
        caixaAlternativas.classList.remove('hidden');
        mostraPergunta();
    }

    botaoJogarNovamente.addEventListener("click", () => {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.add('hidden');
        botaoIniciar.classList.remove('hidden'); 
    });

    botaoIniciar.addEventListener("click", iniciarQuestionario);

   
    caixaPerguntas.classList.add('hidden');
    caixaAlternativas.classList.add('hidden');
});
