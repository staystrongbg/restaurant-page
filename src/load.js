// window.addEventListener('load', loaded);
const content = document.getElementById('content');
const div = document.createElement('div');
content.appendChild(div);
div.classList.add('menu');
const menu = document.querySelector('.menu');

function loaded() {
  console.log(menu);

  menu.classList.add('bcg-img');
  menu.style.gridTemplateColumns = '1fr';
  menu.style.maxWidth = '100vw';
  menu.style.margin = 0;
  menu.style.padding = 0;
  menu.style.height = '100vh';
  // menu.classList.add('bcg-img');
  menu.innerHTML = /*html*/ `<h1 class='load-scr-h'>Welcome to our restaurant</h1>
`;
}

export { loaded };

// 063 587 016 dr Veselinovic
