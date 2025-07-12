/* Task: ekta array er modhhe number gulo jog koro

for loop, sum variable use

Example: [1, 2, 3, 4, 5] → output: 15 */

// const arr = [1, 2, 3, 4, 5]; //given input
// let jog = 0;
// for(let number of arr){
//       jog = jog + number;
      
// }
// console.log(jog)

/* Minimum value ber koro ei array theke:

const arr = [65, 44, 99, 21, 76, 33]; */

// const arr = [65, 44, 99, 21, 76, 33];
// let store =[0];
// for (let min of arr){
//       if (min < store){
//             store = min;
//       }
      
// }
// console.log(store);

// const arr = [65, 44, 99, 21, 76, 33]; // array ta age declare kortesi
// let store = arr[0];
// for (let number of arr){
//       if(number < store){
//             store=number;
//       }
// }
// console.log(store);


/* maxximum number ber kora */

const arr = [65, 44, 99, 21, 76, 33];
let max = arr[0];
for (number of arr){
      if(number > max){
          max =  number;
      }
}
// console.log(max);

 /* 1️⃣ Sum ber koro
2️⃣ Mean (average) ber koro
3️⃣ Koto gulo odd number ache
4️⃣ Koto gulo even number ache
const numbers = [10, 25, 30, 15, 60, 21, 7];
 */
const numbers = [10, 25, 30, 15, 60, 21, 7];
let sum = 0;
let odd = 0;
let even = 0;
for (let num of numbers){
      sum += num;
     
if(num %2 === 0){
      even++;
}
else{
      odd++;
}
}
let mean = sum/numbers.length;
// console.log(sum);
// console.log(mean)
// console.log(odd);
// console.log(even);
/* Tumi ekta string paba — tar moddhe:

Longest word ber korte hobe

Total kotogula word ache ta count korte hobe

Prottek word er length print korte hobe */

// const sentence = "I am learning programming to become a developer";
// let word = 0;
// for (let tence of sentence){
//      if(word > tence.length){
//       word = tence;
//      }
// }
// console.log(word);


/*  */

const sentence = 'I am learning programming to become a developer ';
//split sentence into word
const words = sentence.split(" ");
//initialize longest word variable
let longest = "";
//loop through each words
for (let word of words){
      if (word.length > longest.length){
            longest = word; //jodi eta bor hoy update korbo
      }
}
//total word count 
let wordCount = words.length;
console.log(longest);
console.log(wordCount);
for (let word of words){
      console.log(word + "->" + word.length);
}