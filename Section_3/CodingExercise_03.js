/*
CODING EXERCISE 03
SECTION 03
-----------------------
Plucking Values.
Using map, create a new array that contains the 'height' property of each object.  
Assign this new array to the variable 'heights'.  
Don't forget to use the 'return' keyword in the function!
-------------------------

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights;

DATE: 13/08/2018
*/

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];

  var heights = images.map(function(image){
      return image.height;
  });

  heights.forEach(function(height){
    console.log(height);
})