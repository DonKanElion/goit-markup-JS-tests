// Objects

// 1 ===== ДОСТУП ДО ВКЛАДЕНИХ ВЛАСТИВОСТЕЙ

const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
  };
  
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  // Change code above this line
  
  // 2 ====== ДОСТУП ДО ВКЛАДЕНИХ ВЛАСТИВОСТЕЙ
  const apartment2 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4.7,
    price: 5000,
    tags: ["premium", "promoted", "top", "trusted"],
    owner: {
      name: "Henry Sibola",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  apartment2.area = 60;
  apartment2.rooms = 3;
  apartment2.location = {country: "Jamaica", city: "Kingston",};

//   3 ====== ДОСТУП ДО ВКЛАДЕНИХ ВЛАСТИВОСТЕЙ

  const apartment3 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  const ownerName = apartment3.owner.name;
  const ownerPhone = apartment3.owner.phone;
  const ownerEmail = apartment3.owner.email;
  const numberOfTags = apartment3.tags.length;
  const firstTag = apartment3.tags[0];
  const lastTag = apartment3.tags[numberOfTags - 1];
  
  
// 4 ======== ОБЧИСЛЮВАНІ ВЛАСТИВОСТІ (9)

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
    [emailInputName]: "henry.carter@aptmail.com",
    [passwordInputName]: "jqueryismyjam",
};

// 5 ======== ЗМІНА ЗНАЧЕННЯ ВЛАСТИВОСТІ


const apartment4 = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  
  apartment4.price = 5000;
  apartment4.rating = 4.7;
  apartment4.owner.name = "Henry Sibola";
  apartment4.tags.push("trusted");
  
  // 6 ====== ЦИКЛ FOR...IN

  // Example 

  const book = {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    rating: 8.38,
  };
  
  for (const key in book) {
    // Ключ
    console.log(key);
    // Значення властивості з таким ключем
    console.log(book[key]);
  }

  // Practice
  const apartment5 = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  const keys = [];
  const values = [];
  
  for( const key in apartment5){
    keys.push(key);
    values.push(apartment5[key]);
  }

// 7 ========  МЕТОД HASOWNPROPERTY() перевірка на ВЛАСНІСТЬ!!!

const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment6 = Object.create(advert);

apartment6.descr = "Spacious apartment in the city center";
apartment6.rating = 4;
apartment6.price = 2153;

for (const key in apartment6) {
  if (apartment6.hasOwnProperty(key)) {
        keys.push(key);
        values.push(apartment6[key]);
  }
}


// 8 МЕТОД OBJECT.KEYS()

const apartment7 = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };
  
  const values = [];
  const keys = Object.keys(apartment7);
  
  for ( const key of keys){
    values.push(apartment7[key])
  }
  
  // keys - це масив з ВЛАСТИВОСТЯМИ ["descr", "rating", "price"].
 //  values - це масив ЗНАЧЕНЬ ВЛАСТИВОСТЕЙ ["Spacious apartment in the city center", 4, 2153].

 // 9 Розвидання властивостей з масива/обєкта. МАСИВ ОБ'ЄКТІВ (17)

 const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];
  
  const hexColors = [];
  const rgbColors = [];
  
  for ( const color of colors){
        hexColors.push(color.hex);
        rgbColors.push(color.rgb);
  }

// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]


// 10 

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
  
    for (const price of products){
      
      console.log('Test-1 - price = ', price);
      console.log('Test-2 - price. = ', price.price)
      console.log('Test-3 - price.name = ', price.name)
  
      if (price.name === productName){
        return price.price;
      }
    }
    return null;
  }
    
// Test-1 - price =  {name: 'Radar', price: 1300, quantity: 4}
// Test-2 - price. =  1300
// Test-3 - price.name =  Radar


// 11 ОПЕРАЦІЯ SPREAD ПРИ ПЕРЕДАЧІ АРГУМЕНТІВ (Найбільше і найменше число з масиву (оцінка)) (27)

const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);
