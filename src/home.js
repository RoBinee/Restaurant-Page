function createElement(type) {
  return document.createElement(type);
}
function loadHomePage() {
  //1.render nav
  /**
   * structure of nav
   * nav.nav > ul > li[class="link"]
   */
  const nav = createElement('nav');
  const ul = createElement('ul');
  let navItems = ['Home', 'Menu', 'Contact'];

  navItems = navItems.map((item) => {
    const li = createElement('li');
    li.textContent = item;
    li.classList.add('list');
    return li;
  });
  ul.append(...navItems);
  nav.append(ul);

  //2.render header
  /**
   * structure of header
   * header > div.container> h1 + p
   */
  const header = createElement('header');
  const container = createElement('div');
  container.classList.add('container');
  container.innerHTML = `<h1>Restaurant Page</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
    voluptatum expedita tempore eaque at numquam. Sequi iste voluptatem
    ducimus nulla.
  </p>`;
  header.append(container);

  //3.render footer
  /**
   * footer > p
   */
}

export { loadHomePage };
