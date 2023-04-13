import { createElement } from './createElement.js';

export const header = (function () {
  const header = createElement('header');
  const container = createElement('div', 'container');
  container.innerHTML = `<h1>Restaurant Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        voluptatum expedita tempore eaque at numquam. Sequi iste voluptatem
        ducimus nulla.
      </p>`;
  header.append(container);
  return header;
})();
