/**
 * chair ---> 3cft
 * table ---> 10cft
 * bed ---> 50 cft
*/



function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
      const perChairWood = 3;
      const perTableWood = 10;
      const perBedWood = 50;

      const allChairWood = chairQuantity * perChairWood;
      const allTableWood = tableQuantity * perTableWood;
      const allBedWood = bedQuantity * perBedWood;

      const totalWood = allChairWood + allTableWood + allBedWood;
      return totalWood;
}
const wood = woodQuantity (0, 0, 1);
console.log('wood needed', wood);



function shoppingItem (shirtQuantity, pentQuantity, ShoeQuantity){
      const perShirt = 500;
      const perPent = 300;
      const perShoe = 900;

      const shirtPrice = shirtQuantity * perShirt;
      const pantPrice = pentQuantity * perPent;
      const shoePrice = ShoeQuantity * perShoe;
      
      totalPrice = shirtPrice + pantPrice + shoePrice;
      return totalPrice;
}

const fixedPrice = shoppingItem(2, 3, 1);
console.log('total price', fixedPrice);