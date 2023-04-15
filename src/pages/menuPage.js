import { createElement } from '../createElement';
import pizza from '../images/pizza.jpg';
import steak from '../images/steak.jpg';
import salmon from '../images/salmon.jpg';
import cocktail from '../images/cocktail.jpg';

function createImg(src, alt, className) {
  //set src, alt, class
  const img = new Image();
  img.src = src;
  img.alt = alt;
  img.classList.add(className);
  return img;
}
const menuContent = (function () {
  const menuPage = createElement('div', undefined, undefined, 'menuPage');
  const subTitle = createElement('h2', 'sub-title', 'Menu');
  const data = [
    {
      name: 'Pizza',
      img: pizza,
      text: 'flattened disk of bread dough topped with some combination of olive oil',
      price: '13$',
    },
    {
      name: 'Steak',
      img: steak,
      text: 'Tender, juicy, cooked perfectly and perfectly seasoned',
      price: '20$',
    },
    {
      name: 'Salmon',
      img: salmon,
      text: 'high protein content and omega-3 fatty acids',
      price: '18$',
    },
    {
      name: 'Cocktail',
      img: cocktail,
      text: 'mixed with other ingredients such as juices, flavored syrups, tonic water',
      price: '9$',
    },
  ];

  const cardContainer = createElement('section', 'menu-content');
  data.forEach((item) => {
    const { name, img, text, price } = item;
    const card = createElement('article', 'menu-card');
    // card > img.menu-img + div.menu-desc
    const menuImg = createImg(img, name, 'menu-img');

    //div.menu-desc> div + p
    const menuDesc = createElement('div', 'menu-desc');

    // div > h3.menu-name + h4.menu-price
    const div = createElement('div');
    const menuName = createElement('h3', 'menu-name', name);
    const menuPrice = createElement('h4', 'menu-price', price);
    div.append(menuName, menuPrice);

    const para = createElement('p', undefined, text);

    menuDesc.append(div, para);

    card.append(menuImg, menuDesc);

    //add to menuPage
    cardContainer.append(card);
  });
  menuPage.append(subTitle, cardContainer);

  return menuPage;
})();

export { menuContent };
