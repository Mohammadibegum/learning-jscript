const name = "mohammadi"
const id= 123
// console.log(name+id+"values");   //not recommded instead of that use string interpolation &{variable}


console.log(`my name is ${name} and my id is ${id}`);


const gamename = new String ('chess') 
console.log(gamename);
// console.log(gamename[0]);
// console.log(gamename.length);
// //console.log(gamename.lastIndexOf);
// console.log(gamename.toLowerCase());
// console.log(gamename.charAt(2));
// console.log(gamename.charCodeAt(0));

// const newstring1 = gamename.substring(0,3);
// console.log(newstring1);


// const newstring2 = gamename.slice(1,3);
// console.log(newstring2);

// const string3 = new String('   moohhham ');
// console.log(string3.trim());

const url = 'https://mohm.com/%20test'

console.log(url.replace('%20','java')); // replace 

console.log(url.includes('moham'));
const game2 = 'carromboard'
console.log(game2.split('%',2));

