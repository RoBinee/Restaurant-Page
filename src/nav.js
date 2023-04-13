import { createElement } from './createElement.js';

export const nav = (function () {
  const nav = createElement('nav', 'nav');
  const ul = createElement('ul');
  let navItems = ['Home', 'Menu', 'Contact'];

  navItems = navItems.map((item) => {
    return createElement('li', 'list', item);
  });
  ul.append(...navItems);
  nav.append(ul);
  return nav;
})();
