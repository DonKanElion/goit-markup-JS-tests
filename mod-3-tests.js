console.log('Mod 3 tests');

// 1. Створення об'єкта. Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// 2. ВКЛАДЕНІ ВЛАСТИВОСТІ. Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:...

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner:{
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     }
//   };

  // Як додавати в обєкт вкладенні властивості??

  // 3. ДОСТУП ДО ВЛАСТИВОСТЕЙ ЧЕРЕЗ КРАПКУ. Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment...

//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Change code above this line
  
// 4. ДОСТУП ДО ВКЛАДЕНИХ ВЛАСТИВОСТЕЙ. Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   // Change code below this line
//   const ownerName = apartment.owner.name;
//   const ownerPhone = apartment.owner.phone;
//   const ownerEmail = apartment.owner.email;
//   const numberOfTags = apartment.tags.length;
//   const firstTag = apartment.tags[0];
//   const lastTag = apartment.tags[2];
//   // Change code above this line


// 5. ДОСТУП ДО ВЛАСТИВОСТЕЙ ЧЕРЕЗ КВАДРАТНІ ДУЖКИ. Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//   };
  
//   // Change code below this line
//   const aptRating = apartment["rating"];
//   const aptDescr = apartment["descr"];
//   const aptPrice = apartment["price"];
//   const aptTags = apartment["tags"];
//   // Change code above this line
  
  // 6. ЗМІНА ЗНАЧЕННЯ ВЛАСТИВОСТІ. Доповни код, оновивши значення властивостей об'єкта apartment: ...


//   const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//       name: "Henry",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
//   apartment.price = 5000;
//   apartment.rating = 4.7; 
//   apartment.owner.name = "Henry Sibola"; 
//   apartment.tags.push("trusted");

//   // Change code below this line
 
// 7. ДОДАВАННЯ ВЛАСТИВОСТЕЙ. Додай об'єкту apartment кілька нових властивостей:...

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//       name: "Henry Sibola",
//       phone: "982-126-1588",
//       email: "henry.carter@aptmail.com",
//     },
//   };
  
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {country: "Jamaica", city: "Kingston",};

// console.table(apartment);
// console.log(apartment);

// 8. КОРОТКІ ВЛАСТИВОСТІ. 

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// 9. ОБЧИСЛЮВАНІ ВЛАСТИВОСТІ. Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName....

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// 10. ЦИКЛ FOR...IN.  Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   const keys = [];
//   const values = [];
//   // Change code below this line

//   for (const key in apartment){

//       console.log("Це ключ:", key);
//       keys.push(key);

//       console.log("А це значення:", apartment[key]);
//       values.push(apartment[key]);
      
//       }

//       console.log("This is kays: ", keys);
//       console.log("This is values: ", values);

// 11. МЕТОД HASOWNPROPERTY(). Власність. Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   if (apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);

//   console.log(apartment.hasOwnProperty(key));
//   }
//   // Change code above this line
// }

// console.log(keys);
// console.log(values);

// 12. ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ. Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     // console.table(object);
//     for (const key in object){

//         if (object.hasOwnProperty([key])){
//             // console.log([key].length);
//             propCount += [key].length;
//         }
//         // propCount = propCount.length;   
//     }
//     // Change code above this line
//     return propCount;
//   }

// 13. МЕТОД OBJECT.KEYS().  Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const values = [];
//   const keys = Object.keys(apartment);

//   console.log(keys);

//   for (const key of keys){

//       values.push(apartment[key]);
//       console.log(apartment[key]);
//   }

//   console.log(values);
//   console.log(keys);
  
  
  // 14. ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0.  Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

  // 1 var. Not tested.

//   function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     let keys = Object.keys(object);
    
//     for (const key in keys){

//         if (object.hasOwnProperty([key])){
       
//              keys.push(object[key]);
//         }
//     return propCount = keys.length;
//     // Change code above this line
//   }
//   }

 // 2 var. 
 
//  function countProps(object) {
//     // Change code below this line
   
//     let propObject = Object.keys(object);
//     let propCount = propObject.length;

  
//     return propCount;
//     // Change code above this line
//   }

   // 3 var. 
 
//    function countProps(object) {
//     // Change code below this line 

//     return propCount = Object.keys(object).length;

//     // Change code above this line
//   }

  //  countProps({ name: "Mango", age: 2 }) // //  2
//  countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) // //  3


// 15. МЕТОД OBJECT.VALUES(). Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values - масив всіх значень його властивостей. Використовуй методи Object.keys() і Object.values().

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//   // Change code below this line
//   const keys = Object.keys(apartment);
//   console.log(keys);

//   const values = Object.values(apartment);
//   console.log(values);


// 16.  ЗАДАЧА: ВИТРАТИ НА ЗАРПЛАТУ. Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line
//     for (const salary in salaries){

