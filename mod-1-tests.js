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

// 24 ЗАДАЧА: ОБЧИСЛЕННЯ ЗНИЖКИ. Функція getDiscount(totalSpent) визначає значення знижки, залежно від загальної суми витрачених грошей (параметр totalSpent) в магазині за весь час...

// function getDiscount(totalSpent) {
//     const BASE_DISCOUNT = 0;
//     const BRONZE_DISCOUNT = 0.02;
//     const SILVER_DISCOUNT = 0.05;
//     const GOLD_DISCOUNT = 0.1;
//     let discount;
//     // Change code below this line
//     if (totalSpent >= 50000){
//         discount = GOLD_DISCOUNT;
//     }
//     else if (totalSpent >= 20000 && totalSpent <= 49999){
//     discount = SILVER_DISCOUNT;
//     }
//     else if (totalSpent >= 5000 && totalSpent <= 19999){
//         discount = BRONZE_DISCOUNT;
//     }
//     else{
//         discount = BASE_DISCOUNT;
//     }
//     // Change code above this line
//     return discount;
//   }
  
//   check:
//   Виклик getDiscount(137000) повертає 0.1
//   Виклик getDiscount(46900) повертає 0.05
//   Виклик getDiscount(8250) повертає 0.02

  // 25 ТЕРНАРНИЙ ОПЕРАТОР Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

//   function checkStorage(available, ordered) {
//     let message;
//     // Change code below this line
  
//     // if (ordered > available) {
//     //   message = "Not enough goods in stock!";
//     // } else {
//     //   message = "The order is accepted, our manager will contact you";
//     // }

 
  
//     // Change code above this line  

//     message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//     return message;
//   }


//   Check:
//   Виклик checkStorage(100, 130) повертає "Not enough goods in stock!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"

// 26 ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ. Функція checkPassword(password) порівнює переданий їй пароль (параметр password) зі збереженим ....

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line
// message = password === "jqueryismyjam" ? "Access is allowed" : "Access denied, wrong password!";
//   // Change code above this line
//   return message;
// }


//27 ІНСТРУКЦІЯ SWITCH. Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її.....

// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//  switch (type) { // Change this line
//     case "organization" : // Change this line
//       price = 50; // Change this line
//       break;

//     case "professional": // Change this line
//       price = 20; // Change this line
//       break;

//     case "starter" : // Change this line
//       price = 0 ; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// 28. ІНСТРУКЦІЯ SWITCH З БЛОКОМ DEFAULT. Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора ....

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   // Change code below this line

//   switch (password) {
//     case null:
//     message = "Canceled by user!";
//     break;
//      case ADMIN_PASSWORD: 
//     message = "Welcome!";
//     break;
//    default: 
//     message = "Access denied, wrong password!";
//   }

//   // Change code above this line
//   return message;
// }

// check:
// Виклик checkPassword(null) повертає "Canceled by user!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"

//29. ЗАДАЧА: ДОСТАВКА ТОВАРУ. Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат...

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   let price; 

//   switch (country){
    
//       case "China":
//         price = 100;
//         message = `Shipping to ${country} will cost ${price} credits`;
//         break;    

//       case "Chile":
//         price = 250;
//         message = `Shipping to ${country} will cost ${price} credits`;
//         break;

//       case "Australia":
//         price = 170;
//         message = `Shipping to ${country} will cost ${price} credits`;
//         break;

//       case "Jamaica":
//       price = 120;
//       message = `Shipping to ${country} will cost ${price} credits`;
//       break;

//       default:
//         message = "Sorry, there is no delivery to your country";
//   }
//   // Change code above this line
//   return message;
// }

// Check: 

// Виклик getShippingCost("Australia") повертає "Shipping to Australia will cost 170 credits"
// Виклик getShippingCost("Germany") повертає "Sorry, there is no delivery to your country"


// 30. ДОВЖИНА РЯДКА. Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }


// 31. ІНДЕКСАЦІЯ ЕЛЕМЕНТІВ РЯДКА. 


// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length -1];

// // Change code above this line

// 32. МЕТОД SLICE(). Функція getSubstring(string, length) приймає рядок і повертає підрядок від початку і до length символів. Вона оголошує два параметри, значення яких будуть задаватися під час її виклику:

// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// Check:
// Виклик функції getSubstring("Hello world", 3) повертає "Hel"
// Виклик функції getSubstring("Hello world", 6) повертає "Hello"


// 33. ЗАДАЧА: ФОРМАТУВАННЯ ПОВІДОМЛЕННЯ. Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line

//   // if (message.length >= maxLength){
//   //   result = message.slice(0, maxLength) + "...";
//   // }
//   // else{
//   //   result = message;
//   // }

//   // Короткий варівант.
   
//   result = message.length > maxLength ? message.slice(0, maxLength) + "..." : message;

//   /// Change code above this line
//   return result;
// }

// Check: 
// Виклик функції formatMessage("Curabitur ligula sapien", 16) повертає "Curabitur ligula..."
// Виклик функції formatMessage("Curabitur ligula sapien", 23) повертає "Curabitur ligula sapien"

// 34. МЕТОДИ TOLOWERCASE() І TOUPPERCASE().  Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase() ; // Change this line

//   return normalizedInput;
// }


// 35. МЕТОД INCLUDES(). Функція checkName(fullname, name) приймає два параметри та повертає буль true або false - результат перевірки входження підрядка name у рядок fullname.

// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//    return result;
//  }

 // 36. ЗАДАЧА: ПЕРЕВІРКА СПАМУ. Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

//  function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   const normalizedInput = message.toLowerCase();
//   result = normalizedInput.includes("spam") ||  normalizedInput.includes("sale");

//   // Change code above this line
//   return result;
// }

//  check:

//  Виклик функції checkForSpam("Latest technology news") повертає false
// Виклик функції checkForSpam("JavaScript weekly newsletter")повертає false

// END === УРАААА!!!!