/**
 * Module with Greeter class
 */
System.register([], function(exports_1) {
    var Greeter;
    return {
        setters:[],
        execute: function() {
            Greeter = (function () {
                function Greeter() {
                }
                Greeter.prototype.greet = function (name) {
                    return "Hello " + name;
                };
                return Greeter;
            })();
            exports_1("Greeter", Greeter);
        }
    }
});
//# sourceMappingURL=Greeter.js.map