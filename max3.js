/* normal if else use kore boro man ber kora */

const jim = 56;
const tim =98;
const bim = 78;

if (jim > tim && jim > bim){
      console.log('jim is ultimate boss' );
}
else if (tim >jim && tim>bim){
      console.log('tim is ultimate boss');
}
else {
      console.log('bim is the superman');
}


/* function er bhitor if else condition use kore boro sonkha ber kora */

function maxOfThree (num1, num2, num3){

      let largest;
    if (num1 > num2 && num1 > num3){
      largest=num1;
    }
    else if(num2 > num1 && num2 > num3){
      largest=num2;
    }
    else {
      largest = num3;
    }
    return largest;
}
console.log("largest number is ", maxOfThree(90,99,76));

/* function er bhitor loop use kore boro man ber kora */

function maxOfThre(num1, num2, num3){
      let numbers =[num1 , num2, num3];
      let largest =numbers[0];
      for(let i = 1; i < maxOfThre.length ; i++ ){
            if(numbers[i] > largest){
                  largest = numbers[i];
            }
      }
      return largest;
}
console.log('Largest number is :', maxOfThre(56,65,43));





/* short-cut way te boro man ber kora */
const max = Math.max(23, 34, 56, 76, 43, 87);
console.log('The max number is', max);
