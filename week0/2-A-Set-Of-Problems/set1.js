"use strict";

var fib = (function(){
    var nums = [0, 1];
    return function fibonacci(n){
        if (nums[n] == undefined){
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
        return nums[n];
        };
}());

exports.fib = fib;

var sumOfDigits = function (n){
    var sum = 0;
    Array.from(Math.abs(n).toString()).forEach(function(item){
        sum += parseInt(item);
    })
    return sum;
};

exports.sumOfDigits = sumOfDigits;
console.log(sumOfDigits(23));