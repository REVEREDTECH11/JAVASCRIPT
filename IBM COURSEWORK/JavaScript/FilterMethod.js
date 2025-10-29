const products = [
    { name: 'Laptop', price: 2500 },
    { name: 'Tv', price: 850 },
    { name: 'Phone', price: 1699 },
    { name: 'Tablet', price: 500 },
    { name: 'Game', price: 400 },


];

function filterProductsByPriceRange(products, minPrice, maxPrice) {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

const minPrice = 100; //Minimum price threshold
const maxPrice = 500; //Maximum price threshold

const filteredProducts = filterProductsByPriceRange(products, minPrice, maxPrice);

filteredProducts.forEach((product) => {
    console.log(`${product.name} is of ${product.price}`);
});