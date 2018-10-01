var customerName = "bob";
const leastFavoriteCustomer = 'joe';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'tom';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'tom';
  let favoriteCustomer = 'joe';
}

// leastFavoriteCustomer = 'sour fred'
//
// function changeLeastFavoriteCustomer(){
//   leastFavoriteCustomer = 'sour fred'
// }
//
//
// function setBestCustomer(){
//   bestCustomer = 'not bob'
// }
//
// function overWriteBestCustomer(newFavorite){
//   bestCustomer = newFavorite
// }
//
// function congratulateCustomer(){
//   return `congrats ${favoriteCustomer}`
// }
//
// function attemptTwoFavoriteCustomers(){
//     let favoriteCustomer = 'bar'
//     let favoriteCustomer = 'not bar'
// }
