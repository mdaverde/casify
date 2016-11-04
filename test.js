import test from 'ava';
import {
  default as casify,
  camelCasify,
  kebabCasify,
  snakeCasify,
  startCasify,
  upperCasify,
  lowerCasify,
} from './dist';

function generateVarietyObj(obj, fn, re) {
  return {
    snake_case: true,
    'kebab-case': 1000,
    camelCase: 'camelCase',
    StartCase: obj,
    'UPPER CASE': fn,
    'lower case': re,
 };
}

function prependBlueCase(string) {
  return `blue_${string}`;
}

test('camelCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateVarietyObj(obj, fn, re);

  const expected = {
    snakeCase: true,
    kebabCase: 1000,
    camelCase: 'camelCase',
    startCase: obj,
    upperCase: fn,
    lowerCase: re,
  };

  const observed = camelCasify(input);

  context.deepEqual(expected, observed);
});

test('kebabCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateVarietyObj(obj, fn, re);

  const expected = {
    'snake-case': true,
    'kebab-case': 1000,
    'camel-case': 'camelCase',
    'start-case': obj,
    'upper-case': fn,
    'lower-case': re,
  };

  const observed = kebabCasify(input);

  context.deepEqual(expected, observed);
});

test('snakeCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateVarietyObj(obj, fn, re);

  const expected = {
    snake_case: true,
    kebab_case: 1000,
    camel_case: 'camelCase',
    start_case: obj,
    upper_case: fn,
    lower_case: re,
  };

  const observed = snakeCasify(input);

  context.deepEqual(expected, observed);
});

test('startCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateVarietyObj(obj, fn, re);

  const expected = {
    'Snake Case': true,
    'Kebab Case': 1000,
    'Camel Case': 'camelCase',
    'Start Case': obj,
    'UPPER CASE': fn,
    'Lower Case': re,
  };

  const observed = startCasify(input);

  context.deepEqual(expected, observed);
});

test('upperCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateVarietyObj(obj, fn, re);

  const expected = {
    'SNAKE CASE': true,
    'KEBAB CASE': 1000,
    'CAMEL CASE': 'camelCase',
    'START CASE': obj,
    'UPPER CASE': fn,
    'LOWER CASE': re,
  };

  const observed = upperCasify(input);

  context.deepEqual(expected, observed);
});

test('lowerCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateVarietyObj(obj, fn, re);

  const expected = {
    'snake case': true,
    'kebab case': 1000,
    'camel case': 'camelCase',
    'start case': obj,
    'upper case': fn,
    'lower case': re,
  };

  const observed = lowerCasify(input);

  context.deepEqual(expected, observed);
});

test('casify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateVarietyObj(obj, fn, re);

  const expected = {
    blue_snake_case: true,
    'blue_kebab-case': 1000,
    blue_camelCase: 'camelCase',
    blue_StartCase: obj,
    'blue_UPPER CASE': fn,
    'blue_lower case': re,
  };

  const observed = casify(prependBlueCase, input);

  context.deepEqual(expected, observed);
});