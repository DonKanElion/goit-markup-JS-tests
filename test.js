//"use strict";

// 2

let productName = "Droid";
let pricePerItem = 2000;

productName = "Repair droid";
pricePerItem = 3500;

console.log(productName);
console.log(pricePerItem);

// 3 

const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

// 4 
const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;

// 5 
const productName = "Droid";
const pricePerItem = 3500;

// Change code below this line

const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

console.log(message);

// 6 
// Change code below this line
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

console.log(message);

// 7 
// Change code below this line
function sayHi(){
    console.log("Hello, this is my first function!")
}
sayHi();

// 8 

// Change code below this line
function add(a, b,c) {
    console.log(`Addition result equals ${a + b + c}`);
    // Change code above this line
  }
  
  add(15, 27, 10);
  add(10, 20, 30);
  add(5, 10, 15);

  // 9

  function add(a, b, c) {
    // Change code below this line
  return a + b + c;
  
    // Change code above this line
  }
  
  add(2, 5, 8); // 15
  
  console.log(add(15, 27, 10));
  console.log(add(10, 20, 30));
  console.log(add(5, 10, 15));

  // 10 

  function makeMessage (name, price) {
    // Change code below this line
     const message = `You picked ${name}, price per item is ${price} credits`;
    // Change code above this line
    return message;
  };

  // 11

  