"use-strict";

var fib = require("./set1").fib;
var sumOfDigits = require("./set1").sumOfDigits;

exports.testFibonacciOfThree = function(test){
    test.equal(2, fib(3));
    test.done();
}

exports.testFibonacciOfTen = function(test){
    test.equal(55, fib(10));
    test.done();
}

exports.testSumOfDigits = function(test){
    test.equal(43, sumOfDigits(1325132435356));
    test.equal(6, sumOfDigits(6));
    test.equal(1, sumOfDigits(-10));
    test.done();
}

