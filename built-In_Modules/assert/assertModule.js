//  we perform comparison operation which checks whether variable a is greater that variable b or not.
const assert = require('assert');

// 1st program
// var a = 10;
// var b = 20;
// assert(a > b);




// 2st program
function demo(x, y, z) {
    var value = x + y + z;
    return value;
}
var output = demo(4, 1, 10);
console.log("Output : " + output);
var expected_output = 15;
console.log("Expected Output : " + expected_output);
assert(output === expected_output, 'Test case is true so this will not be printed(i.e will print in case of false value)');



