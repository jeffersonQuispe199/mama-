function mostrarMensaje(tipo) {
    const mainCard = document.getElementById('main-card');
    const messageCard = document.getElementById('message-card');
    const recipientName = document.getElementById('recipient-name');
    const specialText = document.getElementById('special-text');

    mainCard.classList.add('hidden');
    messageCard.classList.remove('hidden');

    if (tipo === 'madre') {
        recipientName.innerText = "¡Feliz Día, Mamá!";
        specialText.innerText = "Mamá, gracias por estar siempre a mi lado, en las buenas y en las malas. Tu apoyo ha sido mi mayor fuerza y quiero que sepas que valoro cada sacrificio que has hecho por mí. Te quiero muchísimo";
    } else if (tipo === 'mujer') {
        recipientName.innerText = "¡Feliz Día, Mi Amor!";
        specialText.innerText = "A veces las palabras se quedan cortas, pero quiero que sepas que eres mi prioridad absoluta. Me la juego por ti y por lo nuestro cada día, sin dudarlo, porque eres todo lo que necesito para ser feliz. Gracias por ser mi compañera de vida.";
    }
}

function regresar() {
    document.getElementById('main-card').classList.remove('hidden');
    document.getElementById('message-card').classList.add('hidden');
}