function multiply ( num1, num2){
      if(typeof num1 !== 'number' || typeof num2 !== 'number'){
            return 'please provide a number '
      }
      const mult = num1 * num2;
      return mult;
}

const result = multiply (5, 'seven');
// console.log(result);

function fullname (first ,second){
      if(typeof first !== 'string'){
            return 'first name should be a string';
      }
      else if (typeof second !== 'string'){
            return 'Second name should be string';
      }
      const full = first +  ' ' + second;
      return full;
}
const full = fullname (' Rahan ', 'Shohan');
// console.log(full);

//Object er khetre

function getPrice (product){
      if (typeof product !== 'object'){

            return 'please provide an object';
      }
      const price = product.price;
      return price;
}
// const price = getPrice({name : 'kichu ekta', price: 35, color : 'blue'})
const price = getPrice(5);
// console.log(price);

function getSecond (numbers){
      if(Array.isArray(numbers) ===false){
            return 'Please provide an array'
      }
      const second = numbers[1];
      return second ;
}

const second = getSecond([1,32,56]);
console.log(second);