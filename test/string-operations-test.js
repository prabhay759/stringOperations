var assert = require('assert');
var should = require('should');
var stringOperation = require('../bin/string-operations');

describe('stringOperation',() => {
  describe('PadRight', () => {
    var tests = [
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padCharacter is 0',
        input: {
          value: 'abc',
          maxLength: 5,
          padCharacter: '0',
        },
        expected: 'abc00'
      },
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: 'abc',
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: 'abc  '
      },
      {
        description: 'should return input value when value is null & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: null,
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: null
      },
      {
        description: 'should return input value when value is undefined & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: undefined,
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: undefined
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: '',
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: ''
      },
      {
        description: 'should return input value when value is empty string & maxLength is less than value & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: 2,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is 0 & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: 0,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is -1 & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: -1,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is 200 & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: 200,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is null & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: null,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is undefined & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: undefined,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value length & padCharacter is more than one character',
        input: {
          value: 'abcde',
          maxLength: 7,
          padCharacter: 'abc',
        },
        expected: 'abcde'
      },
    ];

    tests.forEach((test) => {
      it(test.description, () => {
        var actual = stringOperation.PadRight(test.input);

        assert.equal(actual, test.expected);
        //actual.should.be.eql(test.expected);
      });
    });
  });

  describe('PadLeft', () => {
    var tests = [
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padCharacter is 0',
        input: {
          value: 'abc',
          maxLength: 5,
          padCharacter: '0',
        },
        expected: '00abc'
      },
      {
        description: 'should return padded string when value is not null & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: 'abc',
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: '  abc'
      },
      {
        description: 'should return input value when value is null & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: null,
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: null
      },
      {
        description: 'should return input value when value is undefined & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: undefined,
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: undefined
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value & padCharacter is empty space',
        input: {
          value: '',
          maxLength: 5,
          padCharacter: ' ',
        },
        expected: ''
      },
      {
        description: 'should return input value when value is empty string & maxLength is less than value & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: 2,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is 0 & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: 0,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is -1 & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: -1,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is 200 & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: 200,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is null & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: null,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is undefined & padCharacter is empty space',
        input: {
          value: 'abcde',
          maxLength: undefined,
          padCharacter: ' ',
        },
        expected: 'abcde'
      },
      {
        description: 'should return input value when value is empty string & maxLength is greater than value length & padCharacter is more than one character',
        input: {
          value: 'abcde',
          maxLength: 7,
          padCharacter: 'abc',
        },
        expected: 'abcde'
      },
    ];

    tests.forEach((test) => {
      it(test.description, () => {
        var actual = stringOperation.PadLeft(test.input);

        assert.equal(actual, test.expected);
        //actual.should.be.eql(test.expected);
      });
    });
  });
});
