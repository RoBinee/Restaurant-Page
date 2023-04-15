import { createElement } from './createElement.js';
import { homeContent } from './pages/homePage.js';
export const header = (function () {
  const header = createElement('header');
  const container = createElement('div', 'container');
  container.append(homeContent);
  header.append(container);
  return header;
})();
