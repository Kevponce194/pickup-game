// pickup_game.js

// generate a random number
let getRandNum = function (start, range) {
    let getRand = Math.floor((Math.random() * range) + start);
    while (getRand > range) {
        getRand = Math.floor((Math.random() * range) + start);
    };
    return getRand;
};

// array of 10 kids
var kids = [{
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
}]