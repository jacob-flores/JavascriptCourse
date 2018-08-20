/*
CODING EXERCISE 05
SECTION 03
-----------------------
Really Hard - Implementing 'Pluck'.

This is a hard one!
Implement a 'pluck' function.  
Pluck should accept an array and a string representing a property name and return an array containing that property from each object. 

Example: 
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
pluck(paints, 'color'); // returns ['red', 'yellow', 'blue'];

Hint:
Remember that you can access a property on an object by using square bracket notation. For example...
var person = { name: 'Bill' };
person['name'] // returns 'Bill'
-------------------------

function pluck(array, property) {
    
}

DATE: 13/08/2018
*/
var paints = [
    { color: 'red' }, 
    { color: 'blue' }, 
    { color: 'yellow' }];

var propertyToGet = 'color';
var resultArray;

function pluck(arrayToRead, propertyToRead){
    resultArray = arrayToRead.map(assignValue);
    return resultArray;
}
function assignValue(arrayItem){
    return arrayItem[propertyToGet];
}

pluck(paints, propertyToGet);

resultArray.forEach(function(valor){
    console.log(valor);
});