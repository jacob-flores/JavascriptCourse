/* 
Finding Admin Users

Find the user in the users's array who is an admin. 
Assign this user to the variable 'admin'.

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

*/

var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin;

  admin = users.find(user => user.admin === true);

  console.log("El admin es el usuario # " + admin.id);