const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
});
