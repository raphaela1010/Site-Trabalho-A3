function submitCadastro(event) {event.preventDefault(); //CADASTRO
    const nome =
    document.getElementById('nome').value;
    const cpf =
    document.getElementById('cpf').value;
    const email =
    document.getElementById('email').value;
    const telefone =
    document.getElementById('telefone').value;
    const time =
    document.getElementById('time').value;

    alert('Cadastro realizado com sucesso! Você já pode começar a jogar seu dinheiro fora :D');
}

function handleSubmit(event) {
    event.preventDefault();
    alert('Cadastro concluído com sucesso!');
    document.getElementById('apostasButton').style.display = 'block';
}

function goToApostas() {
    window.location.href = 'apostas.html';
}

function placeBet(event, match, odds) {
    event.preventDefault();
    
    const form = event.target;
    const selectedTeam = form.team.value;
    const amount = parseFloat(form.amount.value);
    
    if (selectedTeam && amount) {
        const potentialWin = amount * odds[selectedTeam];
        alert(`Você apostou R$${amount} em ${selectedTeam} no jogo ${match}.\nSeus possíveis ganhos é de R$${potentialWin.toFixed(2)}.`);
    } else {
        alert('Por favor, selecione um time e insira um valor válido.');
    }
}

function updatePotentialWin(form) { //APOSTAS
    const amount = form.amount.value;
    const selectedTeam = form.team.value;
    const odds = {
        'São Paulo': 2.50,
        'Corinthians': 4.70,
        'Empate': 3.00,
        'Palmeiras': 1.80,
        'Santos': 7.20,
        'Empate': 3.50
    };
    const potentialWinSpan = form.querySelector('.potential-win span');
    if (amount && selectedTeam) {
        const potentialWin = (amount * odds[selectedTeam]).toFixed(2);
        potentialWinSpan.textContent = `R$${potentialWin}`;
    } else {
        potentialWinSpan.textContent = 'R$0.00';
    }
}

function placeBet(event, match, odds) {
    event.preventDefault();
    const form = event.target;
    const amount = form.amount.value;
    const selectedTeam = form.team.value;
    if (amount && selectedTeam) {
        const winAmount = (amount * odds[selectedTeam]).toFixed(2);
        alert(`Você apostou R$${amount} em ${selectedTeam} no jogo ${match}. Você pode ganhar R$${winAmount}.`);
        form.reset();
        form.querySelector('.potential-win span').textContent = 'R$0.00';
    }
}

// Função para adicionar classe de animação ao título "Quem Somos"
function animateQuemSomos() {
    const quemSomosTitle = document.querySelector('.quem-somos h2');
    quemSomosTitle.classList.add('animate-fade-in');
}

// Adiciona a classe de animação após um pequeno atraso
window.onload = function() {
    setTimeout(animateQuemSomos, 1000); // Adiciona a classe após 1 segundo
};

document.addEventListener("DOMContentLoaded", function() {
    const bodyId = document.body.id;
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (bodyId === "pagina-inicial" && href === "index.html" ||
            bodyId === "pagina-cadastro" && href === "cadastro.html" ||
            bodyId === "pagina-apostas" && href === "apostas.html") {
            link.classList.add("active");
        }
    });
});
