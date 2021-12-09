/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-12-05 16:24:15
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-12-09 14:05:54
 * @FilePath: \js-common-functions\test\blah.test.ts
 */
import {
  deepClone,
  shallowClone,
  getObjectLength,
  isContain,
  unique,
  sortBy,
  checkPassword,
  checkEmail,
  checkPhone,
  checkBankCard,
  trim,
  filterHTML,
  isFloat,
  isInteger,
  stringifyQueryString
} from '../src';

describe('blah', () => {
  it('deepClone', () => {
    expect(deepClone({ a: 1, b: { c: 2 } })).toEqual({ a: 1, b: { c: 2 } });
  });

  it('shallowClone', () => {
    expect(shallowClone({ a: 1, b: { c: 2 } })).toEqual({ a: 1, b: { c: 2 } });
  });

  it('getObjectLength', () => {
    expect(getObjectLength({ a: 1, b: { c: 2 } })).toEqual(2);
  });

  it('isContain', () => {
    expect(isContain([1, 2], 1)).toEqual(true);
  });

  it('unique', () => {
    expect(unique([1, 2, 1, 3])).toEqual([1, 2, 3]);
  });

  it('sortBy', () => {
    expect(sortBy([{ a: 1 }, { a: 2 }], 'a')).toEqual([{ a: 1 }, { a: 2 }]);
  });

  it('checkPassword', () => {
    expect(checkPassword('123456')).toEqual(true);
  });

  it('checkEmail', () => {
    expect(checkEmail('123456')).toEqual(false);
    expect(checkEmail('test@qq.com')).toEqual(true);
  });

  it('checkPhone', () => {
    expect(checkPhone('123456')).toEqual(false);
    expect(checkPhone('13000000000')).toEqual(true);
  });

  it('checkBankCard', () => {
    expect(checkBankCard('123456')).toEqual(false);
    expect(checkBankCard('6222023301012345678')).toEqual(true);
  });

  it('trim', () => {
    expect(trim('  1 23 456  ', 1)).toEqual('123456');
    expect(trim('  123456  ', 2)).toEqual('123456');
    expect(trim('  123456  ', 3)).toEqual('123456  ');
    expect(trim('  123456  ', 4)).toEqual('  123456');
  });

  it('filterHTML', () => {
    expect(filterHTML('<div>123</div>')).toEqual('123');
  });

  it('isFloat', () => {
    expect(isFloat('123')).toEqual(false);
    expect(isFloat('123.45')).toEqual(true);
  });

  it('isInteger', () => {
    expect(isInteger('123')).toEqual(true);
    expect(isInteger('123.45')).toEqual(false);
  });

  it('stringifyQueryString', () => {
    expect(stringifyQueryString({ a: 1, b: 2 })).toEqual('a=1&b=2');
  });
});
