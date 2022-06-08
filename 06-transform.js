console.log("06. Об'єднання всіх елементів в один рядок!"); 


/*
 * Напиши скрипт, который объединяет все элементы массива в одно строковое значение.
 * Элементов может быть произвольное кол-во.
 * Пусть элементы массива  в строке будут разделены запятой.
 * - Сначала через for
 * - Потом через join()
 */

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const string = friends.join(", ");
// console.log(friends); // 'Mango', 'Poly', 'Kiwi', 'Ajax']
// console.log(string); // Mango, Poly, Kiwi, Ajax

// ==========

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }

// // string = string.slice(0, string.length - 1);

// const string = friends.join(',');
// console.log(friends);
// console.log(string);

// // Должно получиться 'Mango,Poly,Kiwi,Ajax'
// © 2022 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Docs


// Мод 2 - Функції. Допрацювання, оптимазація завдань.
/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */


// const findSmallesNumber = function (numbers) {
//     let smallestNumber = numbers[0];
  
//     for (const number of numbers) {
//       if (number < smallestNumber) {
//         smallestNumber = number;
//       }
//     }
  
//     return smallestNumber;
//   };
  
//   console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
//   console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
//   console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4