//Get the sum of the elements from an array number usin forEach helper

//Using no anonimous function

//Create an array of numbers
var numbers = [1,2,3,4,5]
//Create a variable to hold the sum
var sum = 0;
//Create a public function
function adder(number){
    sum += number;
}
// Loop over the array, incrementing the sum variable
numbers.forEach(adder);
//print the sum variable
console.log(sum);