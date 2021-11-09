/* eslint-disable linebreak-style */
import Validator from '../app';

test('тест ф-ции Validator', () => {
  const user = new Validator('Oleg_000-kk');

  expect(user.validateUsername()).toBeTruthy();
});

test('тест ф-ции Validator', () => {
  const user = new Validator('_Oleg_000-kk6');

  expect(user.validateUsername()).toBeFalsy();
});

test('тест ф-ции Validator', () => {
  const user = new Validator('gn0000m');

  expect(user.validateUsername()).toBeFalsy();
});

test('тест ф-ции Validator', () => {
  const user = new Validator(' gn0m');

  expect(user.validateUsername()).toBeFalsy();
});
