var _ = require('underscore');

var stringOperation = exports;

stringOperation.PadRight = function(options) {
 var opts = {
   value: '',
   padCharacter: ' '
 };
 opts.maxLength = opts.value.length;

 _.extend(opts, options);

 if (!opts.value || opts.maxLength <= opts.value.length || opts.maxLength >= 200  || !opts.padCharacter || opts.padCharacter.length > 1) {
   return opts.value;
 }

 var padString = new Array(5 + 1).join(opts.padCharacter);
 opts.value = opts.value + padString.substring(0, opts.maxLength - opts.value.length);

 return opts.value;
};

stringOperation.PadLeft = function(options) {
 var opts = {
   value: '',
   padCharacter: ' '
 };
 opts.maxLength = opts.value.length;

 _.extend(opts, options);

 if(!opts.value || opts.maxLength <= opts.value.length || opts.maxLength >= 200 || !opts.padCharacter || opts.padCharacter.length > 1) {
   return opts.value;
 }

 var padString = new Array(5 + 1).join(opts.padCharacter);
 opts.value = padString.substring(0, opts.maxLength - opts.value.length) + opts.value;

 return opts.value;
};
