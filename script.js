let mountains;
mountains = [
    { name: 'Kilimanjaro', height: 19341 },
    { name: 'Everest', height: 29829 },
    { name: 'Denali', height: 20310 }
];
function findTallestMountain(mountains) {
    let tallestMountain = mountains[0];
    mountains.forEach(n => {
        if (tallestMountain.height < n.height) {
            tallestMountain = n;
        }
    });
    return tallestMountain.name;
}
let tallest = findTallestMountain(mountains);
console.log(tallest);
let products;
products = [
    { name: "Ball", price: 50.00 },
    { name: "Sword", price: 500.99 },
    { name: "Staff", price: 70.89 },
    { name: "Doll", price: 10.50 },
    { name: "Brass Knuckles", price: 300.00 },
];
function calcAverageProductPrice(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    let average = total / products.length;
    return average;
}
let result = calcAverageProductPrice(products);
console.log(result);
let inventory;
inventory = [
    { product: { name: "motor", price: 10.00 }, quantity: 10 },
    { product: { name: "sensor", price: 12.50 }, quantity: 4 },
    { product: { name: "LED", price: 1.00 }, quantity: 20 }
];
function calcInventoryValue(inventory) {
    let inventoryItemTotal = 0;
    for (let i = 0; i < inventory.length; i++) {
        inventoryItemTotal += inventory[i].product.price * inventory[i].quantity;
    }
    return inventoryItemTotal;
}
let newInventoryTotal = calcInventoryValue(inventory);
console.log(newInventoryTotal);
//# sourceMappingURL=script.js.map