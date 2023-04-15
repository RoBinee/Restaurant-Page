import { createElement } from '../createElement.js';

const homeContent = (function () {
  const homePage = createElement('div', undefined, undefined, 'homePage');
  const text = {
    title: 'Pelax Restaurant',
    intro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,voluptatum expedita tempore eaque at numquam. Sequi iste voluptatem ducimus nulla.',
  };
  const title = createElement('h1', 'title', text.title);
  const intro = createElement('p', 'intro', text.intro);

  homePage.append(title, intro);
  return homePage;
})();

export { homeContent };
