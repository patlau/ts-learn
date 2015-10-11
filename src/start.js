/**
 * Get Main-Class and set HTML.
 */
System.register(['main/App'], function(exports_1) {
    var App_1;
    var app;
    return {
        setters:[
            function (App_1_1) {
                App_1 = App_1_1;
            }],
        execute: function() {
            app = new App_1.App();
            document.body.innerHTML = app.greet();
        }
    }
});
//# sourceMappingURL=start.js.map