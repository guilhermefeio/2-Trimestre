const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem você mais gosta?",
        alternativas: [
            {
                texto: "Primeira alternativa"
                afirmacao: "afirmação que explica o motivo de escolher essa opção"
            },
            {
                texto: "Primeira alternativa"
                afirmacao: "afirmação que explica o motivo de escol"
            }
        ]
},
{
    enunciado: "Quem você mais gosta?",
    alternativas: [
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
        },
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escol"
        }
    ]
},
{
    enunciado: "Quem você mais gosta?",
    alternativas: [
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
        },
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escol"
        }
    ]
},
{
    enunciado: "Quem você mais gosta?",
    alternativas: [
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
        },
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escol"
        }
    ]
},
{
    enunciado: "Quem você mais gosta?",
    alternativas: [
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escolher essa opção"
        },
        {
            texto: "Primeira alternativa"
            afirmacao: "afirmação que explica o motivo de escol"
        }
    ]
},
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.append(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmcoes = opcaoSelecionada.afirmacao
    historiaFinal += afirmcoes + " ";
    atual++;
    mostraPergunta;
}

function mostraResultado(){
    caixaPerguntas.textContent = "Esse texto é a introdução para juntar todas as afirmações das respostas..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();