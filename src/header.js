import { createElement } from './createElement.js';

export const header = (function () {
  const header = createElement('header');
  const container = createElement('div', 'container');
  container.innerHTML = `<div id="homePage">
    <h1 class="title">Restaurant Page</h1>
      <p class="intro">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        voluptatum expedita tempore eaque at numquam. Sequi iste voluptatem
        ducimus nulla.
      </p>
  </div>`;
  header.append(container);
  return header;
})();
