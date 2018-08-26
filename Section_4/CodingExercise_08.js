/*
Challenging!  Implementing 'reject'.
This is a hard one!  Create a function called 'reject'.  
Reject should work in the opposite way of 'filter' - 
if a function returns 'true', the item should *not* be included in the new array.  

Hint: you can reuse filter.

For example:

var numbers = [10, 20, 30];
var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
  }); 
  lessThanFifteen // [ 10 ];

*/
var numbers = [10, 20, 30];

var lessThanFifteen = reject(numbers, function(number){
  return number > 15;
});

lessThanFifteen.forEach(function(element){
  console.log(element);
});

function reject(array, iteratorFunction) {
    return array.filter(function(number){
      return iteratorFunction(number) === false;
    });
  }