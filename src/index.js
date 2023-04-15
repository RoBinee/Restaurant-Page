import './style.css';
import { renderPage } from './initialPage.js';
import { homeContent } from './pages/homePage.js';
import { menuContent } from './pages/menuPage.js';
import { aboutContent } from './pages/aboutPage.js';

window.addEventListener('DOMContentLoaded', () => {
  renderPage();

  const container = document.querySelector('.container');
  const lists = document.querySelectorAll('li');

  function changeContent(e) {
    const menu = e.currentTarget.textContent;
    const oldChild = container.firstChild;
    if (menu === 'Home') {
      container.replaceChild(homeContent, oldChild);
    } else if (menu === 'Menu') {
      container.replaceChild(menuContent, oldChild);
    } else if (menu === 'About') {
      container.replaceChild(aboutContent, oldChild);
    }
  }

  lists.forEach((list) => {
    list.addEventListener('click', (e) => {
      changeContent(e);
    });
  });
});
