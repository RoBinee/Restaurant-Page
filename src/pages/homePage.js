import { createElement } from '../createElement.js';

const homeContent = (function () {
  const homePage = createElement('div', undefined, undefined, 'homePage');
  const data = {
    title: 'Pelax Restaurant',
    intro:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,voluptatum expedita tempore eaque at numquam. Sequi iste voluptatem ducimus nulla.',
  };
  const title = createElement('h1', 'title', data.title);
  const intro = createElement('p', 'intro', data.intro);

  homePage.append(title, intro);
  return homePage;
})();

export { homeContent };
