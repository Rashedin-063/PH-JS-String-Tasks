const newStr = "capitalize every first letter of each word in a string";
let CapitalizedWord = [];
const words = newStr.split(" ");

for (let word of words) {
  // console.log(word[0].toUpperCase() + word.slice(1))
  
  CapitalizedWord.push(word[0].toUpperCase() + word.slice(1))
  
  
}

console.log(CapitalizedWord.join(" "))
