console.log("08. Делаем slug в URL из названия статьи (например на dev.to)"); 


/*
 * Делаем slug в URL из названия статьи (например на dev.to)
 * Заголовок статьи состоит только из букв и пробелов
 *
 * - Нормализируем строку
 * - Разбиваем по словам
 * - Сшиваем в строку с разделителями
 */

// Должно получиться top-10-benefits-of-react-framework
// const title = 'Top 10 benefits of React framework11111';

// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// console.log(words);

// const slug = words.join('-');
// console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);
// Мод 2 - Функції. Допрацювання, оптимазація завдань.

/*
 * Напиши функцию slugify(string) которая получает строку и возвращает URL-slug
 * Строка состоит только из букв и пробелов
 */


// const slugify = function (string){
//     return string.toLowerCase().split(' ').join('-');
// }
// console.log(slugify(title));