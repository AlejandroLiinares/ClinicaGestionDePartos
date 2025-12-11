// =========================================
// EFECTO DE FONDO SIGUIENDO EL MOUSE
// =========================================

// Esperamos a que el DOM esté listo para asegurar que podemos acceder al 'body'
document.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.body;

    document.addEventListener('mousemove', (e) => {
        // 1. Obtener las coordenadas del mouse en la ventana
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // 2. Calcular la posición como porcentaje del ancho/alto total de la ventana
        // (toFixed(1) es para que no tenga demasiados decimales)
        const xDecimal = (mouseX / window.innerWidth * 100).toFixed(1);
        const yDecimal = (mouseY / window.innerHeight * 100).toFixed(1);

        // 3. Actualizar las variables CSS en el body
        bodyElement.style.setProperty('--mouse-x', `${xDecimal}%`);
        bodyElement.style.setProperty('--mouse-y', `${yDecimal}%`);
    });
    
    // (Opcional) Si el mouse sale de la ventana, devolver el foco al centro suavemente
    document.addEventListener('mouseleave', () => {
         bodyElement.style.setProperty('--mouse-x', '50%');
         bodyElement.style.setProperty('--mouse-y', '50%');
    });
});