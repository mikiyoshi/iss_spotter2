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
// const { fetchISSFlyOverTimes } = require('./iss');
// // https://freegeoip.app/
// // "latitude": 43.6547,
// // "longitude": -79.3623,
// // https://iss-pass.herokuapp.com/json/?lat=43.6547&lon=-79.3623
// const exampleCoords = { latitude: '43.6547', longitude: '-79.3623' };

// fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned flyover times:', passTimes);
// });
//
const { nextISSTimesForMyLocation } = require('./iss');

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
