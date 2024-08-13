// Code wars Kata5 Solutions

/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
*/

/*
Number Functions : 
          1) Create global function to get the value of each number
          2) Declare variable of each function number -> function two () {const value =2}

Operations Functions : 
          1) Each operation function have one prameter with value and  return new function 
          2) Clousers play a good role here bec still have the value of the parameter 
          3) Each new function do the mathmatical operation 
*/

//Solution
function getValue(callBack, value) {
  return typeof callBack === 'function' ? callBack(value) : value;
}
function zero(a) {
  const value = 0;
  return getValue(a, value);
}
function one(b) {
  const value = 1;
  return getValue(b, value);
}
function two(c) {
  const value = 2;
  return getValue(c, value);
}
function three(d) {
  const value = 3;
  return getValue(d, value);
}
function four(e) {
  const value = 4;
  return getValue(e, value);
}
function five(f) {
  const value = 5;
  return getValue(f, value);
}
function six(g) {
  const value = 6;
  return getValue(g, value);
}
function seven(h) {
  const value = 7;
  return getValue(h, value);
}
function eight(i) {
  const value = 8;
  return getValue(i, value);
}
function nine(j) {
  const value = 9;
  return getValue(j, value);
}

function plus(l) {
  return function (m) {
    return l + m;
  };
}
function minus(n) {
  return function (o) {
    return o - n;
  };
}
function times(p) {
  return function (q) {
    return p * q;
  };
}
function dividedBy(r) {
  return function (s) {
    return Math.trunc(s / r);
  };
}

console.log(six(dividedBy(two())));
