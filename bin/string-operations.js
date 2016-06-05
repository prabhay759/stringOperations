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
//       value      data which you want to pad- default value will be empty string ''
//       padChar    pad character which you want to append the value default value will be
//                  white space' '
//       maxLength  Total length of data after padding
//
//
stringOperation.padRight = function (options) {
  var opts = {
    value: '',
    padChar: ' ',
  };
  opts.maxLength = opts.value.length;

  _.extend(opts, options);

  if (!opts.value || !opts.maxLength || opts.maxLength <= opts.value.length ||
    opts.maxLength >= 200 || !opts.padChar || opts.padChar.length > 1) {
    return opts.value;
  }

  var padString = new Array(opts.maxLength + 1).join(opts.padChar);
  opts.value = opts.value + padString.substring(0, opts.maxLength - opts.value.length);

  return opts.value;
};

//
// Add Padding at the left of the string.
//
// Usage:
//      stringOps.padLeft(options)
//
// Where:
//      options     one or more of the following:
//          value      data which you want to pad- default value will be empty string ''
//          padChar    pad character which you want to append the value default value
//          will be white space ' '
//          maxLength  Total length of data after padding
//
//
stringOperation.padLeft = function (options) {
  var opts = {
    value: '',
    padChar: ' ',
  };
  opts.maxLength = opts.value.length;

  _.extend(opts, options);

  if (!opts.value || !opts.maxLength || opts.maxLength <= opts.value.length ||
     opts.maxLength >= 200 || !opts.padChar || opts.padChar.length > 1) {
    return opts.value;
  }

  var padString = new Array(opts.maxLength + 1).join(opts.padChar);
  opts.value = padString.substring(0, opts.maxLength - opts.value.length) + opts.value;

  return opts.value;
};

//
// Replace character in the string all occurences with case sensitive
//
// Usage:
//      stringOps.replace(obj)
//
// Where:
//      obj     All of the following:
//          val      input data where you want to replace character
//          repTo    character you want to replace
//          repWith  Character with whom you want to replace
//
stringOperation.replaceAll = function (obj) {
  var opts = {
    value: '',
    repTo: '',
    repWith: '',
  };

  _.extend(opts, obj);

  if (!opts.value) {
    return opts.value;
  }

  if (!opts.repTo) {
    return opts.value;
  }

  return opts.value.split(opts.repTo).join(opts.repWith);
};

//
// truncate the input strings
//
// Usage:
//      stringOps.truncate(value, maxLength)
//
// Where:
//      value       input data where you want to truncate
//      maxLength   maxLength you want
//
stringOperation.truncate = function (value, maxLength) {
  if (!value) {
    return value;
  }

  if (!maxLength || !parseInt(maxLength)) {
    return value;
  }

  if (parseInt(maxLength) < value.Length) {
    return value;
  }

  return value.substring(0, maxLength);
};
