import { nav } from './nav.js';
import { header } from './header.js';
import { footer } from './footer.js';

function renderPage() {
  const content = document.getElementById('content');
  //for making structure
  content.append(nav, header, footer);
}

export { renderPage };
