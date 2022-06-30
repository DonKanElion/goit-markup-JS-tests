// Репата Завдання(задачки) 
console.log("03. Вибираємо парні/не парні числа з масиву через  for і через of)");
// Вибираємо парні/не парні числа з масиву:

// 1 перебираємо масив
// 2 Створюємо змінну тотал
// 3 на кожній ітерації перевірити парне число чи не парне
// 4 додати парні числа в змінну тотал
// 5 вивести результат

// const numbers = [1, 3, 6, 2, 7, 8, 10, 12, 55, 98];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     const number = numbers[i];
//     console.log(number);
    
//     if (number % 2 === 0){
//         console.log('Парне!!!');
//         total += number;
//     }
// }

// ЧЕРЕЗ "Of"

// for (const number of numbers){

//     if (number % 2 === 0){
//       console.log('Парне!!!', number);
//       total += number;
//     }
// }

// console.log('Total: ', total);

// ЧЕРЕЗ "Of" =- зворотня логіка, continue

// for (const number of numbers){
//     if (number % 2 !== 0){
//       console.log('Цю ітерацію потрібно пропустити', number);
//       continue;
//     }
//     console.log(`${number} - парне`);
//     total += number;
// }

// console.log('Total: ', total);

// END

// Мод 2 - Функції. Допрацювання, оптимазація завдань.