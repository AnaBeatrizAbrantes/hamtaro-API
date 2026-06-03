const API_URL = "";

async function fetchHamsters() {
    const container = document.getElementById('hamtaro-container');
    
    try {
        container.innerHTML = "<p>Carregando amigos espere um momento...</p>";

        const response = await fetch(API_URL);
        
        const hamsters = await response.json();

        container.innerHTML = "";

        hamsters.forEach(hamster => {
            const card = document.createElement('div');
            card.classList.add('hamtaro-card');

            card.innerHTML = `
                <img src="${hamster.img}" alt="${hamster.name}">
                <h2>${hamster.name}</h2>
                <p>${hamster.desc}</p>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        container.innerHTML = "<p>Ah não! Ocorreu um erro ao carregar, por favor, tente novamente!!</p>";
    }
}

window.onload = fetchHamsters;