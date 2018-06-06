/* Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

function orbitalPeriod(arr) {
  /*
  orbitalPeriod = 2*PI sqrt((EARTH_RADIUS + avgAlt)**3/GM)
  */
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  const PI = Math.PI
  let final = []
  for (let obj of arr){
    final.push ({
      name: obj.name,
      orbitalPeriod: Math.round(
        (2*PI)*(
          Math.sqrt(
            Math.pow(
              EARTH_RADIUS + obj.avgAlt, 3)/GM
            )
          )
        )
    })
  }
  return final

}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
