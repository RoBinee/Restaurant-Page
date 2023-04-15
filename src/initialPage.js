import { nav } from './components/nav.js';
import { header } from './components/header.js';
import { footer } from './components/footer.js';

function renderPage() {
  const content = document.getElementById('content');
  //for making structure
  content.append(nav, header, footer);
}

export { renderPage };
