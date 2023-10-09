import users from './users.js'

//*1
//Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => {
  
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//*2
//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  
};

console.log(getUsersWithEyeColor(users, 'blue')); 
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

//*3
//Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) => {
 
};

console.log(getUsersWithGender(users, 'male'));
 // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//*4
//Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => {
  
};
  
console.log(getInactiveUsers(users)); 
  // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

//*5
//Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
   
  };
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
  // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
  // {об'єкт користувача Elma Head}
  
  
//*6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
  
const getUsersWithAge = (users, min, max) => {
 
  };
  
console.log(getUsersWithAge(users, 20, 30));
 // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
  // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]



