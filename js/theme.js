const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("claro");
}

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});
