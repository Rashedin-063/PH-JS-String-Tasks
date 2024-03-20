// first solution
const a = 'A quick brown fox jumps over the lazy dog';

const b = "Ni, I love You"
console.log(a.includes('a', 'e', 'i', 'o', 'u'));
console.log(b.includes('a', 'e', 'i', 'o', 'u'));

// second solution
const sentence = "The quick brown fox jumps over the lazy dog.";
if (sentence.includes("a", "e", "i", "o", "u")) {
  console.log("Yes String Contains All The Vowels");
}

// third solution
let text = "The quick brown fox jumps over the lazy dog.";

// Convert the string to lowercase to make the comparison case-insensitive
text = text.toLowerCase();

// Check if the string contains each vowel using includes() method
let allVowelsExist =
  text.includes('a') &&
  text.includes('e') &&
  text.includes('i') &&
  text.includes('o') &&
  text.includes('u');

console.log(allVowelsExist); // Output: false (for the given text)
