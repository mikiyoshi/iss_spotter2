// index.js

// The code below is temporary and can be commented out.
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP(
  '2607:fea8:520:a7c0:bce9:5817:dba7:45ef',
  (error, coordinates) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    console.log('It worked! Returned coordinates:', coordinates);
  }
);
