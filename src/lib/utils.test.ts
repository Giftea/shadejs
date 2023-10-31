import {
  test,
  expect,
} from 'vitest';
import { BigNumber } from 'bignumber.js';
import {
  convertCoinFromUDenom,
  convertCoinToUDenom,
  encodeJsonToB64,
  decodeB64ToJson,
} from './utils';

test('It converts token from U denom V2', () => {
  expect(convertCoinFromUDenom(1000, 2)).toStrictEqual(BigNumber(10));
  expect(convertCoinFromUDenom('1000', 2)).toStrictEqual(BigNumber(10));
  expect(convertCoinFromUDenom('1000000000000000000000000000', 2)).toStrictEqual(BigNumber('10000000000000000000000000'));
  expect(convertCoinFromUDenom(1e100, 2)).toStrictEqual(BigNumber(1e98));
  expect(convertCoinFromUDenom('1e100', 2)).toStrictEqual(BigNumber(1e98));
  expect(convertCoinFromUDenom('100000000000000000000005555.123456789123456789', 2)).toStrictEqual(BigNumber('1000000000000000000000055.551234567891234568'));
  expect(convertCoinFromUDenom('987654321987654321987654321', 18)).toStrictEqual(BigNumber('987654321.987654321987654321'));
});

test('It converts token to U denom V2', () => {
  const testBigNumber1 = BigNumber(1000);
  expect(convertCoinToUDenom(testBigNumber1, 2)).toBe('100000');
  const testBigNumber2 = BigNumber('0.123456789123456789');
  expect(convertCoinToUDenom(testBigNumber2, 18)).toBe('123456789123456789');
  const testBigNumber3 = BigNumber('123456789123456789.123456789123456789');
  expect(convertCoinToUDenom(testBigNumber3, 18)).toBe('123456789123456789123456789123456789');
  expect(convertCoinToUDenom('1111.123456789101213141', 18)).toBe('1111123456789101213141');
});

test('It encodes a JSON into a base64 string', () => {
  const testJSON = {
    value1: 'teststring1',
    value2: 'teststring2',
  };
  expect(encodeJsonToB64(testJSON)).toBe('eyJ2YWx1ZTEiOiJ0ZXN0c3RyaW5nMSIsInZhbHVlMiI6InRlc3RzdHJpbmcyIn0=');
});

test('It decodes a base64 string into JSON', () => {
  const outputJSON = {
    value1: 'teststring1',
    value2: 'teststring2',
  };
  expect(decodeB64ToJson('eyJ2YWx1ZTEiOiJ0ZXN0c3RyaW5nMSIsInZhbHVlMiI6InRlc3RzdHJpbmcyIn0=')).toStrictEqual(outputJSON);
});
