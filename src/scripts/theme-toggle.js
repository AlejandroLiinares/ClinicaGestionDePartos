const btn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

// Actualizar icono según el estado actual
function updateIcon() {
    if (document.body.classList.contains("dark")) {
        icon.src = "../../assets/svg/sun.svg"; // Oscuro → Sol
    } else {
        icon.src = "../../assets/svg/moon.svg"; // Claro → Luna
    }
}

// Ejecutar cuando la página carga
updateIcon();

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateIcon();
});
