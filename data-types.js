// Number
var numberVar = 10;
var decimalVar = 10.10;

console.log('Data type of Number Variable ==>', typeof(numberVar));
console.log('Data type of Decimal Variable ==>', typeof(decimalVar));

// String
var singleQuoteVar = 'This is a single quote string';
var doubleQuoteVar = "This is a double quote string";

console.log('Data type of singleQuoteVar ==>', typeof(singleQuoteVar));
console.log('Data type of doubleQuoteVar ==>', typeof(doubleQuoteVar));

// Boolean
var booleanTrueVar = true;
var booleanFalseVar = false;

console.log('Data type of booleanTrueVar ==>', typeof(booleanTrueVar));
console.log('Data type of booleanFalseVar ==>', typeof(booleanFalseVar));

// Symbol
var symbolVar = Symbol();
console.log('Data type of symbolVar ==>', typeof(symbolVar));

// Undefined
var undefinedVar = undefined;
console.log('Data type of undefinedVar ==>', typeof(undefinedVar));

// Object
var arrayVar = [1, 2, 3, 'string', true, null, undefined];
console.log('Data type of arrayVar ==>', typeof(arrayVar));

var objVar = { id: 1, name: 'Vinayak' };
console.log('Data type of objVar ==>', typeof(objVar));

var nullVar = null;
console.log('Data type of nullVar ==>', typeof(nullVar)); // object (exception)

// Function
var functionVar = function Test() { console.log('Test Function'); };
console.log('Data type of functionVar ==>', typeof(functionVar));
