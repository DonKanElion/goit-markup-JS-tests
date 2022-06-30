// Повторити рішення завдання!!!! 




// !!!  19. мод. 3.  ЗАДАЧА: КОЛЕКЦІЯ ЗНАЧЕНЬ ВЛАСТИВОСТІ. Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

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
//         // console.log("This is array: ", array);
//     }
//     return array;
//     // Change code above this line
//   }
  

//   getAllPropValues("quantity") // //  [4, 3, 7, 9]
//   getAllPropValues("price") // //  [1300, 2700, 400, 1200]
//   getAllPropValues("category") // //  []

