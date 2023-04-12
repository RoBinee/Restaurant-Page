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
  console.log(nav);

  //2.render header
  /**
   * structure of header
   * header > div.container> h1 + p
   */

  //3.render footer
  /**
   * footer > p
   */
}

export { loadHomePage };
