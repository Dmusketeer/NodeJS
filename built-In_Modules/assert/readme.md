# --------------------- Assert Module ---------------------

## Introduction
- Assert module in node.js is an inbuilt module which can be used to write tests. 
- It provides a way to perform unit tests on node.js expressions. 
- If the test case is failed or 0 or false then , an error is raised. If the test case is passed or 1 or true then it provides no feedback. 
- Although this module is intended for only internal use in node.js but we can still access it using the following :<br>
     ```const assert = require('assert')```

- <b>Note</b> that assert is not a testing framework and we must not treat it like one.
- <b>Note that when the assertion test is true , it does not return any output.</b>


<i> <b>[Assert Methods ](https://www.w3schools.com/nodejs/ref_assert.asp)</b> : assert() , assert.deepEqual(), assert.deepStrictEqual() , assert.doesNotThrow() , assert.equal() , assert.fail(), assert.ifError() , assert.notDeepEqual() , assert.notDeepStrictEqual() , assert.notEqual() , assert.notStrictEqual(), assert.ok() , assert.strictEqual() , assert.throws() .
</i>