//         if(salaries.hasOwnProperty([salary])){
//             totalSalary += salaries[salary];
//         }
//     }
//     // Change code above this line
//     return totalSalary;
//   }

//  countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) // // 330
//  countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })  // //  400

// 17. МАСИВ ОБ'ЄКТІВ. Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors. 

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];

//   for(const color of colors){
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb)
//   }
//   console.log(hexColors);
//   console.log(rgbColors);

  
// 18. ЗАДАЧА. ПОШУК ОБ'ЄКТА ЗА ЗНАЧЕННЯМ ВЛАСТИВОСТІ. Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getProductPrice(productName) {
//     for (const product of products){
//         if (product.name === productName){
//             return product.price;
//         }
//     }
//     return null;
//   }

//  getProductPrice("Scanner") // // 2700.
//  getProductPrice("Droid") // //   400.
//  getProductPrice("Engine") // //  null.


// !!!  19. ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ. Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     const array = [];
//     for (const product of products){

//         if(product[propName]){
//             array.push(product[propName]);
//         }

//     }
//     return array;
//   }
  

//   getAllPropValues("quantity") // //  [4, 3, 7, 9]
//   getAllPropValues("price") // //  [1300, 2700, 400, 1200]
//   getAllPropValues("category") // //  []

// 20. ЗАДАЧА: ЗАГАЛЬНА ВАРТІСТЬ ТОВАРУ. Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function calculateTotalPrice(productName) {

//         for (const product of products){
           
//             if(product.name === productName) {
//                 return result = product.price * product.quantity;
//             }
//       }
//       return total = 0;
//     }

// calculateTotalPrice("Blaster") // // 0
// calculateTotalPrice("Radar") // // 5200
// calculateTotalPrice("Droid") // // 2800

// 21. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   const {yesterday, today, tomorrow} = highTemperatures

// //   const yesterday = highTemperatures.yesterday;
// //   const today = highTemperatures.today;
// //   const tomorrow = highTemperatures.tomorrow;
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;

  
// 22. ЗНАЧЕННЯ ЗА ЗАМОВЧУВАННЯМ. У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
//   // const yesterday = highTemperatures.yesterday;
//   // const today = highTemperatures.today;
//   // const tomorrow = highTemperatures.tomorrow;
//   // const icon = highTemperatures.icon;
  
//   const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures
  
//   // Change code above this line
//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  

  // 23. ЗМІНА ІМЕНІ ЗМІННОЇ. Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". 


//   const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };
//   // Change code below this line
  
// //   const highYesterday = highTemperatures.yesterday;
// //   const highToday = highTemperatures.today;
// //   const highTomorrow = highTemperatures.tomorrow;
// //   const highIcon = highTemperatures.icon;

//   const {yesterday: highYesterday, today: highToday, tomorrow: highTomorrow, icon: highIcon ='https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;
  
//   // Change code above this line
//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  

  // 24. ДЕСТРУКТУРИЗАЦІЯ В ЦИКЛАХ. Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

 // Було...

//  const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//   }

  
//  // стало......
//   const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const {hex, rgb} of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   }
  

  // 25. ГЛИБОКА ДЕСТРУКТУРИЗАЦІЯ. Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg". 

  // Before...

//   const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };
  // Change code below this line
  
//   const highToday = forecast.today.high;
//   const lowToday = forecast.today.low;
//   const todayIcon = forecast.today.icon;
  
//   const highTomorrow = forecast.tomorrow.high;
//   const lowTomorrow = forecast.tomorrow.low;
//   const tomorrowIcon = forecast.tomorrow.icon;

  // After ...

// const {today: {low: lowToday, high: highToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'}, tomorrow: { high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}} = forecast;

  
//  26. ПАТЕРН «ОБ'ЄКТ НАЛАШТУВАНЬ».  Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.
// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації властивостей об'єкта forecast.


// Change code below this line
// function calculateMeanTemperature(forecast) {

//     // BEFORE...

//     // const todayLow = forecast.today.low;
//     // const todayHigh = forecast.today.high;
//     // const tomorrowLow = forecast.tomorrow.low;
//     // const tomorrowHigh = forecast.tomorrow.high;
//     // After .

//     const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
  
//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
//   }

//  calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) // //  28.5
//  calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) // //  37

// 27. ОПЕРАЦІЯ SPREAD ПРИ ПЕРЕДАЧІ АРГУМЕНТІВ. У змінній scores зберігається масив результатів тестування. Використовуючи розподіл і методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у worstScore - найнижчий.

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line

// // const bestScore = scores;
// // const worstScore = scores;

// const bestScore = Math.max(...scores);
// console.log(bestScore);

