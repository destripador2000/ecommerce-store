const themeToggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement | null;

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const body = document.body;
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Modo Claro';
        } else {
            themeToggleBtn.textContent = 'Modo Oscuro';
        }
    });
}
