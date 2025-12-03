const btn = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    // Cambia el icono sol/luna
    if (document.body.classList.contains("light")) {
        icon.src = "../../assets/svg/moon.svg";
    } else {
        icon.src = "../../assets/svg/sun.svg";
    }
});