var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log(2);
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