// const worstScore = Math.min(...scores);
// console.log(worstScore);

// 28. ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО МАСИВУ. У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп. Використовуючи розподіл, доповни код таким чином, щоб:....

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// console.log(allScores);

// const bestScore = Math.max(...allScores);
// console.log(bestScore);

// const worstScore = Math.min(...allScores);
// console.log(worstScore);


// 29. ОПЕРАЦІЯ SPREAD ПІД ЧАС СТВОРЕННЯ НОВОГО ОБ'ЄКТА. В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings. Під час створення тесту, усі або частину налаштувань можна перевизначити, вони зберігаються у змінній overrideSettings....

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
//   };
//   const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
//   };
//   // Change code below this line
//   const finalSettings = {...defaultSettings, ...overrideSettings};

//   console.log(finalSettings);


  // 30. ЗАДАЧА. КАРТКИ ЗАВДАНЬ. Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями. text - текст завдання. category - категорія завдання. priority - пріоритет завдання. Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній...

//   function makeTask(data) {

//     const defauldData = {category: "General", priority: "Normal", completed: false, ...data};

//     return defauldData;

//   }

// // скорочений варік від Катерини Скориної: 

// return { category, priority, ...data, completed}

////// Check:
  //  makeTask({}) // //  { category: "General", priority: "Normal", completed: false }
  //  makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) // //  { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

  // makeTask({ category: "Finance", text: "Take interest" }) // //  { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

  //  makeTask({}) // //  { category: "General", priority: "Normal", completed: false }

// 31. ОПЕРАЦІЯ REST ДЛЯ ЗБИРАННЯ ВСІХ АРГУМЕНТІВ ФУНКЦІ. Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь-яку кількість аргументів, рахувала і повертала їх суму.


// var. 1

// function add(...args) {
//     let total = 0;
//     for (const arg in args){
//         total += args[arg];
//     }
//     return total;
//   }
  
  // var. 2 

//   function add(...args) {
      
//     let total = 0;
//     for (const agr of args){
//         total += agr
//     }
//     return total;
//   }

  // Check(S):

  // add(32, 6, 13, 19, 8) // //  78
// add(74, 11, 62, 46, 12, 36) // //  241
  
// 32. ОПЕРАЦІЯ REST ДЛЯ ЗБИРАННЯ ЧАСТИНИ АРГУМЕНТІВ ФУНКЦІЇ. Функція addOverNum() рахує суму всіх аргументів. Зміни параметри і тіло функції addOverNum() таким чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число. Це число повинно бути першим параметром функції.

// function addOverNum(number, ...args) {
//     let total = 0;

//     for (const arg of args) {

//         if(arg > number){
//             total += arg;
//         }
//     }
//     return total;
//   }

//  addOverNum(50, 15, 27) // //  0
//  addOverNum(10, 12, 4, 11, 48, 10, 8) // //  71
//  addOverNum(15, 32, 6, 13, 19, 8) // //  51

// 33. ЗАДАЧА. МАСИВ ЗБІГІВ. Функція findMatches() приймає довільну кількість аргументів. Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами. Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу. Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив [1, 2], тому що тільки вони є в масиві першого аргументу.

// Change code below this line
// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line

//         for (const arg of args) {

//         if(array.includes(arg)){
//             matches.push(arg);
//         }
//     }
//     // Change code above this line
//     return matches;
//   }

  
 // Check:
//  findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) // // [17, 89, 2]
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) // // [24, 9, 41]
// findMatches([63, 11, 8, 29], 4, 7, 16) // //  []
  
// 34. МЕТОДИ ОБ'ЄКТА. Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з getBooks() і addBook(bookName).Метод removeBook(bookName) буде видаляти книгу за назвою. Повертає рядок "Deleting book <назва книги>", де <назва книги> - це значення параметра bookName. Метод updateBook(oldName, newName) буде оновлювати назву книги на нову. Повертає рядок "Updating book <стара назва> to <нова назва>", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// const bookShelf = {
//     // Change code below this line
//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//       return "Returning all books";
//     },
//     addBook(bookName) {
//       return `Adding book ${bookName}`;
//     },

//     removeBook(bookName) {
//     // delete from array

//         return `Deleting book ${bookName}`;
//     },

//     updateBook(oldName, newName) {
//         // rename book

//         return `Updating book ${oldName} to ${newName}`;
//     }
//   };
  
// check: 
// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") === рядок "Updating book Sands of dune to Dune"

//  методу bookShelf.removeBook("Red sunset") === рядок "Deleting book Red sunset"

// 35. ДОСТУП ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА В ЙОГО МЕТОДАХ. Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName у властивості books. Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і splice() для того, щоб замінити цей елемент.

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1, newName);
  
