// Este arquivo contém o código JavaScript que adiciona interatividade ao site, como manipulação de eventos e funcionalidades dinâmicas. 

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de manipulação de evento
    const button = document.getElementById('myButton');
    if (button) {
        button.addEventListener('click', function() {
            alert('Botão clicado!');
        });
    }

    // Outras funcionalidades dinâmicas podem ser adicionadas aqui
});