console.log('Mod 2 tests');

// 2. ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ). Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і...

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  // if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }
  // return message;

  // Мій варіант 1.

      // const message = password === ADMIN_PASSWORD ? 'Welcome!' : 'Access denied, wrong password!';
      // return message;

    // Repeta 04. Find-login ++
      // const message = ADMIN_PASSWORD.includes(password) ? 'Welcome!' : 'Access denied, wrong password!';
      // return message;

  
  // Change code above this line
// }

// Найкоротший варіант:  Мій варіант 2.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//  return ADMIN_PASSWORD.includes(password) ? 'Welcome!' : 'Access denied, wrong password!';
//   // Change code above this line
// }

//   Мій варіант 3. зарахований.
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if(password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!'; 
//   // Change code above this line
// }


// Check:

//  checkPassword("polyhax") повертає "Access denied, wrong password!"
// checkPassword("jqueryismyjam") повертає "Welcome!"


// 3. ЗАДАЧА: СКЛАД ТОВАРІВ 3.0. Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, ...


// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   } 
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   } 
//     return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }

// 4. СТВОРЕННЯ МАСИВУ... Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// 5. ДОСТУП ДО ЕЛЕМЕНТІВ ЗА ІНДЕКСОМ...Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// console.log(firstElement);

// const secondElement = fruits[1];
// console.log(secondElement);

// const lastElement = fruits[3];
// console.log(lastElement);

// Change code below this line

// 6. ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЕЛЕМЕНТА... 

// const fruits = ["apple", "plum", "pear", "orange"];
// console.log(fruits);
// fruits[1] = "peach";
// fruits[3] = "banana";
// console.log(fruits);

// Write your code under this line

// 7. ДОВЖИНА МАСИВУ. 

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// 8. ІНДЕКС ОСТАННЬОГО ЕЛЕМЕНТА..


// const fruits = ["apple", "peach", "pear", "banana"];
// console.log(fruits);

// const lastElementIndex = fruits.length - 1;
// console.log(lastElementIndex);

// const lastElement = fruits[lastElementIndex];

// Change code below this line

// 9. ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ.  Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array

// const fruits = ["apple", "peach", "pear", "banana"];
// console.log(fruits);

// function getExtremeElements(array) {
//   // Change code below this line
//   const firstElement = array[0];
//   // console.log(firstElement);

//   const lastElementIndex = array.length - 1;
//   // console.log(lastElementIndex);

//   const lastElement = array[lastElementIndex];
//   // console.log(lastElement);

//   const result = [firstElement, lastElement];

//   return result;

//   // Change code above this line
// }


// 10. МЕТОД РЯДКІВ SPLIT(). Доповни код функції splitMessage(message, delimeter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimeter - масив рядків.

// function splitMessage(message, delimeter) {
//   let words;

//  words = message.split(delimeter);

//   return words;
// }

// // check:
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]

// 11. ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС. Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово. Оголошена функція calculateEngravingPrice(message, pricePerWord). ...

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   const lengthMessage = message.split(" ").length;
//   console.log(lengthMessage);

//   message = lengthMessage * pricePerWord;
//   return message;
//   // Change code above this line
// }

// Check:

// calculateEngravingPrice("JavaScript is in my blood", 10) // повертає 50
// calculateEngravingPrice("JavaScript is in my blood", 20) // повертає 100

// 12. МЕТОД МАСИВУ JOIN(). Доповни код функції makeStringFromArray(array, delimeter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimeter - рядок.

// function makeStringFromArray(array, delimeter) {
//   let string;
//   string = array.join(delimeter);
//   console.log(string);

//   return string;

// }

// // check;
//  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") // повертає "Mango hurries to the train"
//  makeStringFromArray(["M", "a", "n", "g", "o"], "") // повертає "Mango"

// 13. ЗАДАЧА: ГЕНЕРАТОР SLUG. Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес. Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, ..

// function slugify(title) {
// return title.toLowerCase().split(' ').join("-");
// }

// check:

//  slugify("English for developer") // "english-for-developer"
//  slugify("Ten secrets of JavaScript") // "ten-secrets-of-javascript"

// 14. МЕТОД SLICE(). Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// console.log(firstTwoEls);

// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);

// const lastThreeEls = fruits.slice(-3);
// console.log(lastThreeEls);

// 15. МЕТОД CONCAT().Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients. 

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// 16. ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ. Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//  const allArray = firstArray.concat(secondArray); 
//  const lengthArray = allArray.length;

//  return lengthArray <= maxLength ? allArray : allArray.slice(0, maxLength);
 
//   // Change code above this line
// }

// // Check:

//  makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) // ["Mango", "Poly", "Ajax"]
//  makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) // ["Mango", "Poly", "Houston", "Ajax"]

