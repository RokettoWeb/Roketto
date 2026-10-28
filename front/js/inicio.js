// Vídeo de fondo de Inicio: solo se reproduce si la persona no tiene activado
// "reducir movimiento" en su sistema. Si lo tiene, se queda la imagen de portada.
const video = document.getElementById('videoFondo');
const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)');

function actualizarVideo() {
    if (reducirMovimiento.matches) {
        video.pause();
        video.currentTime = 0;
        video.load(); // vuelve a mostrar la imagen de portada (poster)
    } else {
        video.play().catch(() => {}); // si el navegador bloquea la reproducción, se ve la portada
    }
}

if (video) {
    actualizarVideo();
    reducirMovimiento.addEventListener('change', actualizarVideo);
}
