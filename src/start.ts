/**
 * Get Main-Class and set HTML.
 */

import {App} from 'main/App';

var app = new App();
document.body.innerHTML = app.greet();

