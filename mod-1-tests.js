// //"use strict";

console.log('Mod 1 tests');

// // 2 ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЗМІННОЇ

// // let productName = "Droid";
// // let pricePerItem = 2000;

// // productName = "Repair droid";
// // pricePerItem = 3500;

// // console.log(productName);
// // console.log(pricePerItem);

// // 3 ТИПИ ПРИМІТИВІВ (ЧИСЛА, РЯДКИ, БУЛІ)

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// // 4 МАТЕМАТИЧНІ ОПЕРАТОРИ
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

// // 5 ШАБЛОННІ РЯДКИ. 

// const productName = "Droid";
// const pricePerItem = 3500;

// // Change code below this line

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// console.log(message);

// // 6  ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ.


// // Change code below this line
// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// console.log(message);

// // 7 ОГОЛОШЕННЯ І ВИКЛИК ФУНКЦІЇ. Функція - це підпрограма, незалежна частина коду, призначена для багаторазового виконання конкретної задачі з різними початковими значеннями. 

// // Change code below this line
// function sayHi(){
//     console.log("Hello, this is my first function!")
// }
// sayHi();

// // 8  ПАРАМЕТРИ ТА АРГУМЕНТИ. В круглих дужках після імені функції йдуть параметри - перелік даних, які функція очікує під час виклику.


// // Change code below this line
// function add(a, b,c) {
//     console.log(`Addition result equals ${a + b + c}`);
//     // Change code above this line
//   }
  
//   add(15, 27, 10);
//   add(10, 20, 30);
//   add(5, 10, 15);

//   // 9 ПОВЕРНЕННЯ ЗНАЧЕННЯ. Оператор return використовується для передачі значення з тіла функції у зовнішній код. 

//   function add(a, b, c) {
//     // Change code below this line
//   return a + b + c;
  
//     // Change code above this line
//   }
  
//   add(2, 5, 8); // 15
  
//   console.log(add(15, 27, 10));
//   console.log(add(10, 20, 30));
//   console.log(add(5, 10, 15));

//   // 10 ЗАДАЧА: ШАБЛОННІ РЯДКИ 2.0. Функція makeMessage(name, price) складає і повертає повідомлення про покупку. 

//   function makeMessage (name, price) {
//     // Change code below this line
//      const message = `You picked ${name}, price per item is ${price} credits`;
//     // Change code above this line
//     return message;
//   };
//   //console
//   makeMessage('Scanner', 3500)
//   'You picked Scanner, price per item is 3500 credits'

//   makeMessage('Lula', 210);
//   'You picked Lula, price per item is 210 credits'

//   // 11 ЗАДАЧА: МАТЕМАТИЧНІ ОПЕРАТОРИ 2.0  Функція calculateTotalPrice рахує і повертає загальну суму покупки. 

//   function calculateTotalPrice (orderedQuantity, pricePerItem) {
//     // Change code below this line
//     const totalPrice = (orderedQuantity * pricePerItem);
  
//     // Change code above this line
//     return totalPrice;
//   };

//   //console
//   calculateTotalPrice(5, 100);
//   500
//   calculateTotalPrice(6, 34);
//   204

//   // 12  ЗАДАЧА: ЗАМОВЛЕННЯ ПРОДУКТУ 2.0.  Функція makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) складає і повертає повідомлення про покупку ремонтних дроїдів.
  
//   function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//     // Change code below this line
  
//     const message =`You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  
//     // Change code above this line
//     return message;
//   }
  
//   //console 
//   makeOrderMessage(4, 300, 100);
//   'You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price.'

//  13 ОПЕРАТОРИ ПОРІВНЯННЯ >, >=, < І <=

//   function isAdult(age) {
//     // Change code below this line
//     const passed = (age >= 18);
  
//     // Change code above this line
//     return passed;
//   }
// console.log (isAdult(20));


// Виклик isAdult(20) повертає true
// Виклик isAdult(14) повертає false
// Виклик isAdult(8) повертає false

// 14 ОПЕРАТОРИ ПОРІВНЯННЯ === І !== Функція isValidPassword (password) перевіряє рівність збереженого і введеного паролів і повертає результат перевірки - буль true або false

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// 15 перевірка віку +18

// function checkAge(age) {
//     let message;
  
//     if (age >= 18) { 
//       message = 'You are an adult';
//     } else {
//       message = 'You are a minor';
//     }
  
