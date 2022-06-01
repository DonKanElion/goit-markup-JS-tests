console.log("04. Пошук логіна в масиві");
   
/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'aj4xth3m4n';

// Через for

let massege = `Користувача ${loginToFind} не знайдено`;
// for (let i = 0; i < logins.length; i += 1){
//     const login = logins[i];

//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);
    
//     if (login === loginToFind){
//         console.log("Успіх!");
//         massege = `Користувача ${loginToFind} знайдено!`;
//         console.log(massege);
        
//     }
// }
// перебрати масив
// порівняти loginToFind з logins
// якщо є  = 'Пользователь [логин] найден.'
// якщо немає = 'Пользователь [логин] найден.'


// ==============

// Через for...of

// for (const login of logins){

//     // console.log('Login: ', login);
//     // console.log(`${login} === ${loginToFind}: `, login === loginToFind);
    
//     if (login === loginToFind){
//         console.log("Ура!");
//         massege = `Користувача ${loginToFind} знайдено!`;
//         break;
//     }   
// }
// console.log(massege);

// ==============

// Метод includes() с тернарным оператором


// console.log(logins.includes(`${loginToFind}`));
// console.log(logins.includes("Coch-cohg"));
// console.log(logins.includes("k1widab3st"));

// Repeta 

// const message = logins.includes(loginToFind) ? `Користувача ${loginToFind} знайдено.` : `Користувача ${loginToFind}  не знайдено.`;
// console.log(message);
