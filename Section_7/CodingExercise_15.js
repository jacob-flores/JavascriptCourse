/*
    Reducing Properties

    Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks. 
    The object returned should have the form '{ sitting: 3, standing: 2 }'. 
    The initial value has been provided to you.
*/

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(previous, desk) {
      if(desk.type === 'sitting') {{++previous.sitting}}
      if(desk.type === 'standing') { {++previous.standing}}
      return previous;
  }, { sitting: 0, standing: 0 });
console.log(deskTypes);