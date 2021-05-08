var count = 5;
console.log(count);
var a;
var b;
var s;
var any;
var m = [1, 2, 3];
var anyType = [2, "hi", "privet"];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var message = "abs";
var newMessage = message.endsWith("s");
console.log(newMessage);
