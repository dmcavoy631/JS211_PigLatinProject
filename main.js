'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

let input = "";
let pigInput = "";

// GUI SETUP
//Clear text areas
const clearTextAreas = () =>{
  document.getElementById("translateInput").value = "";
  document.getElementById("translateOutput").value = "";
}

const translateBtnClick = () =>{
  pigInput = document.getElementById('translateInput').value;
  pigLatin(pigInput);
  
  // STOPS FORM RELOAD
  event.preventDefault()
}

const pigLatin = (input) => {

  // REGEX WAY
  const latinSentence = []; // new PIG Latin sentence (array)

  // Lowercase work
  input = input.toLowerCase();
  // convert input to ARRAY - capture mult words. Populate array with words
  const pigSentence = input.split(" ");
  //For each word in array REGEX search and covert to pig latin
  pigSentence.forEach(element => {
    // Find position of vowels via REGEX
    let pos = element.search(/[aeiou]/i); 
    // If 1st letter is not a vowel, add "way" to word and push to latin array
    if (pos == 0){
      element += "yay";
      latinSentence.push(element);

    }else if (pos > 0 ){
      // slice out from pos past the vowel  
      let endStr = element.slice(pos);

      // slice out from 0 to pos
      let beginStr = element.slice(0, pos);

      //flip strings and add new eding
      element = endStr + beginStr + "ay";

      //Push on to latin array
      latinSentence.push(element);
    }
  });

  //Print the latin array as a string without ,'s
  let result = latinSentence.join(" ");
  document.getElementById("translateOutput").value = result;
}
  // ++++++++++++++ OLD CODE ++++++++++++++
  // Move thru the word 1 letter at a time.

  // for(let i = 0; i < word.length; i++){
  //   // interating over the word
  // const letter = word.charAt(i);  
  //   // Check if letter is a vowel
  //   if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
  //     //Call yayword function if 1st letter
  //     if (i == 0){
  //       return yayWord(word);
  //     }
  //     //Call ayword functions if no 1st letter
  //     return ayWord(word,i);
  //   }
  // }

//yayWord func
const yayWord = (string) =>{
  return(string + 'yay');
}

//ayWord func
const ayWord = (string, pos) =>{
  // concate end of string for pos with "sliced" 0 thru posistion of the vowel + ay

  // slice out past the vowel  
  let endStr = string.slice(pos);

  // slice out to the vowel 0 - pos
  let beginStr = string.slice(0, pos);

  //concate and return
  return endStr + beginStr + "ay";
}



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
// }

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
// if (typeof describe === 'function') {

//   describe('#pigLatin()', () => {
//     it('should translate a simple word', () => {
//       assert.equal(pigLatin('car'), 'arcay');
//       assert.equal(pigLatin('dog'), 'ogday');
//     });
//     it('should translate a complex word', () => {
//       assert.equal(pigLatin('create'), 'eatecray');
//       assert.equal(pigLatin('valley'), 'alleyvay');
//     });
//     it('should attach "yay" if word begins with vowel', () => {
//       assert.equal(pigLatin('egg'), 'eggyay');
//       assert.equal(pigLatin('emission'), 'emissionyay');
//     });
//     it('should lowercase and trim word before translation', () => {
//       assert.equal(pigLatin('HeLlO '), 'ellohay');
//       assert.equal(pigLatin(' RoCkEt'), 'ocketray');
//     });
//   });
// } else {

//   getPrompt();

// }






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.