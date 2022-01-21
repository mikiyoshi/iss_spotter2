// index.js

// The code below is temporary and can be commented out.
// ISS Spotter I
// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });
//
// ISS Spotter II
// const { fetchCoordsByIP } = require('./iss');

// https://freegeoip.app/
// "ip":, "2607:fea8:520:a7c0:bce9:5817:dba7:45ef",
// fetchCoordsByIP(
//   '2607:fea8:520:a7c0:bce9:5817:dba7:45ef',
//   (error, coordinates) => {
//     if (error) {
//       console.log("It didn't work!", error);
//       return;
//     }

//     console.log('It worked! Returned coordinates:', coordinates);
//   }
// );
//
// ISS Spotter III
const { fetchISSFlyOverTimes } = require('./iss');
// https://freegeoip.app/
// "latitude": 43.6547,
// "longitude": -79.3623,
// https://iss-pass.herokuapp.com/json/?lat=43.6547&lon=-79.3623
const exampleCoords = { latitude: '43.6547', longitude: '-79.3623' };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned flyover times:', passTimes);
});
