const assert = require('chai').assert;
const main = require('../main');

//Results
const helloWorldText = main.helloWorld();
const subtractionResult = main.subtraction(4,2);
const arrayOfNumbers = main.arrayOfNumbers();

describe('Main Suite', function(){

    describe('Hello World Method - Test Cases', function(){
        it('Hello World text is as expected', function(){
            assert.equal(helloWorldText, 'hello world');
        });
        it('Validate data type', function(){
            assert.typeOf(helloWorldText, 'string', 'The expected data type is a string')
        });
    });

    describe('Subraction Method - Test Cases', function(){
        it('Less than 5', function(){
            assert.isBelow(subtractionResult, 5);
        });
        it('Validate data type', function(){
            assert.typeOf(subtractionResult, 'number', 'The expected data type is a number')
        });
    });

    describe('Array Method - Test Cases', function(){
        it('Array includes the number 5', function(){
            assert.include(arrayOfNumbers, 5);
        });
        it('Validate array length', function(){
            assert.lengthOf(arrayOfNumbers, 6)
        });
    });


});