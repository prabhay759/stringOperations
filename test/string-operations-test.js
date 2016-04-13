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
});
