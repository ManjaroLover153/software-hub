// main.js

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('#software-list a');

  links.forEach(link => {
    link.addEventListener('click', () => {
      alert(`Thanks for downloading: ${link.textContent}`);
    });
  });
});
