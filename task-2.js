// first solution:
const Sentence = "Amar sonar bangla ami tomay valobasi";

let sum = 0;

for (let letter of Sentence) {
  if (letter === 'a' || letter === 'A'){
    sum++; 
  }
}

console.log(sum)

// second solution:
let text = "Amar sonar bangla ami tomay valobasi";
let letterToCount = 'a';
// The letter you want to count

// Convert the string to lowercase to make the comparison case-insensitive
text = text.toLowerCase();

// Initialize a counter for the letter
let count = 0;

// Iterate through the string to count occurrences of the letter
for (let char of text) {
    if (char === letterToCount) {
        count++;
    }
}

console.log(`The letter "${letterToCount}" appears ${count} times in the string.`);
