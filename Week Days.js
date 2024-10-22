// Code wars Kata5 Solutions

/*
In the first function, you take one parameter, the value of week days
You must return from this function another function 
The other functions take one parameter, which is a number 
I want you to return two cases from this function :
  1- return the day of the week based on the parameter
  2- If it is not available, return the Object Error to me with message 'Invalid weekday number'
*/

/*
    1) Return function from the first function 
    2) Declare variable with the value of the first function and it will be another function
    3) Pass the given parametr with random number and check 
      i- if the index > the length of the weekdays throw error with the given message
      ii- else return the value 
*/

//Solution
function weekdayText(weekdays) {
  return function getText(n) {
    if (n > weekdays.length) {
      throw new Error('Invalid weekday number');
    } else {
      return weekdays[n];
    }
  };
}

const secondFunc = weekdayText([
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat',
  'Sun',
]);
console.log(secondFunc(10));
