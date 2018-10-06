/*
Finding Submitted Users
Given an array of users, return 'true' if every user has submitted a request form. 
Assign the result to the variable 'hasSumbmitted'.

*/

var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true }
  ];
  
  var hasSubmitted;
  
    hasSubmitted = users.every(user => user.hasSubmitted === true);
    console.log(`Se han enviado todos los formularios? : ${hasSubmitted}`);