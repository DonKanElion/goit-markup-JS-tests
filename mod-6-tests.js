console.log("Mod 6 conspect");



/////////
// console.log('1. Навігація по DOM');

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);

// // 2. Find elements 

// /////
// console.log('2. Find elements');

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll(".menu-item");
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

// Task 1:

// va1 
// const countCategories = document.body.querySelectorAll('.item');
// console.log("Number of categories: ", countCategories.length);
// console.log("Number of categories: ", countCategories);

// const test = document.body.querySelectorAll('h2');
// console.log('Test ', test);
// console.log('Test2 ', test[0].textContent);

// const countListAnimals = countCategories[0].querySelectorAll('li');
// console.log('Category: Animals, Elements: ', countListAnimals.length);

// const countListProducts = countCategories[1].querySelectorAll('li');
// console.log('Category: Products, Elements: ', countListProducts.length);

// const countListTechnologies = countCategories[2].querySelectorAll('li');
// console.log('Category: Tehnologies, Elements: ', countListTechnologies.length);

// var 2 +

// const categories = document.querySelectorAll('li.item');

// const countCategories = () =>
//   console.log(`Number of categories: ${categories.length}`);

// const showEachCategory = categories =>
//   categories.forEach(category => {
//     const headerText = category.firstElementChild.textContent;
//     const categoryElements = category.querySelectorAll('li');
//     const showHeaderText = console.log(`Category: ${headerText}`);
//     const showNumberOfElements = console.log(
//       `Elements: ${categoryElements.length}`,
//     );
//     return showHeaderText, showNumberOfElements;
//   });

// countCategories();
// showEachCategory(categories);


// var 3 ++

// const allItemsEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${allItemsEl.length}`);

// for (let i = 0; i < allItemsEl.length; i += 1) {
//   const categoryTitle = allItemsEl[i].firstElementChild.textContent;
//   const elementsNumber = allItemsEl[i].lastElementChild.children.length;
//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${elementsNumber}`);
// }

