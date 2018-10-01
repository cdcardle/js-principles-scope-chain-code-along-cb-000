var customerName = "bob";
const leastFavoriteCustomer = 'joe';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer(newFavorite) {
  bestCustomer = newFavorite;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'tom';
}

function attemptTwoFavoriteCustomers() {
  var favoriteCustomer = 'tom';
  var favoriteCustomer = 'joe';
}
