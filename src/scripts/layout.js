/* ==============================
   CARGA DINÁMICA DE COMPONENTES
   ============================== */

async function loadComponent(id, url) {
    const container = document.getElementById(id);
    if (!container) return;

    const response = await fetch(url);
    const content = await response.text();
    container.innerHTML = content;
}

/* ==============================
   RESTAURAR TEMA (LIGHT/DARK)
   ============================== */

function restoreTheme() {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.toggle("light", savedTheme === "light");
}

/* ==============================
   INICIALIZACIÓN DEL LAYOUT
   ============================== */

document.addEventListener("DOMContentLoaded", async () => {
    restoreTheme();

    // Cargar componentes
    await loadComponent("sidebar-container", "../components/sidebar.html");
    await loadComponent("topbar-container", "../components/topbar.html");
});
