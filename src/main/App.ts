/**
 * Module with App Class
 */

import {Greeter} from '../hello/Greeter';

export class App {
    greet() {
        var message = new Greeter();
        return "<h1>" + message.greet("TypeScript") + "</h1>";
    }
}


