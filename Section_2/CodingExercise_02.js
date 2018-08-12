/*
CODING EXERCISE 02
SECTION 02
-----------------------
PROCESSING VALUES.
The array below contains an array of objects, each of which is a representation of an image.  
Using the forEach helper, calculate the area of each image and store it in a new array called 'areas'.  
The area of an image can be calculated as 'image.height * image.width'.
-------------------------

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

-------------------------
DATE: 11/08/2018
*/

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
  ];

  var areas = [];
  var area = 0;

  images.forEach(function(image){
      area = image.height * image.width;
      areas.push(area);
  })

  areas.forEach(function(area){
      console.log(area);
  })