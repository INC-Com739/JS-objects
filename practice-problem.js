'use strict';

//Challenge Problem:

//You are designing a simple inventory system for a small store. Create an object called 'store' with the following properties:
let store = {
    name: "Grocery Store",
    location: "123 Main St",
    inventory: [
        { name: "apples", price: 1.00, quantity: 100 },
        { name: "oranges", price: 0.75, quantity: 150 },
        { name: "bananas", price: 0.50, quantity: 200 },
    ],
    totalInventoryValue: function () {
        let total = 0;
        for (let i = 0; i < this.inventory.length; i++) {
            total += this.inventory[i].price * this.inventory[i].quantity;
        }
        return total;
    }
}
console.log(store.totalInventoryValue());
// name (store name)
// location (store location)
// inventory (an array of objects, each representing a product with properties: name, price, and quantity)
// a method 'totalInventoryValue' that calculates and returns the total value of all products (price * quantity)

//Once you've created the store object, log the total inventory value by calling the method.