//     return message;
//   }

// консоль:

// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"


// 16 ЗАДАЧА: СКЛАД ТОВАРІВ.  Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику...

// function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
//       if (available >= ordered) {
//         message = 'Order is processed, our manager will contact you.';
//       }
//     // Change code above this line
//     else{
//       message = 'Not enough goods in stock!';
//     }
//     return message;
//   }


// Консоль: 
//   Виклик checkStorage(100, 50) повертає "Order is processed, our manager will contact you."
//   Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"

// 17 - КОМБІНОВАНИЙ ОПЕРАТОР ПРИСВОЄННЯ 

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a = a + 2;
// b = b - 4;
// c = c * 3;
// d = d / 10;

// Короткий запис:
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// 18 ЗАДАЧА: ПЕРЕВІРКА БАЛАНСУ Функція makeTransaction(pricePerDroid, orderedQuantity, customerCredits) виконує транзакцію з продажу дроїдів і повертає повідомлення про результат операції

// 1   

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//     let message = "Insufficient funds!";
//     // Change code below this line
//     let totalPrice = 0;
//      if((pricePerDroid * orderedQuantity) <= customerCredits){

//          totalPrice = pricePerDroid * orderedQuantity;
//          customerCredits -= totalPrice;
//          message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//      }
//     // Change code above this line
//     return message;
//   }

// Перевірка: 

//   Виклик makeTransaction(3000, 5, 23000) повертає "You ordered 5 droids, you have 8000 credits left"
//   Виклик makeTransaction(1000, 3, 15000) повертає "You ordered 3 droids, you have 12000 credits left"

// 19 БЛОК ELSE...IF. Функція checkPassword(password) отримує пароль користувача в параметр password...

// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     let message;
  
//     if (password === null) { // Change this line
//       message =  'Canceled by user!';
//     } else if (password === ADMIN_PASSWORD) { // Change this line
//       message = 'Welcome!';
//     } else {
//       message = 'Access denied, wrong password!';
//     }
  
//     return message;
//   }
 

  // 20 ЗАДАЧА: СКЛАД ТОВАРІВ 2.0. Функція checkStorage(available, ordered) перевіряє можливість оформлення замовлення і повертає повідомлення про результат. 

//   function checkStorage(available, ordered) {
//     let message = 'The order is accepted, our manager will contact you';
//     // Change code below this line
//         if(ordered === 0){
//             message = 'There are no products in the order!';
//         }
//     // Change code above this line
//         else if (ordered > available){
//             message = 'Your order is too large, there are not enough items in stock!';
//         }
//     return message;
//   }

//     // Перевірка: 
//     // Виклик checkStorage(100, 130) повертає "Your order is too large, there are not enough items in stock!"
//     // Виклик checkStorage(70, 0)повертає "There are no products in the order!"
    

// 21 ЛОГІЧНЕ «І» (ОПЕРАТОР &&). Функція isNumberInRange(start, end, number) перевіряє, чи входить число у проміжок. Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:

// function isNumberInRange(start, end, number) {
//     const isInRange =  (number > start && number < end); // Change this line
  
//     return isInRange;
//   }

//   Check:

//   Виклик isNumberInRange(10, 30, 17) повертає true
// Виклик isNumberInRange(10, 30, 5) повертає false

// 22 ЛОГІЧНЕ «АБО» (ОПЕРАТОР ||). Функція checkIfCanAccessContent(subType) перевіряє, чи може користувач отримати доступ до контенту. 

// function checkIfCanAccessContent(subType) {
//     const canAccessContent = subType === "pro" || subType === "vip";
//     return canAccessContent;
//   }

//   Check:
// Виклик checkIfCanAccessContent("pro") повертає true
// Виклик checkIfCanAccessContent("starter") повертає false

// 23 ЛОГІЧНЕ «НЕ» (ОПЕРАТОР !). Функція isNumberNotInRange(start, end, number) перевіряє, чи не входить число у проміжок. Тобто число повинно бути меншим або дорівнювати start

// function isNumberNotInRange(start, end, number) {
//     const isInRange = number >= start && number <= end;
//     const isNotInRange = !isInRange; // Change this line
  
//     return isNotInRange;
//   }

//   Check: 
//   Виклик isNumberNotInRange(10, 30, 17) повертає false
// Виклик isNumberNotInRange(10, 30, 5) повертає true

// 24 