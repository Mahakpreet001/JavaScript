const mcu = ["iron-man", "thor", "hulk"]
const dc = ["super-man", "batman", "flash"]

// mcu.push(dc)

// console.log(mcu);
// console.log(mcu[3][1]);

// const newmcu = mcu.concat(dc)
// console.log(newmcu);

const allheros =[...mcu,...dc]
// console.log(allheros);

const newarr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarr = newarr.flat(1)
// console.log(realarr);


console.log(Array.isArray("Mahak"));
console.log(Array.from("Mahak"));
console.log(Array.from({name:"mahak"}));   //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