//       // Change code above this line
//     },
//   };

  
// Check:
// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення властивості books - це масив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення властивості books - це масив ["Dune", "Haze", "The guardian of dreams"]

// 36. ЗАДАЧА. КРАМНИЦЯ ЗІЛЛЯ «У СТАРОЇ ЖАБИ». До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю - додавання, видалення, пошуку та оновлення зілля. Додай об'єкту atTheOldToad властивість potions, значенням якої зроби порожній масив.

// const atTheOldToad = {
//     // Change code below this line
//     potions: [],
   
//     // Change code above this line
//   };
  
  
// 37. ЗАДАЧА. ОТРИМУЄМО ВСЕ ЗІЛЛЯ. Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line
//     getPotions(){
//     return this.potions;
//     },
//     // Change code above this line
//   };
  
  // Виклик методу atTheOldToad.getPotions() === ["Speed potion", "Dragon breath", "Stone skin"]

// 38. ЗАДАЧА: ДОДАЄМО НОВЕ ЗІЛЛЯ.  Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//       // Change code below this line
//         this.potions.push(potionName);  
//       // Change code above this line
//     },
//   };
  

// 39. ЗАДАЧА: ВИДАЛЯЄМО ЗІЛЛЯ. Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у властивості potions.

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//       // Change code below this line
//        const indexPotions =  this.potions.indexOf(potionName);
//        this.potions.splice(indexPotions, 1);
//       // Change code above this line
//     },
//   };


// 40. ЗАДАЧА: ОНОВЛЮЄМО ЗІЛЛЯ. Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.


// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//       // Change code below this line
//         const indexPotions =  this.potions.indexOf(oldName);
//         this.potions.splice(indexPotions, 1, newName);
  
//       // Change code above this line
//     },
//   };

  // 41. ЗАДАЧА: РОЗШИРЮЄМО ІНВЕНТАР.  Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому, можливо, й іншими характеристиками. Тому зараз у властивості potions буде зберігатися масив об'єктів з наступними властивостями....

// var. 1 не працює.

//   const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//       return this.potions;
//     },

//     addPotion(newPotion) {
//         this.potions.includes(newPotion) ? `Error! Potion ${newPotion} is already in your inventory!` : this.potions.push(newPotion);
//     },
//     removePotion(potionName) {
//       const potionIndex = this.potions.indexOf(potionName);
      
//       potionIndex === -1 ?  `Potion ${potionName} is not in inventory!` : this.potions.splice(potionIndex, 1);
//     },

//     updatePotionName(oldName, newName) {
//       const potionIndex = this.potions.indexOf(oldName);
//       potionIndex === -1 ? `Potion ${oldName} is not in inventory!` : this.potions.splice(potionIndex, 1, newName);
//     },
//     // Change code above this line
//   };
  
// var. 2

  // const atTheOldToad = {
  //   potions: [
  //     { name: "Speed potion", price: 460 },
  //     { name: "Dragon breath", price: 780 },
  //     { name: "Stone skin", price: 520 },
  //   ],
  //   // Change code below this line
  //   getPotions() { 
  //     return this.potions;
  //   },

  //   addPotion(newPotion) {

  //       for ( const potion in this.potions.name){
  //         console.log("Potion: ", potion.name);
  //         console.log("newPorion: ", newPotion.name);
  //         console.log("this.potions: ", this.potions);

  //         if(potion.name !== newPotion.name){
  //           return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //         }
          
  //       }
  //       this.potions.push(newPotion);
  //       console.log("NEW. this.potions: ", this.potions)
      
  //   },

    // removePotion(potionName) {
    //   let potionIndex = 0;
  
    //   for (let potion of this.potions) {

    //     if(potion.name === potionName){
    //     potionIndex = this.potions.splice(this.potions.indexOf(potion), 1)
    //     } 
    //   }
    //   return `Potion ${potionName} is not in inventory!`;
    // },

    // updatePotionName(oldName, newName) {

    //     for (let potion of this.potions){
    //         if (potion.name === oldName){
    //             potion.name = newName;
    //         }
    //     }
    //     return `Potion ${oldName} is not in inventory!`;
    //   },
  
  // };

 // Рішенння Катерина скориної.

//   addPotion (newPotion)  {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${potion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
// removePotion(potionName) {
//   for(const potion of this.potions) {
//     const potionIndex = this.potions.indexOf(potion);
//     if (potion.name === potionName) {
//       this.potions.splice(potionIndex, 1);
//     }
//   }
//   return `Potion ${potionName} is not in inventory!`;
// },
// updatePotionName (oldName, newName) {
//   for (const potion of this.potions) {
//     if (potion.name === oldName) {
//       potion.name = newName;
//     }
//   }
//   return `Potion ${oldName} is not in inventory!`;
// },
//   };