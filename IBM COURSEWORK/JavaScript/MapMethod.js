const products = [
    { name: 'Laptop', price: 2500 },
    { name: 'Tv', price: 850 },
    { name: 'Phone', price: 1699 },
];

products.map((product) => {
    console.log(`The price of ${product.name} is ${product.price}`);
})