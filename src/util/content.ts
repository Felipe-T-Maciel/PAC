//
// Adicionar conteúdo de cada página junto com as imagens
//

export const contents = [
    {
        "thumb": "/",  //capa de fundo
        "title": {
            "text": " ", //titulo do conteudo
            "image": "/", // imagem dps do texto do conteudo
            "content": [""] // texto do conteudo
        },
        "subtitles": [{
            "text": "", // subtitulo do conteudo (se houver, precisa de um espaço no final da string)
            "image": "/", // imagem dps do texto do conteudo
            "content": "" // texto do conteudo
        }, {
            "text": "",
            "image": "",
            "content": ""
        }],
        "exercises": [{
            "title": "",  // titulo do exercicio (se houver) (precisa de um espaço no final da string)
            "content": "", // descritivo do exercicio
            "image": "", // imagem dps do texto do exercicio (se houver)
            "options": [
                { "text": "", "correct": true }, // text - texto da opcao, correct - se a opcao esta correta ou nao (true ou false)
                { "text": "", "correct": false },
                { "text": "", "correct": false },
                { "text": "", "correct": false }
            ]
        }]
    },
];