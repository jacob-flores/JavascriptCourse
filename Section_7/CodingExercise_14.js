/*
Distance Traveled
Use the 'reduce' helper to find the sum of all the distances traveled. 
Assign the result to the variable 'totalDistance'
*/

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance;
// totalDistance = trips.reduce((a, b) => ({distance: a.distance + b.distance}));
//Old way
// totalDistance = trips.reduce(function(a, b){
//     return {distance: a.distance + b.distance}
//  });
totalDistance = trips.reduce((prev, trip) => prev + trip.distance, 0);
console.log(`${totalDistance}`);