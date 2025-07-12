/* ekta height er array deya ache */

const height = [65, 55, 66, 72, 78];

function getMax (numbers){
      let max = numbers[0];
      for(const num of numbers){
            // console.log(num);
            if(num < max){
                  max = num;
            }
      }
      return max;
}
// const max = getMax(height);
// console.log('max value is', max);
const shortest = [21, 45, 65, 33, 78, 98, 8];
function mostShort(numbers){
      let Minimum = shortest;
      for (num of numbers){
            if (Minimum < num);
            Minimum = num;
            
      }
      return num;
}
const min = mostShort(shortest);
console.log(min);














/* mean ber kora  */
const choto = [65, 65,54, 34, 76, 32];

function mean (sobceyeChoto){
      let cHoto =sobceyeChoto [0];
      for (const mostaChot of sobceyeChoto){
            console.log(cHoto);
            if(mostaChot < cHoto)
                  cHoto = mostaChot
      }
      return cHoto;
}
const cHoto =(choto);
console.log('mean value is', cHoto);