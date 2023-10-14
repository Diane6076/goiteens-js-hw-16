import users from './users.js'
console.log(users);

//*1
//Отримати масив імен всіх користувачів (поле name).

const getUserNames = users => {
  return users.map(user => user.name)
};

console.log(getUserNames(users));

//*2
//Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); 

//*3
//Отримати масив імен користувачів за статтю (поле gender).

const getUsersWithGender = (users, gender) => {
  // return users.filter(user => user.gender === gender)
  // .map(user => user.name);
};

//console.log(getUsersWithGender(users, 'male'));

//*4
//Отримати масив тільки неактивних користувачів (поле isActive).

const getInactiveUsers = users => {
  return users.filter(user => !user.isActive);
};
console.log(getInactiveUsers(users)); 

//*5
//Отримати користувача (не масив) по email (поле email, він унікальний).

const getUserWithEmail = (users, email) => {
 return users.find( (user) => {
    // const userFind
  if (user.email === email) {
    return user
  }} ) 
};
  
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// {об'єкт користувача Sheree Anthony}
//console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
// {об'єкт користувача Elma Head}
  
  
//*6
// Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).
const getUsersWithAge = (users, min, max) => {
  const usersFilter = users.filter(user => user.age >= min && user.age <= max)
  return usersFilter
};

console.log(getUsersWithAge(users, 20, 30)); 
console.log(getUsersWithAge(users, 30, 40));
