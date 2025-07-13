const products = [
      {name : 'shampoo', price :300},
      {name : 'chiruni', price :100},
      {name : 'shirt', price :700},
      {name : 'pant', price :1200},

]
function getShoppingCart (products){
      let total = 0;
      for (const product of products){
            total= total + product.price;
}
return total;
}
const total = getShoppingCart(products);
console.log( 'total ajk khoshabe', total);