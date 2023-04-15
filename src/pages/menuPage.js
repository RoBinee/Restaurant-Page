//menu page
//first make HTML structure of menu page

// structure of menuPage
/* <div id="menuPage">
<h2 class="sub-title">Menu</h2>
<section class="menu-content">
  <article class="menu-card">
    <img
      src="../src/images/cocktail.jpg"
      alt=""
      class="menu-img"
    />
    <div class="menu-desc">
      <div>
        <h3 class="menu-name">Cocktail</h3>
        <h3 class="menu-price">9$</h3>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  </article>
</section>
</div> */

const menuContent = (function () {
  return `<div id="menuPage">
  <h2 class="sub-title">Menu</h2>
  <section class="menu-content">
    <article class="menu-card">
      <img
        src="../src/images/cocktail.jpg"
        alt=""
        class="menu-img"
      />
      <div class="menu-desc">
        <div>
          <h3 class="menu-name">Cocktail</h3>
          <h3 class="menu-price">9$</h3>
        </div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </article>
  </section>
  </div>`;
})();

export { menuContent };
