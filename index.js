// Write your solution in this file!
// Declaring Customer name variable
var customerName = 'bob';

// Function to modify cunstomerName to upperCase
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}
// Set best customer
function setBestCustomer() {
    bestCustomer = 'not bob';
}

// Overwrites best customer
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Outputs an error
const leastFavoriteCustomer = 'Number'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob'
}