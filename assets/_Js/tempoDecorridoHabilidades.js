// Função para atualizar dinamicamente o tempo decorrido das habilidades ou experiências
function updateMonths() {
    // Obter a data atual
    const today = new Date();
    // Selecionar todos os elementos com a classe '.tempo-habilidades'
    const elements = document.querySelectorAll('.tempo-habilidades');
    // Iterar sobre cada elemento
    elements.forEach(element => {
        // Obter a data de início da habilidade ou experiência do atributo 'data-start-date'
        const startDate = new Date(element.getAttribute('data-start-date'));
        // Calcular a diferença em meses entre a data atual e a data de início
        const diffInMonths = Math.floor((today - startDate) / (1000 * 60 * 60 * 24 * 30.44)); // Aproximadamente meses
        // Verificar se a diferença é de pelo menos 1 ano
        if (diffInMonths >= 12) {
            // Se for, calcular e exibir o tempo em anos
            const years = Math.floor(diffInMonths / 12);
            element.textContent = `${years} Ano${years !== 1 ? 's' : ''}`;
        } else {
            // Caso contrário, exibir o tempo em meses
            element.textContent = `${diffInMonths} Mês${diffInMonths !== 1 ? 'es' : ''}`;
        }
    });
}

// Chamar a função inicialmente para exibir o tempo decorrido ao carregar a página

updateMonths();

// Atualizar a contagem dos meses a cada 1 segundo
setInterval(updateMonths, 1000);
