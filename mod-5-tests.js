console.log("Mod 5 tests");

// 11. ЗАДАЧА: КОНСТРУКТОР РЯДКІВ.


// class StringBuilder {
//     constructor([initialValue]) {
        
//          this.value = initialValue;
//     }
    
//   getValue() {
//     return this.value;
//     }
//   padEnd(str) {
//       this.value += str
//   }

//   padStart(str) {
//       this.value = str + this.value
//   }
//     padBoth(str){
//       this.value = str + this.value + str
//     }
//   }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// 19.


// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//     // Change code below this line

//     static AccessLevel = {
//         BASIC: "basic",
//         SUPERUSER: "superuser",
//     };

//     // Change code above this line

//     constructor({ email, accessLevel }) {
//        super(email);
//         this.accessLevel = accessLevel;
//     }
// };


// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

//  20.

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// //////////////////////////////////////////////////////

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };


//   constructor({ email, accessLevel, blackListedEmails}) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blackListedEmails = blackListedEmails;
//   }
  


//   blacklist(email){
//     this.blackListedEmails.push(email);
//   }

//   isBlackListed(email){
//     this.blackListedEmails.includes(email);
//   }
  
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
