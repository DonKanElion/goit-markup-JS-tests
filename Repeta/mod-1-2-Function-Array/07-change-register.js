console.log("07. Заміна реєстру на протилежний"); 

   
/*
 * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

//   // if (letter === letter.toLowerCase()) {
//   //   console.log('Эта буква в нижнем регистре!!! - ', letter);

//   //   invertedString += letter.toUpperCase();
//   // } else {
//   //   console.log('Эта буква в верхнет регистре!!! - ', letter);
//   //   invertedString += letter.toLowerCase();
//   // }

// //   додаткова змінна для кращої читаємості:
//   const isEqual = letter === letter.toLowerCase();
// // Тернарний оператор (спрощення)
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);


// Мод 2 - Функції. Допрацювання, оптимазація завдань.
/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
 */

// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';
  
//     for (const letter of letters) {
//       const isInLowerCase = letter === letter.toLowerCase();

//       invertedString += isInLowerCase
//         ? letter.toUpperCase()
//         : letter.toLowerCase();
//     }
  
//     return invertedString;
//   };
  
//   console.log(changeCase('qweRTY')); // QWErty
//   console.log(changeCase('mAnGo')); // MaNgO
//   console.log(changeCase('AjAx')); // aJaX
  