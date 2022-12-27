let musicas = [
    { titulo: 'That is What It Takes (Clean) - NEFFEX', artista: 'Neffex', src: 'music/That is What It Takes (Clean) - NEFFEX.mp3', img: 'img/ethan-judd-yVKGWunM960-unsplash.jpg' },
    { titulo: 'Tell Me That I Can not (Clean) - NEFFEX', artista: 'Neffex', src: 'music/Tell Me That I Can not (Clean) - NEFFEX.mp3 - NEFFEX.mp3', img: 'img/lukas-k-jD2Zk7MauZ8-unsplash.jpg' },
    { titulo: 'Statement (Clean)', artista: 'Neffex', src: 'music/Statement (Clean) - NEFFEX.mp3', img: 'img/imani-bahati-LxVxPA1LOVM-unsplash.jpg' },



];
let musica = document.querySelector('audio');
let indexMusica = 1;

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.describe h2');
let nomeArtista = document.querySelector('.describe i');

duracaoMusica.textContent = segToMin(Math.floor(musica.duration));


document.querySelector('.btn-play').addEventListener('click', iniciarMusica);

document.querySelector('.btn-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
})

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
})



function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segToMin(Math.floor(musica.duration));
    });
}

function iniciarMusica() {
    musica.play();
    document.querySelector('#btt').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('#btt').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoCorrido = document.querySelector('.inicio');
    tempoCorrido.textContent = segToMin(Math.floor(musica.currentTime));
}

function segToMin(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}