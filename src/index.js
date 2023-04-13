import { loadHomePage } from './home.js';
/**
 *  appending each new element to div#content once the page is first loaded.
 * write this initial page-load function inside of its own module and then import and call it inside of index.js.
 */
const content = document.getElementById('content');
const { nav, header, footer } = loadHomePage();
content.append(nav, header, footer);
