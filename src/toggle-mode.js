let darkMode = true;
const buttonToggle = document.querySelector("#toggle-mode")

buttonToggle.addEventListener("click", (e) => {
    document.documentElement.classList.toggle("light");

    const mode = darkMode ? "Light" : "Dark";

    e.currentTarget
        .querySelector("span").textCotent = `${mode} mode ativado`

    darkMode = !darkMode
})