// public/js/theme.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');
  const body = document.body;
  const storedTheme = localStorage.getItem('theme') || 'light';

  if (storedTheme === 'dark') {
    body.classList.add('dark-mode');
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const newTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
  });
});