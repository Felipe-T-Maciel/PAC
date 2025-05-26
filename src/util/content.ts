export interface Subtitle {
    text: string;
    contentMd: string;
    image?: string | null;
}

export interface Content {
    thumb: string;
    title: {
        text: string;
        content: string;
        image?: string | null;
    };
    subtitles: Subtitle[];
    exercises: Array<{
        title?: string;
        content: string;
        image?: string | null;
        options: Array<{
            text: string;
            correct: boolean;
        }>;
    }>;
}

export const contents: Content[] = [
    {
        thumb: "/",
        title: {
            text: "Lógica de Programação",
            content: "A lógica de programação é quando juntamos uma sequência de ideias a partir de observações lógicas e técnicas que geram um produto para que o computador execute.",
            image: null,
        },
        subtitles: [
            {
                text: "Definição",
                contentMd: `
          A lógica em si é um campo de estudo da Filosofia que busca entender como os afazeres do nosso cotidiano fazem sentido tornando uma proposição válida ou inválida no interior de um argumento. Agora, a lógica de programação é quando juntamos uma sequência de ideias a partir de observações lógicas e técnicas que geram um produto para que o computador execute.
`,
                image: null,
            },
            {
                text: "Importância",
                contentMd: `
A lógica é importante pois nos ajuda a pensar de forma organizada e sequencial, resolvendo os problemas de uma forma mais eficiente.  
**Já a lógica de programação é importante para:**  

-   **Resolução de Problemas:** Uma vez que permite que os programadores criem estruturas sistemáticas, quebrando grandes problemas em partes menores e desenvolvendo algoritmos para resolvê-los um de cada vez.
-   **Eficiência:** Quando os algoritmos são bem projetados utilizando esse tipo de lógica, eles são mais eficientes e consomem menos recursos.
-   **Menos Manutenção:** Quando o código é construído com uma lógica sólida não é necessário ficar atualizando, economizando assim tempo e recursos.
-   **Algoritmos:** Os algoritmos são a implementação prática da lógica de programação. Eles são sequências de instruções que resolvem um problema específico. Uma vez que a lógica é universal os programadores também encontram mais facilidade em aprender novos códigos.  

**Exemplos de como a lógica funciona na prática do dia a dia:**  
- Para colocar um sapato a sequência lógica seria: pegar o sapato e um par de meias, colocar a meia, em seguida calçar o sapato e por último amarrá-lo.
- Para fazer um bolo a sequência lógica seria separar os ingredientes necessários, misturá-los na ordem em que foi delimitada pela receita, colocar em uma forma e em seguida colocar no forno pelo tempo necessário até que esteja pronto para ser retirado.
`,

                image: null,
            },
            {
                text: "Fluxogramas",
                contentMd: `
Agora para uma lógica de programação são delimitados diferentes jeitos de completar de tarefas, a mais comum delas é com a utilização de fluxogramas.
O **fluxograma** se trata de um diagrama que ilustra as etapas de um processo, sistema ou algoritmo e tem por objetivo descrever como um processo funciona, para facilitar a compreensão daqueles que o leem. Veja abaixo como são feitos, seus símbolos e significados:
`,

                image: "/fluxograma.png",
            },
            {
                text: "Exemplo de Fluxograma",
                contentMd: `
A lógica por trás do exemplo abaixo é a seguinte. Ao iniciar o programa, ele necessita pedir algo antes que se dê uma resposta. Caso o cliente não for cadastrado ele não poderá realizar o pedido e assim o programa não opera. Caso o cliente for cadastrado ou se cadastre na hora a pergunta é processada e a partir de uma condição lógica que seria se o “Crédito for aprovado” ele lhe dará a resposta mais adequada para a situação proposta a partir da resposta do cliente.  

`,

                image: "/fluxograma_exemplo.png",
            },
            {
                text: "Outros",
                contentMd: `
Outra forma de fazer um fluxograma é utilizando o símbolo [] do teclado. Utilizando a lógica, no exemplo abaixo o programa precisa novamente fazer uma pergunta antes que se leia a resposta. Assim que a resposta (no caso um número) for digitada, ela é processada a partir de uma sequência de códigos que a faz ser somada a um outro valor (no caso foi o 1), a saída de dados será o resultado encontrado a partir da leitura do número +1. Gerando um programa que funciona a partir de um sequencial lógico.  
[Início]  
↓  
[Leia número → X]  
↓  
[Calcule X = X + 1]  
↓  
[Mostre X]  
↓  
[Fim]
`,

                image: null,
            },
        ],
        exercises: [
            {
                title: "Exercício 1",
                content: "Analise a sequência: 1, 3, 6, 10, 15, 21, ... Qual o próximo número?",
                image: null,
                options: [
                    { text: "28", correct: false },
                    { text: "29", correct: false },
                    { text: "30", correct: true },
                    { text: "42", correct: false },
                ],
            },
            
        ],
    },
];
