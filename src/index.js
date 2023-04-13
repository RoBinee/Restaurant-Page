import './style.css';
import { loadHomePage } from './home.js';
import background from './images/background.jpg';

/**
 *  appending each new element to div#content once the page is first loaded.
 * write this initial page-load function inside of its own module and then import and call it inside of index.js.
 */

loadHomePage();
