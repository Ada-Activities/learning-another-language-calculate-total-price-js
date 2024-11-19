const calculateTotalPrice = function (order) {
  let total = 0;

  for (let i = 0; i < order.length; ++i) {
    total += order[i].price;
  }

  return total;
};

const myOrder = [
  {
    entree: 'Fish Tacos',
    price: 14.97,
  },
  {
    entree: 'Vegan Spaghetti',
    price: 21.47,
  },
];

const myTotal = calculateTotalPrice(myOrder);
console.log(`The total is $${myTotal}`);
