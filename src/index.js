import './style.css';
import { renderPage } from './initialPage.js';
import { homeContent } from './pages/homePage.js';
import { menuContent } from './pages/menuPage.js';
import { aboutContent } from './pages/aboutPage.js';

window.addEventListener('DOMContentLoaded', renderPage);

const container = document.querySelector('.container');
const lists = document.querySelectorAll('li');
lists.forEach((list) => {
  list.addEventListener('click', (e) => {
    const menu = e.currentTarget.textContent;
    if (menu === 'Home') {
      container.removeChild(container.firstChild);
      container.appendChild(homeContent);
    } else if (menu === 'Menu') {
      container.removeChild(container.firstChild);
      container.appendChild(menuContent);
    } else if (menu === 'About') {
      container.removeChild(container.firstChild);
      container.appendChild(aboutContent);
    }
  });
});
