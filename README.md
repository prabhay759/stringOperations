# stringOperations
This library will do operation on string like padLeft and padRight
Truncate, replace all occurrences will be implemented sooner.
 //
 // Add Padding at the right of the string.
 //
 // Usage:
 //      stringOps.padRight(options)
 //
 // Where:
 //      options     one or more of the following:
 //          value      data which you want to pad- default value will be empty string ''
 //          padChar    pad character which you want to append the value default value will be white space ' '
 //          maxLength  Total length of data after padding
 //
 //
 Example
 var stringOps = require('string-operations');

 var options = {
    value: 'abcde',
    padChar: ' ',
    maxLength: '7'
  };
var result = stringOps.padRight(options);
console.log(result);

// 'abcde  '

var stringOps = require('string-operations');

var options = {
   value: 'abcde',
   padChar: '0',
   maxLength: '7'
 };
var result = stringOps.padLeft(options);
console.log(result);

// '00abcde'
