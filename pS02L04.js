//Example code for Lesson 04 /Section 02
//Comparison between traditional way to code iterations
//and the use of forEach arra¿y helper


//Old way

var colors = ['red', 'green', 'blue'];

for( var i = 0; i < colors.length; i++){
    console.log(colors[i])
}

//Using forEach Helper
colors.forEach(function(color){
    console.log(color);
})