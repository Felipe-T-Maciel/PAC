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
        options?: Array<{
            text: string;
            correct: boolean;
        }>;
        answer?: string | null;
    }>;
}

export const contents: Content[] = [
    {
        thumb: "/logicadeprogramacao.png",
        title: {
            text: "Lógica de Programação ",
            content: "A lógica de programação é quando juntamos uma sequência de ideias a partir de observações lógicas e técnicas que geram um produto para que o computador execute.",
            image: null,
        },
        subtitles: [
            {
                text: "Definição ",
                contentMd: `
          A lógica em si é um campo de estudo da Filosofia que busca entender como os afazeres do nosso cotidiano fazem sentido tornando uma proposição válida ou inválida no interior de um argumento. Agora, a lógica de programação é quando juntamos uma sequência de ideias a partir de observações lógicas e técnicas que geram um produto para que o computador execute.
`,
                image: null,
            },
            {
                text: "Importância ",
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
                text: "Fluxogramas ",
                contentMd: `
Agora para uma lógica de programação são delimitados diferentes jeitos de completar de tarefas, a mais comum delas é com a utilização de fluxogramas.
O **fluxograma** se trata de um diagrama que ilustra as etapas de um processo, sistema ou algoritmo e tem por objetivo descrever como um processo funciona, para facilitar a compreensão daqueles que o leem. Veja abaixo como são feitos, seus símbolos e significados:
`,

                image: "/fluxograma.png",
            },
            {
                text: "Exemplo de Fluxograma ",
                contentMd: `
A lógica por trás do exemplo abaixo é a seguinte. Ao iniciar o programa, ele necessita pedir algo antes que se dê uma resposta. Caso o cliente não for cadastrado ele não poderá realizar o pedido e assim o programa não opera. Caso o cliente for cadastrado ou se cadastre na hora a pergunta é processada e a partir de uma condição lógica que seria se o “Crédito for aprovado” ele lhe dará a resposta mais adequada para a situação proposta a partir da resposta do cliente.  

`,

                image: "/fluxograma_exemplo.png",
            },
            {
                text: "Outros ",
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
                    { text: "28", correct: true },
                    { text: "29", correct: false },
                    { text: "30", correct: false },
                    { text: "42", correct: false },
                ],
                answer: `**28**`
            },
            {
                title: "Exercício 2",
                content: "Faça um fluxograma que leia um número digitado pelo usuário e mostre esse número na tela  ",
                image: null,
                options: [
                ],
                answer: `  
[Início]  
[Leia numero-x]  
[Mostre x]  
[Fim] 
                `
            },
            {
                title: "Exercício 3",
                content: "Resolva o exercício disponibilizado no site: https://rachacuca.com.br/logica/problemas/amigas-na-escola/",
                image: null,
                options: [
                ],
                answer: null
            },

        ],
    },
    {
        thumb: "/linguagemc.png",
        title: {
            text: "Introdução a linguagem C ",
            content: "",
            image: null,
        },
        subtitles: [
            {
                text: "História e importância ",
                contentMd: `
          A linguagem C foi criada por Dennis Ritchie, em 1972, no centro de Pesquisas da Bell Laboratories. Sua primeira utilização importante foi a reescrita do Sistema Operacional UNIX, que até então era escrito em assembly.
Em meados de 1970 o UNIX saiu do laboratório para ser liberado para as universidades. Foi o suficiente para que o sucesso da linguagem atingisse proporções tais que, por volta de 1980, já existiam várias versões de compiladores C oferecidas por várias empresas, não sendo mais restritas apenas ao ambiente UNIX, porém compatíveis com vários outros sistemas operacionais.
O C é uma linguagem de propósito geral, sendo adequada à programação estruturada. No entanto é mais utilizada escrever compiladores, analisadores léxicos, bancos de dados, editores de texto, etc..
A linguagem C pertence a uma família de linguagens cujas características são: portabilidade, modularidade, compilação separada, recursos de baixo nível, geração de código eficiente, confiabilidade, regularidade, simplicidade e facilidade de uso.
`,
                image: null,
            },
            {
                text: "Estrutura básica ",
                contentMd: `
Todo programa em C segue uma estrutura padrão:
`,

                image: "/estrutura.png",
            },
            {
                text: "#include <stdio.h> ",
                contentMd: `
-   **O que é?** É uma diretiva de pré-processador que inclui o conteúdo do arquivo de cabeçalho stdio.h no código fonte.
-   **Para que serve?** Acesso a funções de entrada/saída:
    -   printf(): Imprime dados na tela.  
    -   scanf(): Lê dados do teclado.
`,
                image: null,
            },
            {
                text: "int main(void) ",
                contentMd: `
-   **O que é?** É a função principal e obrigatória em todo programa C.
-   **Ponto de entrada:** A execução sempre começa aqui.
-   **Estrutura:**
    -   **int:** Indica que a função retorna um valor inteiro ao sistema operacional.
    -   **main:** Nome fixo da função principal.
    -   **(void):** Explicita que a função não recebe parâmetros.
`,

                image: null,
            },
            {
                text: "return 0; ",
                contentMd: `
-   **O que é?** Instrução que finaliza a função main e retorna um código de status ao sistema operacional.  
-   **Para que serve?** Indicar sucesso/falha:
    -   0: Sucesso.
    -   Valor diferente de 0: Indica um erro (ex: 1 para erro genérico).  
-   **Boas práticas:** Sempre incluir return 0; mesmo que o compilador permita omitir (garante portabilidade).
`,

                image: null,
            },
            {
                text: "Comentários ",
                contentMd: `
-   **Comentário de linha única:** // Este é um comentário de uma linha
-   **Comentário de multiplas linha:**
    /*
        Este é um comentário
        de várias linhas
    */
`,

                image: null,
            },
            {
                text: "Identificadores ",
                contentMd: `
**Regras:**
    -   **Podem conter letras, números e _.**
    -   **Não podem começar com número.**
    -   **Case-sensitive (idade ≠ Idade).**
    -   **Exemplos válidos: idade, soma_total, valor1.**
    -   **Exemplos inválidos: 1valor, salario-total.**
`,

                image: null,
            },
            {
                text: "Boas práticas ",
                contentMd: `
-   **Indentação:** Organize o código para facilitar a leitura.
-   **Nomes significativos:**
    -   **Ruim:** int x;
    -   **Bom:** int idade_usuario;
-   **Evite linhas longas:** Divida expressões complexas.
`,
                image: null,
            },
            {
                text: "Como compilar e executar um código em C ",
                contentMd: `
Para compilar e executar os códigos vamos usar um compilador online.
-   **Acesse o link:** https://www.onlinegdb.com/online_c_compiler ou pesquise GDB online C e clique no primeiro link.
`,
                image: "/rodar.png",
            },
        ],
        exercises: [
            {
                title: "Exercício 1",
                content: "Construa um programa que mostre seu nome e idade na tela.",
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 2",
                content: "Construa um programa que mostre em tela um cartão de visitas, use | e – para fazer o cartão. (use “\n” dentro das aspas do printf no final do conteúdo para pular uma linha ex. printf(“Olá! \n”); )",
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 3",
                content: "Use comentários no código anterior para explicar a função de cada bloco de código.",
                image: null,
                options: [
                ],
                answer: null
            },

        ],
    },
    {
        thumb: "/tiposde.png",
        title: {
            text: "Tipos de Dados e Variáveis  ",
            content: "",
            image: null,
        },
        subtitles: [
            {
                text: "Antes de começar ",
                contentMd: `
**Esses são os quatro tipos de variáveis em C que mais usamos.**  
    -   **Char:** Que guarda uma variável do tipo caractere (letras);  
    -   **Int:** Guarda um número inteiro;  
    -   **Float:** Guarda um número real com certa precisão;  
    -   **Double:** Que guarda também um número real, mas ele é mais preciso que o float.  
Temos também as bibliotecas que usamos de acordo com o que vamos programar.  

Agora vamos só usar a <stdio.h> que se utiliza quando tem entrada e saída de dados.  
Para começar um código precisamos saber como podemos resolver o problema e pensar em quantas variáveis precisamos, e depois ver qual tipo de variável ela precisa ser.  
**Ex:**  Crie um código que peça para o usuário escrever a primeira letra do seu nome, sua idade e sua altura.  
Quando queremos mostrar uma mensagem na tela utilizamos o PRINTF e para que o sistema leia a resposta do usuário utilizamos o SCANF.  
![Exemplo de código](/antescomecar.png)  
Essa é uma estrutura básica, sem o tipo de variável declarado. Se rodarmos esse código ele não vai rodar pois falta declararmos as variáveis. Para isso vamos pensar! Quando o usuário for responder a primeira pergunta ele vai utilizar um caractere, um número inteiro ou um número real. Ele vai utilizar um caractere, logo utilizaremos a variável CHAR. Também utilizaremos um nome para o sistema guardar essa resposta, você pode escolher qualquer nome, mas é mais interessante você utilizar algo que lembra a resposta da pessoa pois você pode precisar utilizar novamente, esse nome conhecemos como a nossa variável do programa, pois, ela muda de acordo com a resposta do usuário. Detalhe, quando utilizamos o char para uma função onde a resposta será maior que uma letra precisamos delimitar a quantidade de letras. Colocando [x] atras no nome.
Ex: Char letra[50];  
Isso quer dizer que o nome da pessoa pode ter no máximo 50 caracteres.  Ficando assim o código.  
![Exemplo de código](/antescomecar2.png)  
Foi declarado a variável como char e colocado o nome dela de “letra” o usuário vai digitar uma letra e o sistema vai guardar essa letra dentro da variável “letra”.  Essa é uma estrutura padrão então em todas as vezes vamos utilizar essa base.  
Agora para idade da pessoa utilizamos qual. Número inteiro, pois a pessoa vai responder um número sem virgulo! Logo utilizaremos o INT.  
![Exemplo de código](/antescomecar3.png)  
Segue o mesmo padrão.  
Agora por último para a altura da pessoa utilizaremos o FLOAT pois a resposta normalmente é número com vírgula.  
![Exemplo de código](/antescomecar4.png)  
Ficando assim.  
Aqui tem uma tabela para memorizar.  

| Tipo de Dado ㅤ| Formato ㅤ| Descrição          |
|--------------|---------|--------------------|
| Char         | ${`%c`}   | Caractere          |
| Int          | ${`%i`}    | Inteiro            |
| Float        | ${`%f`}    | Real               |
| Double       | ${`%d`}    | Real mais precisa  |  
  
Agora que fizemos o código vamos ver como ele fica quando executado. DD
![Exemplo de código](/antescomecar5.png)  
`,
                image: null,
            }
        ],
        exercises: [
            {
                title: "Exercício 1",
                content: "Faça um programa que imprima a frase “Olá mundo”. ",
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 2",
                content: "Faça um programa que peça a idade da pessoa e o nome dela e imprima na mesma linha as respostas.  ",
                image: null,
                options: [
                ],
                answer: null
            }
        ],
    },
    {
        thumb: "/estruturas.png",
        title: {
            text: "Estruturas condicionais ",
            content: "",
            image: null,
        },
        subtitles: [
            {
                text: "O que são? ",
                contentMd: `
Quando falamos em lógica de programação, as estruturas condicionais são recursos oferecidos pelas linguagens para que seja possível verificar uma condição e alterar o fluxo de execução do algoritmo. Assim, é possível definir uma ação específica para diferentes cenários e obter exatamente o resultado esperado durante o desenvolvimento de um site ou de uma aplicação.
Elas permitem, por exemplo, controlar o conteúdo que será exibido, criar formulários dinâmicos, desenvolver mídias interativas e tornar páginas responsivas.
E para estruturas condicionais nós temos dois meios de fazê-las, utilizando a Estrutura Condicional e Estrutura de Seleção.
`,
                image: null,
            },
            {
                text: "Estruturas condicional ",
                contentMd: `
Em algoritmos usamos a estrutura se e senão para representar a estrutura condicional onde necessitamos fazer um comparativo entre valores ou variáveis para decidir se é verdadeiro ou falso. Para usar esta estrutura de condição em C usamos if e else.  
**Estrutura:**  

![Exemplo de código](/estruturacondicional.png)  

Agora vou mostrar um exemplo desta estrutura em uso:  

![Exemplo de código](/estruturacondicional2.png)  

Para facilitar o entedimento, podemos representar a estrutura condicional  

![Exemplo de código](/estruturacondicional3.png)  

acima utilizando um Fluxograma:  

Nesse fluxograma podemos ver um exemplo básico. Se A for maior que B então é verdadeiro, e irá usar o if. Senão for maior então é falso e irá vai o else.  
Porém com if e else, só conseguimos testar uma condição verdadeira e o restante como caso contrário. Mas nós temos outra opção, utilizando else if, que usamos quando temos mais de duas possibilidades e conseguimos testar várias condições específicas, uma por uma.  

**Estrutura:**  

![Exemplo de código](/estruturacondicional4.png)  

Pode ver que o else if não é colocando “dentro” de if ou else, mas vem logo após um if, antes de um else, se houver. Portanto ele não pode existir sozinho, ele só pode ser usado depois de um if.
Dentro de estruturas Condicionais também temos outro tipo de estrutura além da estrutura condicional.  
`,
                image: null,
            },
            {
                text: "Estruturas de seleção ",
                contentMd: `
Em algoritmo a estrutura de seleção pode ser conhecida como uma estrutura de escolha, usamos este método para selecionar ou escolher uma opção verdadeira, que também pode ser usada para criar um menu em um programa. Para usar esta estrutura de seleção em C usamos o switch.  

**Estrutura:**

![Exemplo de código](/estruturacondicional5.png)  

O switch vai comparar o conteúdo de uma variável com valores definidos para cada ‘case’. Se ele achar uma opção (case) que seja igual, ele vai rodar o código que vem após esse case, e antes do próximo case parando no break. Caso nenhum case seja igual ao conteúdo da variável, o código executará a opção default.
O uso do break evita testar as demais alternativas de forma desnecessária quando uma opção verdadeira já foi encontrada. Basicamente o break irá funcionar de forma que pare o switch.
O default é usado como uma espécie de “caso de exceção” dentro da estrutura switch na linguagem C. Caso nenhuma das opções foi escolhida o default acontece.
Agora vou mostrar um exemplo desta estrutura em uso:  
  
![Exemplo de código](/estruturacondicional6.jfif)  

Como podemos ver acima, caso o usuário escolher a letra A, irá aparecer “Bom dia” e o break vai parar o switch. E isso se repete se o usuário escolher outra letra, caso ele não escolha nenhuma, o default irá rodar e aparecer a mensagem erro.  
Para facilitar o entendimento abaixo podemos compreender a estrutura de seleção acima utilizando um Fluxograma:  

![Exemplo de código](/estruturacondicional7.png)  

O switch é uma maneira bem prática e fácil de ser usada em várias ocasiões.  
Como eu já expliquei sobre as estruturas condicionais eu irei falar sobre as estruturas de repetição, que é um tema totalmente diferente do anterior.


`,
                image: null,
            },
            {
                text: "Estruturas de repetição ",
                contentMd: `
Em algoritmo a estrutura de seleção pode ser conhecida como uma estrutura de escolha, usamos este método para selecionar ou escolher uma opção verdadeira, que também pode ser usada para criar um menu em um programa. Para usar esta estrutura de seleção em C usamos o switch.  

**Estrutura “for”:**

![Exemplo de código](/estruturacondicional8.png)  


Com o for, você não precisa de inicialização fora dele não é obrigatório, você pode colocar a inicialização dentro. A diferença é que a estrutura é um pouco mais complexa, e tudo fica embutido no comando. E o for é similar ao while.

**Como vai funcionar o for?**
A primeira vez que a máquina encontrar o for, ela vai executar a inicialização, na primeira vez e nas outras também a condição é testada, e se a condição for verdadeira a máquina executa o bloco de comandos. E quando executar o primeiro bloco de comando, nós incrementamos a variável de controle. E isto vai até a condição de parada.

**Agora vou mostrar um exemplo desta estrutura em uso:**

![Exemplo de código](/estruturacondicional9.png)  

**Mas o que está acontecendo com o programa?**
Como podemos ver, nós não inicializamos fora do for, foi inicializado dentro dele. Na primeira vez o i está valendo 0, e ele vai ver se 0 é menor ou igual a 10. Se sim, o bloco de comando é executado, porém não encerra a execução. Porque nós temos ainda a incrementação que é i++.
**Mas então o que o i++ faz?**
O i++ pega o valor de i, soma em uma unidade, e joga para dentro do próprio i. Então se o i valia 0, após a soma, você está fazendo o i passar de 0 para 1. Porém quando você chegar no fim do bloco de comandos, antes de prosseguir o programa vai avaliar de novo a expressão, se 1 é menor ou igual a 10. E isto vai se repetir até quebrar o processo e o i chegar ao 10.
**E como é a saída de dados?**

![Exemplo de código](/estruturacondicional10.png)  
A saída de dados desde nosso programa é de 0 a 10, por conta de ser um laço de repetição e porque nós temos a incrementação como foi dito logo acima.
**Estrutura do “while”:**
![Exemplo de código](/estruturacondicional11.png)  
Substitui este campo condição por uma expressão lógica relacional. E se a condição for verdadeira, executa-se o bloco de comandos, quando chegar ao fim do bloco de comandos, vai testar se a condição é verdadeira até a condição de parada.
**Agora vou mostrar um exemplo desta estrutura em uso:**
![Exemplo de código](/estruturacondicional12.png)  
**Mas o que está acontecendo com o programa?**
Como podemos ver o i começa valendo 0, e dentro do while nós estamos fazendo a comparação se i (0) é menor ou igual a 10. Se sim o bloco de comando vai ser executado e vai imprimir 0 na tela. Porém ainda não terminou.
**Mas então o que o i++ faz?**
O i++ pega o valor de i, soma em uma unidade, e joga para dentro do próprio i. Então se o i valia 0, após a soma, você está fazendo o i passar de 0 para 1. Porém quando você chegar no fim do bloco de comandos, antes de prosseguir o programa vai avaliar de novo a expressão, se 1 é menor ou igual a 10. E isto vai se repetir até quebrar o processo e o i chegar ao 10.
**Mas você não precisa colocar i++, porque pode confundir no começo. Então você também pode escrever desta maneira:**
variável = variável+1;
No nosso exemplo acima: i = i+1;
Como podemos ver no exemplo acima, a inicialização começa valendo 0, a inicialização no comando while não é obrigatório, mas é necessária para saber se deve continuar executando ou parar.
**Mas e se não tiver inicialização?**
Se você fizer isso, você vai apenas declarar o i, mas ele não vai ter inicializado com um valor. E então ele vai poder conter qualquer lixo de memória, e isso pode causar comportamento imprevisível ou até travar o programa.
**E como é a saída de dados?**
![Exemplo de código](/estruturacondicional10.png)  
A saída de dados desde nosso programa é de 0 a 10, por conta de ser um laço de repetição e porque nós temos a incrementação como foi dito logo acima.
**Estrutura do “do-while”:**
![Exemplo de código](/estruturacondicional14.png)  
O do-while é similar ao while, porém a estrutura é diferente. Como podemos ver o bloco de comando no do-while é executado, obrigatoriamente ao menos 1x e a condição é avaliada somente ao final. A inicialização também é ao lado de fora, não podendo estar dentro, porque o do-while não possui um espaço próprio para a inicialização como o for.
**Agora vou mostrar um exemplo desta estrutura em uso:**
![Exemplo de código](/estruturacondicional13.png) 
Como vemos a inicialização é iniciada fora dela, como foi explicado. O i começa valendo 1 e no primeiro momento a máquina já imprimi na tela o número 1. Após isto temos a incrementação e o i que valia 1 agora passa valendo 2, e neste momento ele vai ser avaliado se 2 é menor ou igual a 10. Se sim, tudo irá se repetir até que em algum momento o i passe a valer 10.
Porém e se nós colocarmos o valor de i valendo 11? Sendo um valor que já quebra a condição.
**O que vai acontecer?**
Se fosse no comando “while” ele não iria nem imprimir na tela. Mas o do-while obrigatoriamente executa o bloco de comando por pelo menos 1x. Então mesmo se o i valha 11, e ele não seja menor ou igual a 10 ele irá aparecer na tela por conta do, “do” obrigar o bloco de comando a ser executado obrigatoriamente.
`,
                image: null,
            }

        ],
        exercises: [
            {
                title: "Exercício 1",
                content: "Faça um programa que peça um valor e mostre na tela se é positivo ou negativo. ",
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 2",
                content: "Faça um programa que peça um número e imprima se o número é par ou ímpar. ",
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 3",
                content: `Faça um programa que peça três notas de um aluno e calcule a média. Analisar a média e imprimir uma das mensagens a seguir: a)
A mensagem “Aprovado”, se a média for maior ou igual a 7, com a respectiva média alcançada.
b)
A mensagem “Reprovado”, se a média for menor do que 7, com a respectiva média alcançada.
c)
A mensagem “Aprovado com Distinção”, se a média for igual a 10.`,
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 4",
                content: `Faça um programa que verifique se a letra digitada for: F ou M e imprima uma mensagem: masculino, feminino ou sexo inválido.`,
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 5",
                content: `Faça um programa que pergunte que turno você estuda. Peça para digitar M-Matutino, V-Vespertino ou N-Noturno. Imprima a mensagem Bom Dia, Boa tarde, Boa Noite ou Valor Inválido, conforme o caso.`,
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 6",
                content: `Faça um programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2-Segunda,etc), se digitar outro valor deve aparecer valor inválido.`,
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 7",
                content: `Peça ao usuário para digitar um número inteiro. Mostre a tabuada desse número, de 1 até 10.`,
                image: null,
                options: [
                ],
                answer: null
            },
            {
                title: "Exercício 8",
                content: `Peça ao usuário que digite uma senha. Enquanto a senha digitada estiver incorreta (ex: “1234”), o programa deve pedir novamente.`,
                image: null,
                options: [
                ],
                answer: null
            }

        ],
    },
    {
        thumb: "/linguagemc.png",
        title: {
            text: "Entrada e saída de dados em C ",
            content: "",
            image: null,
        },
        subtitles: [
            {
                text: "Introdução ",
                contentMd: `
A linguagem C é uma das mais poderosas e populares da programação, especialmente em sistemas embarcados e desenvolvimento de software de baixo nível. Uma das operações fundamentais é a comunicação com o usuário, feita por meio da entrada (input) e saída (output) de dados. 
Essas operações permitem criar programas interativos que recebem dados do usuário, processam essas informações e exibem resultados. 
`},
            {
                text: "A biblioteca stdio.h ",
                contentMd: `
A linguagem C é uma das mais poderosas e populares da programação, especialmente em sistemas embarcados e desenvolvimento de software de baixo nível. Uma das operações fundamentais é a comunicação com o usuário, feita por meio da entrada (input) e saída (output) de dados. 
Essas operações permitem criar programas interativos que recebem dados do usuário, processam essas informações e exibem resultados.
Para utilizar funções de entrada e saída, é necessário incluir a biblioteca padrão: 

#include <stdio.h> 

Essa biblioteca fornece as principais funções: 

printf() → exibe dados no terminal. 

scanf() → lê dados digitados pelo usuário. 

fgets() → lê strings com espaços. 

putchar() e getchar() → manipulam caracteres individuais. 
`},
            {
                text: "Saída com printf() ",
                contentMd: `
A função printf() escreve mensagens e valores na tela. Ela usa especificadores de formato para imprimir diferentes tipos de dados. 

Tipo de dado	Especificador	Exemplo 

Inteiro	%d ou %i	printf("%d", idade); 

Float	%f	printf("%.2f", nota); 

Caractere	%c	printf("%c", letra); 

String	%s	printf("%s", nome); 
`},
            {
                text: "Entrada com scanf() ",
                contentMd: `
A função scanf() lê dados do teclado e armazena em variáveis. Para isso, é necessário utilizar o operador &, que passa o endereço da variável. 

Exemplo: 

int idade; 
scanf("%d", &idade); 
Para strings: 
char nome[50]; 
scanf("%s", nome);  // Sem o & nesse caso 
int idade = 21; 
float peso = 65.5; 
printf("Idade: %d, Peso: %.1f kg \n", idade, peso); 
`},
            {
                text: "Boas práticas ",
                contentMd: `
Sempre use & em variáveis não string no scanf(). 

Limpe o buffer com getchar() após scanf() antes de fgets(). 

Evite nomes de variáveis ambíguos. 

Use mensagens claras ao usuário. 

Entrada e Saída de Caracteres Individuais 

getchar() → Lê um caractere. 

putchar() → Exibe um caractere. 

char letra; 

letra = getchar(); 

putchar(letra); 
`},
            {
                text: "Conclusão ",
                contentMd: `
Dominar a entrada e saída de dados é essencial para qualquer programador C. Compreender bem o uso de printf(), scanf(), fgets() e os demais permite criar aplicações funcionais e amigáveis. 
`}
        ],
        exercises: [
            {
                title: "Exercício 1",
                content: "Qual das funções a seguir é usada para exibir dados na tela em C? ",
                image: null,
                options: [
                    { text: "scanf()", correct: false },
                    { text: "printf()", correct: true },
                    { text: "fgets()", correct: false },
                    { text: "getchar()", correct: false }
                ],
                answer: "printf()"
            },
            {
                title: "Exercício 2",
                content: " Qual das funções abaixo é adequada para ler um número inteiro digitado pelo usuário? ",
                image: null,
                options: [
                    { text: "scanf()", correct: true },
                    { text: "printf()", correct: false },
                    { text: "fgets()", correct: false },
                    { text: "puts()", correct: false }
                ],
                answer: "scanf()"
            },
            {
                title: "Exercício 3",
                content: "Qual especificador de formato é usado para imprimir um número com ponto flutuante (float)? ",
                image: null,
                options: [
                    { text: "%d", correct: false },
                    { text: "%c", correct: false },
                    { text: "%s", correct: false },
                    { text: "%f", correct: true }
                ],
                answer: "%f"
            }
        ],
    },
];
