// first solution:


const newStr = "capitalize every first letter of each word in a string";

const words = newStr.split(" ")

for (let i = 0; i < words.length; i++){
  words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  
}

console.log(words.join(" "))

// second solution

// const newStr = "capitalize every first letter of each word in a string";
// let CapitalizedWord = [];
// const words = newStr.split(" ");

// for (let word of words) {
//   // console.log(word[0].toUpperCase() + word.slice(1))
  
//   CapitalizedWord.push(word[0].toUpperCase() + word.slice(1))
  
  
// }

// console.log(CapitalizedWord.join(" "))

