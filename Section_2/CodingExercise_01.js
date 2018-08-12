/*
CODING EXERCISE 01
SECTION 02
-----------------------
MOVING AWAY FROM LOOPS.
The code below is calling 'savePost' three times, but it is doing so using a for loop.  
This implementation works, but the for loop makes it more challenging to understand the purpose of the function.  
Rather than using a for loop, refactor the code below to instead use the forEach helper.
-------------------------

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      savePost(posts[i]);
    }
}

DATE: 11/08/2018
*/
function handlePosts() {
    var posts = [
        { id: 23, title: 'Daily JS News' },
        { id: 52, title: 'Code Refactor City' },
        { id: 105, title: 'The Brightest Ruby' }
      ];

      posts.forEach(function(post){
          savePost(post);
      });
}