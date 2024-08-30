const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');
const btnRedirectElement = document.querySelector('#redirect');

btnCloseElement.disabled = true;
btnRedirectElement.style.display = 'none';

btnOpenElement.addEventListener('click', () => {
    btnOpenElement.disabled = true;
    btnCloseElement.disabled = false;

    const coverElement = document.querySelector('.cover');
    coverElement.classList.add('open-cover');

    setTimeout(() => {
        coverElement.style.zIndex = -1;

        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');

        // Crear y animar múltiples corazones
        createHearts(10); // Puedes ajustar el número de corazones que desees

        // Mostrar el botón de redirección
        btnRedirectElement.style.display = 'block';
    }, 500);
});

btnCloseElement.addEventListener('click', () => {
    btnOpenElement.disabled = false;
    btnCloseElement.disabled = true;

    const coverElement = document.querySelector('.cover');
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('open-paper');
    paperElement.classList.add('close-paper');

    setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');

        // Remover todos los corazones después de cerrar la carta
        removeHearts();

        // Ocultar el botón de redirección
        btnRedirectElement.style.display = 'none';
    }, 500);
});

btnRedirectElement.addEventListener('click', () => {
    window.location.href = 'nueva_pagina.html';
});

// Función para crear múltiples corazones
function createHearts(count) {
    const container = document.querySelector('.container-letter');
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('span');
        heart.className = 'heart';
        heart.textContent = '♥';
        heart.style.left = `${Math.random() * 80 + 10}%`; // Posición horizontal aleatoria
        heart.style.top = `${Math.random() * 80 + 10}%`;  // Posición vertical aleatoria
        heart.style.display = 'block';
        heart.style.animationDelay = `${Math.random()}s`; // Retraso de animación aleatorio
        container.appendChild(heart);

        // Eliminar el corazón del DOM después de la animación
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// Función para eliminar todos los corazones
function removeHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => heart.remove());
}
