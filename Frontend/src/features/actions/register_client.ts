const themeToggleBtn = document.getElementById('theme-toggle') as HTMLButtonElement | null;

if (themeToggleBtn){
  themeToggleBtn.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode')
  })
}
