// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var maestroPrefixes = ['5018', '5020', '5038', '6304'];
  if ((cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39') && cardNumber.length === 14) {
  	return "Diner\'s Club";
  }
  else if ((cardNumber.slice(0,2) === '37' || cardNumber.slice(0,2) === '34') && cardNumber.length === 15) {
  	return "American Express";
  }
  else if (cardNumber.slice(0,1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
  	return "Visa";
  }
  else if (cardNumber.length === 16 && (cardNumber / 5100000000000000 >= 1 && cardNumber / 5600000000000000 < 1)) {
  	return "MasterCard";
  }
  else if ((cardNumber.slice(0,4) === '6011' || (parseInt(cardNumber.slice(0,3)) >= 644 && parseInt(cardNumber.slice(0,3)) <= 649) || 
  	cardNumber.slice(0,2) === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
  	return "Discover";
  }
  else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && maestroPrefixes.indexOf(cardNumber.slice(0,4)) > -1) {
  	return "Maestro";
  }
};