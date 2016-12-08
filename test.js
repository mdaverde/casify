import test from 'ava';
import {
  default as casify,
  camelCasify,
  bumpyCasify,
  kebabCasify,
  snakeCasify,
  startCasify,
  upperCasify,
  lowerCasify,
} from './dist';

// Test Utils

function generateObject(obj, fn, re) {
  return {
    snake_case: true,
    'kebab-case': 1000,
    camelCase: 'camelCase',
    BumpyCase: 11.99,
    'Start Case': obj,
    'UPPER CASE': fn,
    'lower case': re,
  };
}

function generateArray() {
  return [
    { cat_name: 'Max', 'dog name': 'Jellybean', 'NUM PETS': 36 },
    { cat_name: 'Leo', 'dog name': 'Archer', 'NUM PETS': 5 },
    { cat_name: 'Dalton', 'dog name': 'Skip', 'NUM PETS': 18 },
  ];
}


function prependBlueCase(string) {
  return `blue_${string}`;
}


// Tests

test('camelCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateObject(obj, fn, re);

  const expected = {
    snakeCase: true,
    kebabCase: 1000,
    camelCase: 'camelCase',
    bumpyCase: 11.99,
    startCase: obj,
    upperCase: fn,
    lowerCase: re,
  };

  const observed = camelCasify(input);

  context.deepEqual(expected, observed);
});

test('bumpyCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateObject(obj, fn, re);

  const expected = {
    SnakeCase: true,
    KebabCase: 1000,
    CamelCase: 'camelCase',
    BumpyCase: 11.99,
    StartCase: obj,
    UpperCase: fn,
    LowerCase: re,
  };

  const observed = bumpyCasify(input);

  context.deepEqual(expected, observed);
});

test('kebabCasify - handles objects', (context) => {
  const obj = {};
  const fn = () => {};
  const re = /casify/ig;

  const input = generateObject(obj, fn, re);

  const expected = {
    'snake-case': true,
    'kebab-case': 1000,
    'camel-case': 'camelCase',
    'bumpy-case': 11.99,
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

  const input = generateObject(obj, fn, re);

  const expected = {
    snake_case: true,
    kebab_case: 1000,
    camel_case: 'camelCase',
    bumpy_case: 11.99,
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

  const input = generateObject(obj, fn, re);

  const expected = {
    'Snake Case': true,
    'Kebab Case': 1000,
    'Camel Case': 'camelCase',
    'Bumpy Case': 11.99,
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

  const input = generateObject(obj, fn, re);

  const expected = {
    'SNAKE CASE': true,
    'KEBAB CASE': 1000,
    'CAMEL CASE': 'camelCase',
    'BUMPY CASE': 11.99,
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

  const input = generateObject(obj, fn, re);

  const expected = {
    'snake case': true,
    'kebab case': 1000,
    'camel case': 'camelCase',
    'bumpy case': 11.99,
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

  const input = generateObject(obj, fn, re);

  const expected = {
    blue_snake_case: true,
    'blue_kebab-case': 1000,
    blue_camelCase: 'camelCase',
    blue_BumpyCase: 11.99,
    'blue_Start Case': obj,
    'blue_UPPER CASE': fn,
    'blue_lower case': re,
  };

  const observed = casify(prependBlueCase, input);

  context.deepEqual(expected, observed);
});


test('camelCasify - handles arrays', (context) => {
  const input = generateArray();

  const expected = [
    { catName: 'Max', dogName: 'Jellybean', numPets: 36 },
    { catName: 'Leo', dogName: 'Archer', numPets: 5 },
    { catName: 'Dalton', dogName: 'Skip', numPets: 18 },
  ];

  const observed = camelCasify(input);

  context.deepEqual(expected, observed);
});
