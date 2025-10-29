const orderPrices = [50, 30, 25, 40, 15];

const totalOrderValue = orderPrices.reduce((total, price) => total + price, 0);
console.log('The total value is of order is ', totalOrderValue)