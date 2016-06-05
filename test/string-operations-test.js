var assert = require('assert');
var should = require('should');
var stringOperation = require('../bin/string-operations');

describe('stringOperation', () => {
  describe('padRight', () => {
    var tests = [
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padChar is 0',
        input: {
          value: 'abc',
          maxLength: 5,
          padChar: '0',
        },
        expected: 'abc00',
      },
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padChar is empty space',
        input: {
          value: 'abc',
          maxLength: 5,
          padChar: ' ',
        },
        expected: 'abc  ',
      },
      {
        description: 'should return input value when value is null & maxLength is greater than value & padChar is empty space',
        input: {
          value: null,
          maxLength: 5,
          padChar: ' ',
        },
        expected: null,
      },
      {
        description: 'should return input value when value is undefined & maxLength is greater than value & padChar is empty space',
        input: {
          value: undefined,
          maxLength: 5,
          padChar: ' ',
        },
        expected: undefined,
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value & padChar is empty space',
        input: {
          value: '',
          maxLength: 5,
          padChar: ' ',
        },
        expected: '',
      },
      {
        description: 'should return input value when value is empty string & maxLength is less than value & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: 2,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is 0 & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: 0,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is -1 & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: -1,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is 200 & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: 200,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is null & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: null,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is undefined & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: undefined,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value length & padChar is more than one character',
        input: {
          value: 'abcde',
          maxLength: 7,
          padChar: 'abc',
        },
        expected: 'abcde',
      },
    ];

    tests.forEach((test) => {
      it(test.description, () => {
        var actual = stringOperation.padRight(test.input);

        assert.equal(actual, test.expected);
      });
    });
  });

  describe('padLeft', () => {
    var tests = [
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padChar is 0',
        input: {
          value: 'abc',
          maxLength: 5,
          padChar: '0',
        },
        expected: '00abc',
      },
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padChar is empty space',
        input: {
          value: 'abc',
          maxLength: 5,
          padChar: ' ',
        },
        expected: '  abc',
      },
      {
        description: 'should return input value when value is null & maxLength is greater than value & padChar is empty space',
        input: {
          value: null,
          maxLength: 5,
          padChar: ' ',
        },
        expected: null,
      },
      {
        description: 'should return input value when value is undefined & maxLength is greater than value & padChar is empty space',
        input: {
          value: undefined,
          maxLength: 5,
          padChar: ' ',
        },
        expected: undefined,
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value & padChar is empty space',
        input: {
          value: '',
          maxLength: 5,
          padChar: ' ',
        },
        expected: '',
      },
      {
        description: 'should return input value when value is empty string & maxLength is less than value & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: 2,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is 0 & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: 0,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is -1 & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: -1,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is 200 & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: 200,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is null & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: null,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is undefined & padChar is empty space',
        input: {
          value: 'abcde',
          maxLength: undefined,
          padChar: ' ',
        },
        expected: 'abcde',
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value length & padChar is more than one character',
        input: {
          value: 'abcde',
          maxLength: 7,
          padChar: 'abc',
        },
        expected: 'abcde',
      },
    ];

    tests.forEach((test) => {
      it(test.description, () => {
        var actual = stringOperation.padLeft(test.input);

        assert.equal(actual, test.expected);
      });
    });
  });

  describe('replaceAll', () => {
     var tests = [
      {
        description: 'should return value with replaced value when input value and replaceTo is not null or undefined',
        input: {
          value: 'abcdecfgd',
          repTo: 'c',
          repWith: '',
        },
        expected: 'abdefgd',
      },
      {
        description: 'should return value with replaced value when input value and replaceTo is not null or undefined',
        input: {
          value: 'abcdecfgd',
          repTo: 'c',
          repWith: 'w',
        },
        expected: 'abwdewfgd',
      },
      {
        description: 'should return null when input value is null',
        input: {
          value: null,
          repTo: 'c',
          repWith: 'w',
        },
        expected: null,
      },
      {
        description: 'should return undefined when input value is null',
        input: {
          value: undefined,
          repTo: 'c',
          repWith: 'w',
        },
        expected: null,
      },
      {
        description: 'should return value when input repTo is empty string',
        input: {
          value: 'undefined',
          repTo: '',
          repWith: 'w',
        },
        expected: 'undefined',
      },
      {
        description: 'should return value when input repTo is an numeric value',
        input: {
          value: 'abcdefgh7hgkjkk7',
          repTo: 7,
          repWith: 'w',
        },
        expected: 'abcdefghwhgkjkkw',
      },
      {
        description: 'should return value when input repTo is an numeric value',
        input: {
          value: 'abcdefgh7hgkjkk7',
          repTo: '7',
          repWith: 'w',
        },
        expected: 'abcdefghwhgkjkkw',
      },
    ];

    tests.forEach((test) => {
      it(test.description, () => {
        var actual = stringOperation.replaceAll(test.input);
        assert.equal(actual, test.expected);
      });
    });
  });

  describe('truncate', () => {
     var tests = [
      {
        description: 'should return value with truncated value when input value and length is provided and value.length is greater than length',
        value: 'abcdecfgd',
        length: 7,
        expected: 'abcdecf',
      },
      {
        description: 'should return value with truncated value when input value and length is provided and value.length is less than length',
        value: 'abcdecfgd',
        length: 12,
        expected: 'abcdecfgd',
      },
      {
        description: 'should return value with truncated value when input value and length is provided but length is in string format',
        value: 'abcdecfgd',
        length: 'abc',
        expected: 'abcdecfgd',
      },
      {
        description: 'should return value with truncated value when input value and length is provided but length is in string format',
        value: 'abcdecfgd',
        length: '7',
        expected: 'abcdecf',
      },
      {
        description: 'should return value when value is set empty string',
        value: '',
        length: '7',
        expected: '',
      },
      {
        description: 'should return value when value is set null',
        value: null,
        length: '7',
        expected: null,
      },
      {
        description: 'should return value when value is set undefined',
        value: undefined,
        length: '7',
        expected: undefined,
      },
      {
        description: 'should return value when value is set but length is not set',
        value: undefined,
        length: '',
        expected: undefined,
      },
      {
        description: 'should return value when value is set but length is null',
        value: undefined,
        length: null,
        expected: undefined,
      },
      {
        description: 'should return value when value is set but length is undefined',
        value: undefined,
        length: undefined,
        expected: undefined,
      }
    ];

    tests.forEach((test) => {
      it(test.description, () => {
        var actual = stringOperation.truncate(test.value, test.length);
        assert.equal(actual, test.expected);
      });
    });
  });
});
