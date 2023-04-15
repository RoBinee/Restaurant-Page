import { createElement } from '../createElement.js';

const aboutContent = (function () {
  const aboutPage = createElement('div', undefined, undefined, 'aboutPage');
  const text = {
    subTitle: 'About',
    shortLorem: 'Lorem ipsum dolor sit amet',
    longLorem:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloreseaque cumque nihil ipsam a deleniti hic fuga nesciunt dolorumiure, aspernatur velit minus ex facilis. Animi aliquid excepturivitae iste! Lorem ipsum dolor sit amet consectetur adipisicingelit. Illum in itaque similique id perferendis vero fugitaccusamus vel veniam facilis minus nostrum dicta adipisci alias,placeat debitis nemo possimus at',
  };
  const subTitle = createElement('h2', 'sub-title', text.subTitle);
  const h3 = createElement('h3', undefined, text.shortLorem);
  const p = createElement('p', undefined, text.longLorem);

  aboutPage.append(subTitle, h3, p);
  console.log(aboutPage);

  return aboutPage;
})();

export { aboutContent };
