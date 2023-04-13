import { createElement } from './createElement.js';

export const footer = (function () {
  const footer = createElement('footer', 'footer');
  const para = createElement('p', undefined, 'Copyright © 2023 Robinee');
  footer.append(para);
  return footer;
})();
