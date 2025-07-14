function add (num1, num2){
      return num1 + num2;
}
function sub (num1, num2){
      return num1 - num2;
}
function multi (num1, num2){
      return num1 * num2;
}
function divide (num1, num2){
      return num1 / num2;
}
function calculator(a, b, operation){
      if (operation === 'add'){
            const result = add(a,b);
            return result;
      }
      else if (operation === 'sub'){
            const result = sub(a, b);
            return result;
      }
      else if(operation === 'multi'){
            return multi (a,b);
      }
      else if (operation==='divide'){
            return divide (a, b);
      }
      else{
            return "only add sub multi divide is allowed."
      }
}
const result = calculator(5,7,  'add');
console.log(result);