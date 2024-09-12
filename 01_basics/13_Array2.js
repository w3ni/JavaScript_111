const marvel_hero = ["Thor","Thanos","IronMan","SpiderMan"]
const dc_heros = ["Joker", "Batman", "SuperMan", "Flash"]

// marvel_hero.push(dc_heros)
// console.log(marvel_hero);
// console.log(marvel_hero[4]);

const x = marvel_hero.concat(dc_heros)
// console.log(x);

// Spread operator ...
const all_new_hero = [...marvel_hero,...dc_heros]
// console.log(all_new_hero);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,6]]]
const real_anothe_array = another_array.flat(Infinity)
// console.log(real_anothe_array);

console.log(Array.isArray("Abhishek"));
console.log(Array.from("Abhishek"));
console.log(Array.from({name:"Abhishek"})); // Intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));