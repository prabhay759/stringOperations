# stringOperations

## This library will do operation on string like padLeft, padRight, replaceAll and truncate.

## Installation

```
$ npm install string-operations
```

## API

```
var stringOps = require('string-operations');
```

### padRight and padLeft

```js

options     one or more of the following:
   value      data which you want to pad- default value will be empty string ''
   padChar    pad character which you want to append the value default value will be white space ' '
   maxLength  Total length of data after padding

var options = {
   value: 'abcde',
   padChar: ' ',
   maxLength: '7'
 };

var result = stringOps.padRight(options);
console.log(result);

// prints 'abcde  '

var options = {
   value: 'abcde',
   padChar: '0',
   maxLength: '7'
 };

var result = stringOps.padLeft(options);
console.log(result);

// prints '00abcde'
```

### replaceAll

```js

obj:
   value:    input data where you want to replace character
   repTo:    character you want to replace
   repWith:  Character with whom you want to replace


var obj = {
  value: 'abcdefga',
  repTo: 'a',
  repWith: 'A'
};

 var result = stringOperation.replaceAll(obj);
 console.log(result);

 // prints AbcdefgA
```

### truncate

```js

value:        input data where you want to truncate
maxLength:    maxLength you want

var result = stringOperation.truncate('abcd', 3);
console.log(result);

// prints abc
```
