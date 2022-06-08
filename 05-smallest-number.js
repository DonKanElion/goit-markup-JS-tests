console.log("05. Пошук найменшого/найбільшого числа в масиві!"); 

/*
 * Напиши скрипт поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// const numbers = [51, 18, 13, 24, 7, 85, 19];

// запустити перевірку масиву
// створити змінну яка буде порівнюватись з найменшим числом
// якщо число менше, зберігаємо в змінну, і перебираємо дали
// вивод результату 

// let smallestNumber = numbers[0];

// for (const number of numbers) { 
//     // console.log(number);

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);


// Мод 2 - Функції. Допрацювання, оптимазація завдань.

// const findSmallesNumber = function(numbers){
//     let smallestNumber = numbers[0];

//     for (const number of numbers) { 
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return smallestNumber
// }

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4