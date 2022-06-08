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

// 15. 