// 17. ЦИКЛ FOR. Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.. 

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) {
//      console.log(i);
// }


// 18. ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR). Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.


// function calculateTotal(number) {
//   // Change code below this line
//     let total = 0;

//       for (let i = 0; i <= number; total+=i++){ 
//       }

//      return total;
//  }

//  // Check:
//   calculateTotal(3) // повертає 6
//  calculateTotal(7) // повертає 28
//   calculateTotal(18) // повертає 171

// 19. ІТЕРАЦІЯ ПО МАСИВУ. Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// console.log(fruits.length);

// for (let i = 0; i < fruits.length; i+=1) { // Change this line

//   const fruit = fruits[i]; 
  
//   // Change this line
//   console.log(fruit);
// }

// 20. ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ. Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i +=1){

//     total = total + order[i];
//   }

//   // Change code above this line
//   return total;
// }


// //Check:

//  calculateTotalPrice([12, 85, 37, 4]) //повертає 138
//  calculateTotalPrice([164, 48, 291]) //повертає 503

//21. ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА. Напиши функцію findLongestWordstring), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.


// function findLongestWord(string) {
//   // Change code below this line
// const array = string.split(" ");
// let longestWord = array[0];

// for (i =0; i < array.length; i += 1) {

//     if( longestWord.length < array[i].length){
//       longestWord = array[i];
//     }
// }

// return longestWord;
//   // Change code above this line
// }

// const words = "May the force be with you";
// const wordsSplit = words.split(" ");

// console.log(words);

// console.log(words.split(" "));
// console.log(wordsSplit[2].length);


// 1. Отримали рядок
// 2. розбили його на слова split(" "). Порівняти довжину кожного слова з найбільшим, попередньо створивши нову змінну яка буде порівнюватись з новим словом, і за виконання умови присвоюватись нове значення. 
// 3. Перебрати через цикл фор оф
// 4. порівняти жовжину слів, з присвожєнням до змінної по кожній ітерації
// 5. Вивести результат. 

// 22. МЕТОД PUSH(). Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.


// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for(let i = min; i <= max; i += 1){
//     total = numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }


// // createArrayOfNumbers(29, 34) // [29, 30, 31, 32, 33, 34]


// const min = 29;
// const max = 34;

// const numbers = [];

//   // Change code below this line
//     for(let i = min; i <= max; i += 1){
//       total = numbers.push(i);
//     }

//     console.log("Result: ", numbers);


// 23. ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ. Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).


// function filterArray(numbers, value) {
//   // Change code below this line
//   const newArray = []

//   for (let i = 0; i < numbers.length; i +=1){
  
//       if(numbers[i] > value){
//         newArray.push(numbers[i]);
//       }
      
//   }
//   return newArray;
//  // Change code above this line
// }


// filterArray([12, 24, 8, 41, 76], 38) // // [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) // // [24, 41, 76]

// 24. МЕТОД INCLUDES(). Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits...

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); 
// }

// Виклик checkFruit("plum") // true
// checkFruit("mandarin") // false

//!!! 25. ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ. Спільними елементами масивів називають ті елементи, які присутні у всіх масивах. Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.

// function getCommonElements(array1, array2) {
//   const array = [];

//   for (let number of array1){

//       if(array2.includes(number)){

//         array.push(number);
//         // console.log(number);
//       }
//   }
//   return array;
// }

// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3]

// const array1 = [24, 12, 27, 3];
// const array2 = [12, 8, 3, 36, 27];
// const array = []; // [12, 27, 3]

// // const allArray = array1.concat(array2);
// // console.log(allArray);

// for (let number of array1){

//       if(array2.includes(number)){
//         array.push(number);
//         console.log(number);
//       }
// }

// 1 порівняти 2 масиви
// 2 виділити і додати однакові в новий масив
// 3 повернути новий масив.

// обєднати масиви
// знайти копіі в масиві, додати їх значення в новий масив.

// 26. ЦИКЛ FOR...OF. Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const price of order) {
//     total += price;
//   }
//   // Change code above this line
//   return total;
// }


// calculateTotalPrice([164, 48, 291]) // //  503
// calculateTotalPrice([412, 371, 94, 63, 176]) // // 1116

// 27. ЗАЧАДА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0. Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Before

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


// After

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//   }

//   return filteredNumbers;
// }


//  filterArray([12, 24, 8, 41, 76], 38) // //  [41, 76]
//   filterArray([12, 24, 8, 41, 76], 20) // // [24, 41, 76]

// 28. ОПЕРАТОР %...Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Change code below this line
// const a = 3 % 3; // 0
// console.log(a);

// const b = 4 % 3; // 1
// console.log(b);

// const c = 11 % 8; // 3
// console.log(c);

// const d = 12 % 7; // 5 = 12 - 7 = 5
// console.log(d);

// const e = 8 % 6; // 2 = 8 - 2 = 6
// console.log(e);

// Бажане число віднімаємо від знаменника, і отримуємо остачу. 

// 29. ЗАДАЧА: ПАРНІ ЧИСЛА. Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
  
//   for (let i = start; i <= end; i +=1)

//     if (i % 2 === 0){
//        evenNumbers.push(i);
//     }

//   return evenNumbers;
//  }

//  getEvenNumbers(3, 11) // //  [4, 6, 8, 10]
//   getEvenNumbers(6, 12) // //  [6, 8, 10, 12]

// 30. ОПЕРАТОР BREAK. Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// 31. ОПЕРАТОР BREAK VS RETURN У ФУНКЦІЇ.  Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона: повертала перше число від start до end, яке ділиться на divisor без остачі, не використала оператор break, не використала змінну number. 

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }

//   return number;
//   // Change code above this line
// }


// 32. ЗАДАЧА: ФУНКЦІЯ INCLUDES(). Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.  При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {

//     for (let i = 0; i <= array.length; i += 1){
      
//         if (array[i] === value){
//           return true
//         }
        
//       }
//       return false
// } 

//   includes([1, 2, 3, 4, 5], 17) // //  false
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") // //  true

//        END this modul;))