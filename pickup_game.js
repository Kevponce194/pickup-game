// pickup_game.js

// generate a random number
let getRandNum = function (start, range) {
    let getRand = (Math.random() * range) + start;
    while (getRand > range) {
        getRand = (Math.random() * range) + start;
    };
    return getRand;
};

// array of 10 kids
var Kids = [{
    name: "Bobby",
    random: getRandNum(1, 10)
},
{
    name: "Frankie",
    random: getRandNum(1, 10)
},
{
    name: "Juan",
    random: getRandNum(1, 10)
},
{
    name: "Sid",
    random: getRandNum(1, 10)
},
{
    name: "Ellie",
    random: getRandNum(1, 10)
},
{
    name: "Harry",
    random: getRandNum(1, 10)
},
{
    name: "Chester",
    random: getRandNum(1, 10)
},
{
    name: "Lucio",
    random: getRandNum(1, 10)
},
{
    name: "Nancy",
    random: getRandNum(1, 10)
},
{
    name: "Kim",
    random: getRandNum(1, 10)
}];

// console.log(Kids[getRandNum(1,10)])

// This has an inner loop that runs through the whole array, then an outer loop that does it again.
// for (let captCter = 0; captCter < 2; captCter++) {
//     for (let x = 0; x < Kids.length; x++) {
//         console.log(Kids[x]);
// };
// }

// let sortedKids = Kids.sort((r1, r2) => (r1.random < r2.random) ? 1 : (r1.random < r2.random) ? -1 : 0);
// console.log(sortedKids);

// const sortedKids = Kids.slice().sort();
// console.log(sortedKids)


// https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

//   const singers = [
//     { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
//     { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
//     { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
//     { name: 'Stevie Nicks', band: 'Fleetwood Mac', born: 1948 },
//   ];

  // array is sorted by band, in ascending order by default
// singers.sort(compareValues('band'));

// array is sorted by band in descending order
// singers.sort(compareValues('band', 'desc'));

// array is sorted by name in ascending order
// singers.sort(compareValues('name'));

// array is sorted by date if birth in descending order
// singers.sort(compareValues('born', 'desc'));
console.log(Kids.sort(compareValues('random', 'desc')));