import background from './images/background.jpg';
import './style.css';
import { renderPage } from './initialPage.js';
import { homeContent } from './pages/homePage.js';
import { menuContent } from './pages/menuPage.js';
import { aboutContent } from './pages/aboutPage.js';
/**
 *  appending each new element to div#content once the page is first loaded.
 * write this initial page-load function inside of its own module and then import and call it inside of index.js.
 */

renderPage();

const container = document.querySelector('.container');
//insert menu content into container
const lists = document.querySelectorAll('li');
lists.forEach((list) => {
  list.addEventListener('click', (e) => {
    const menu = e.currentTarget.textContent;
    if (menu === 'Home') {
      console.log('render homepage');
      container.innerHTML = homeContent;
    } else if (menu === 'Menu') {
      console.log('render menu page');
      container.innerHTML = menuContent;
    } else if (menu === 'About') {
      console.log('render About page');
      container.innerHTML = aboutContent;
    }
  });
});
