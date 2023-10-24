const imagem = document.getElementById('imagem');
const audio = document.getElementById('audio');

imagem.addEventListener('mouseenter', () => {
    audio.play(); // Reproduz o áudio ao passar o mouse sobre a imagem
});

imagem.addEventListener('mouseleave', () => {
    audio.pause(); // Pára o áudio ao retirar o mouse da imagem
    audio.currentTime = 0; // Reinicia o áudio para o início
});


// Função para criar estrelas piscantes
function criarEstrelas(quantidade, piscantes) {
    for (let i = 0; i < quantidade; i++) {
        const estrela = document.createElement('div');
        estrela.classList.add('estrela');
        document.body.appendChild(estrela);

        if (i >= piscantes) {
            // Defina uma classe especial para estrelas acesas
            estrela.classList.add('acesa');
        }

        const tamanho = Math.random() * 3;
        estrela.style.width = tamanho + 'px';
        estrela.style.height = tamanho + 'px';
        estrela.style.left = Math.random() * window.innerWidth + 'px';
        estrela.style.top = Math.random() * window.innerHeight + 'px';

        const duracao = Math.random() * 2 + 1;
        estrela.style.animation = `piscar ${duracao}s infinite`;
    }
}

// Crie 900 estrelas acesas e 100 estrelas piscantes
criarEstrelas(1000, 900);
