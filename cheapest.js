const phones = [
      { name : 'samsung', price: 70000, camera: '12mp', color: 'black'},
      { name : 'xoami', price: 230000, camera: '12mp', color: 'black'},
      { name : 'oppo', price: 250000, camera: '12mp', color: 'black'},
      { name : 'iphone', price: 320000, camera: '12mp', color: 'black'},
      { name : 'walton', price: 10000, camera: '12mp', color: 'black'},
      { name : 'HTC', price: 40000, camera: '12mp', color: 'black'},
]


function getCheapestPhone (phones){
      let min = phones[0];
      for (const phone of phones){
            if (phone.price < min.price){
                  min = phone;
            }
      }
      return min;
}
const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is :' , cheap);