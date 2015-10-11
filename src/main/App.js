/**
 * Module with App Class
 */
System.register(['../hello/Greeter'], function(exports_1) {
    var Greeter_1;
    var App;
    return {
        setters:[
            function (Greeter_1_1) {
                Greeter_1 = Greeter_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App.prototype.greet = function () {
                    var message = new Greeter_1.Greeter();
                    return "<h1>" + message.greet("TypeScript") + "</h1>";
                };
                return App;
            })();
            exports_1("App", App);
        }
    }
});
//# sourceMappingURL=App.js.map