const dados = [...document.querySelectorAll('form > div > :nth-child(1)')];

dados.map((element) => {
    element.addEventListener('change', () => {
        if (element.value != "") {
            element.classList.add('conteudo');
        } else {
            element.classList.remove('conteudo');
        }
    });
});