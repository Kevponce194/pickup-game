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
  }
];

// sort based on random number ---  https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
      return 0;
    }

    const varA = (typeof a[key] === 'string') ?
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ?
      b[key].toUpperCase() : b[key];

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

console.log(Kids.sort(compareValues('random', )));

const teamOne = Kids.pop();
const teamTwo = Kids.pop();

console.log(teamOne);
console.log(teamTwo);
console.log(Kids);

let coinToss = "Heads"

if (Math.floor((Math.random() * 2) + 1) == 2) {
  coinToss = "Tails";
};

console.log(coinToss);

if (coinToss == "Heads") {
  let x = 4;
  while (x > 0) {
    teamOne.push([Kids.pop()]);
    teamTwo.push([Kids.pop()]);
    x -= x;
  };
} else {
  let x = 4;
  while (x > 0) {
    teamTwo.push([Kids.pop()]);
    teamOne.push([Kids.pop()]);
    x -= x;
  };
  console.log("_____________");
  console.log(coinSide);
  console.log("_____________");
  console.log(teamOne.name);
  console.log("_____________");
  console.log(teamTwo.name);
};

