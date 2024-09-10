let bandas = [
    {
        titulo: "Rush",
        cantor: {
            nome: "Geddy",
            sobrenome: "Lee"
        },
        descricao: "Rush é uma banda canadense que marcou época no rock progressivo.",
        link: "https://www.rush.com/"
    },
    {
        titulo: "Guns N' Roses",
        cantor: {
            nome: "Axl",
            sobrenome: "Rose"
        },
        descricao: "Os Guns N' Roses são uma das bandas de hard rock mais influentes.",
        link: "https://www.gunsnroses.com/"
    },
    {
        titulo: "Bruce Springsteen",
        cantor: {
            nome: "Bruce",
            sobrenome: "Springsteen"
        },
        descricao: "Bruce Springsteen é um ícone do rock and roll.",
        link: "https://www.brucespringsteen.net/"
    },
    {
        titulo: "Metallica",
        cantor: {
            nome: "James",
            sobrenome: "Hetfield"
        },
        descricao: "Metallica é uma das bandas de thrash metal mais influentes.",
        link: "https://www.metallica.com/"
    },
    {
        titulo: "Pink Floyd",
        cantor: {
            nome: "Roger",
            sobrenome: "Waters"
        },
        descricao: "Pink Floyd é uma das bandas mais inovadoras e influentes.",
        link: "https://www.pinkfloyd.com/"
    }
];

document.getElementById('pesquisarBtn').addEventListener('click', function() {
    const input = document.getElementById('bandaInput').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpa resultados anteriores

    const bandaEncontrada = bandas.find(banda => banda.titulo.toLowerCase() === input);

    if (bandaEncontrada) {
        resultadoDiv.innerHTML = `
            <h2>${bandaEncontrada.titulo}</h2>
            <p>Cantor: ${bandaEncontrada.cantor.nome} ${bandaEncontrada.cantor.sobrenome}</p>
            <p>${bandaEncontrada.descricao}</p>
            <a href="${bandaEncontrada.link}" target="_blank">Mais informações</a>
        `;
    } else {
        resultadoDiv.innerHTML = '<p>Banda não encontrada.</p>';
    }
});