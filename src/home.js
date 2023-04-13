function createElement(type, className, text) {
  const newElement = document.createElement(type);

  if (className || text) {
    //if there is a need to set class or text
    if (className) newElement.classList.add(className);
    if (text) newElement.textContent = text;
  }

  return newElement;
}

function loadHomePage() {
  //1.render nav
  /**
   * structure of nav
   * nav.nav > ul > li[class="link"]
   */
  const nav = (function () {
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

  //2.render header
  /**
   * structure of header
   * header > div.container> h1 + p
   */
  const header = (function () {
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

  //3.render footer
  /**
   * footer > p
   */
  const footer = (function () {
    const footer = createElement('footer', 'footer');
    const para = createElement('p', undefined, 'Copyright © 2023 Robinee');
    footer.append(para);
    return footer;
  })();
  console.log(footer);

  return { nav, header, footer };
}

export { loadHomePage };
