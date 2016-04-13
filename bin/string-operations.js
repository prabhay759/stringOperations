var _ = require('underscore');

var stringOperation = module.exports = {};

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
stringOperation.padRight = function(options) {
  var opts = {
    value: '',
    padChar: ' ',
  };
  opts.maxLength = opts.value.length;

  _.extend(opts, options);

  if (!opts.value || !opts.maxLength || opts.maxLength <= opts.value.length || opts.maxLength >= 200 ||
      !opts.padChar || opts.padChar.length > 1) {
    return opts.value;
  }

  var padString = new Array(opts.maxLength + 1).join(opts.padChar);
  opts.value = opts.value + padString.substring(0, opts.maxLength - opts.value.length);

  return opts.value;
};

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
stringOperation.padLeft = function(options) {
  var opts = {
    value: '',
    padChar: ' ',
  };
  opts.maxLength = opts.value.length;

  _.extend(opts, options);

  if (!opts.value || !opts.maxLength || opts.maxLength <= opts.value.length || opts.maxLength >= 200 ||
     !opts.padChar || opts.padChar.length > 1) {
    return opts.value;
  }

  var padString = new Array(opts.maxLength + 1).join(opts.padChar);
  opts.value = padString.substring(0, opts.maxLength - opts.value.length) + opts.value;

  return opts.value;
};
