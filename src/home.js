import { nav } from './nav.js';
import { header } from './header.js';
import { footer } from './footer.js';

function loadHomePage() {
  const content = document.getElementById('content');
  content.append(nav, header, footer);

  const lists = document.querySelectorAll('li');
  lists.forEach((list) => {
    list.addEventListener('click', (e) => {
      const menu = e.currentTarget.textContent;
      if (menu === 'Home') {
        console.log('render homepage');
      } else if (menu === 'Menu') {
        console.log('render menu page');
      } else if (menu === 'Contact') {
        console.log('render contact page');
      }
    });
  });
}

export { loadHomePage };
