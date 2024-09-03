document.addEventListener('DOMContentLoaded', () => {
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".novamente-btn");
    const botaoIniciar = document.querySelector(".iniciar-btn");

    const perguntas = [
    {
        enunciado: "Você acabou de entrar em um novo mundo no Minecraft. Qual é a sua primeira ação?",
        alternativas: [
            {
                texto: "Recolho madeira das árvores para fazer ferramentas básicas.",
                afirmacao: "Você se preparou desde o início para enfrentar os desafios do mundo."
            },
            {
                texto: "Exploro a área para encontrar um lugar seguro para construir.",
                afirmacao: "Você preferiu se orientar antes de começar a coletar recursos."
            }
        ]
    },
    {
        enunciado: "Você encontra uma vila de NPCs. O que você faz?",
        alternativas: [
            {
                texto: "Ajudo os aldeões a melhorar a vila, trocando recursos e construindo mais casas.",
                afirmacao: "Você se tornou um aliado dos aldeões, promovendo o crescimento da vila."
            },
            {
                texto: "Uso a vila como ponto de partida para explorar cavernas e coletar recursos raros.",
                afirmacao: "Você aproveitou a vila como base para suas aventuras."
            }
        ]
    },
    {
        enunciado: "Você descobre uma caverna escura cheia de minérios. Como você procede?",
        alternativas: [
            {
                texto: "Entro preparado com tochas e uma boa picareta para minerar tudo.",
                afirmacao: "Você estava pronto para enfrentar os perigos da caverna e coletar valiosos recursos."
            },
            {
                texto: "Exploro a entrada da caverna e volto para me equipar melhor antes de entrar mais fundo.",
                afirmacao: "Você foi cauteloso e garantiu que estava pronto para qualquer eventualidade."
            }
        ]
    },
    {
        enunciado: "Você encontra um bioma de deserto com um templo. O que você faz?",
        alternativas: [
            {
                texto: "Entro no templo e desarmo as armadilhas para pegar os tesouros.",
                afirmacao: "Você mostrou habilidade ao evitar armadilhas e obteve valiosos itens."
            },
            {
                texto: "Evito o templo e continuo explorando o deserto para encontrar outros recursos.",
                afirmacao: "Você optou por evitar riscos e continuar sua jornada."
            }
        ]
    },
    {
        enunciado: "Ao explorar, você encontra uma fortaleza do Nether. O que você faz?",
        alternativas: [
            {
                texto: "Enfrento os perigos do Nether e procuro por baús e Blaze Rods.",
                afirmacao: "Você mostrou coragem e conseguiu itens valiosos para suas futuras aventuras."
            },
            {
                texto: "Evito os confrontos e tento explorar partes seguras da fortaleza.",
                afirmacao: "Você foi estratégico e evitou riscos desnecessários enquanto explorava."
            }
        ]
    },
    {
        enunciado: "Você finalmente encontra o portal para o The End. Qual é o seu plano?",
        alternativas: [
            {
                texto: "Entro preparado com poções, flechas e um plano para derrotar o Ender Dragon.",
                afirmacao: "Você estava pronto para enfrentar o desafio final e conquistar o The End."
            },
            {
                texto: "Reforço minha armadura e faço mais poções antes de entrar no portal.",
                afirmacao: "Você foi meticuloso em sua preparação para garantir uma vitória segura."
            }
        ]
    },
    {
        enunciado: "Durante uma noite de exploração, você vê várias criaturas ao redor da sua casa. Como você reage?",
        alternativas: [
            {
                texto: "Luto contra as criaturas para proteger minha casa e meus recursos.",
                afirmacao: "Você defendeu corajosamente seu território contra as ameaças noturnas."
            },
            {
                texto: "Espero até o amanhecer, quando as criaturas se dissipam.",
                afirmacao: "Você optou por uma abordagem segura, aguardando a noite passar."
            }
        ]
    },
    {
        enunciado: "Você encontra uma aldeia abandonada. O que você faz?",
        alternativas: [
            {
                texto: "Investigo a aldeia em busca de itens e pistas sobre o que aconteceu.",
                afirmacao: "Você explorou a aldeia em busca de informações e recursos valiosos."
            },
            {
                texto: "Evito a aldeia, suspeitando que possa ser perigosa.",
                afirmacao: "Você preferiu evitar possíveis armadilhas e continuou sua exploração."
            }
        ]
    },
    {
        enunciado: "Você encontra uma mina abandonada. Como você procede?",
        alternativas: [
            {
                texto: "Entro na mina em busca de minério e baús escondidos.",
                afirmacao: "Você encontrou tesouros escondidos e minérios valiosos na mina."
            },
            {
                texto: "Monto um acampamento próximo para explorar a mina com calma.",
                afirmacao: "Você planejou sua exploração cuidadosamente, garantindo segurança."
            }
        ]
    },
    {
        enunciado: "Você está em uma expedição submarina e encontra um monumento oceânico. O que você faz?",
        alternativas: [
            {
                texto: "Preparo poções de respiração aquática e invado o monumento.",
                afirmacao: "Você se preparou bem e enfrentou os perigos do oceano com sucesso."
            },
            {
                texto: "Evito o monumento, pois sei que ele é muito perigoso.",
                afirmacao: "Você foi prudente ao evitar o confronto e optou por continuar sua exploração."
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
