# casify [![Build Status](https://travis-ci.org/mdaverde/casify.svg?branch=master)](https://travis-ci.org/mdaverde/casify)

> Converts object keys or array of objects' keys to different case styles. Returns shallow copy of objects.

## Install

```
$ npm install --save casify
```

## Usage

```js
const {
  camelCasify,
  bumpyCasify,
  kebabCasify,
  snakeCasify,
  startCasify,
  upperCasify,
  lowerCasify
} = require('casify');

const object = {
  first_name: 'John',
  'last name': 'Smith'
};

camelCasify(object);
// { firstName: 'John', lastName: 'Smith' }

bumpyCasify(object);
// { FirstName: 'John', LastName: 'Smith' }

kebabCasify(object);
// { 'first-name': 'John', 'last-name': 'Smith' }

snakeCasify(object);
// { 'first_name': 'John', 'last_name': 'Smith' }

startCasify(object);
// { 'First Name': 'John', 'Last Name': 'Smith' }

upperCasify(object);
// { 'FIRST NAME': 'John', 'LAST NAME': 'Smith' }

lowerCasify(object);
// { 'first name': 'John', 'last name': 'Smith' }

const array = [
  { tv_show: 'Malcom in the Middle', 'actor-name': 'Frankie Muniz' },
  { tv_show: 'Breaking Bad', 'ACTOR NAME': 'Bryan Cranston' },
  { tv_show: 'Mad Men', 'Actor Name': 'Jon Hamm' },
];

camelCasify(array);
// [
//   { tvShow: 'Malcom in the Middle', actorName: 'Frankie Muniz' },
//   { tvShow: 'Breaking Bad', actorName: 'Bryan Cranston' },
//   { tvShow: 'Mad Men', actorName: 'Jon Hamm' },
// ]

bumpyCasify(array);
// [
//   { TvShow: 'Malcom in the Middle', ActorName: 'Frankie Muniz' },
//   { TvShow: 'Breaking Bad', ActorName: 'Bryan Cranston' },
//   { TvShow: 'Mad Men', ActorName: 'Jon Hamm' },
// ]

kebabCasify(array);
// [
//   { 'tv-show': 'Malcom in the Middle', 'actor-name': 'Frankie Muniz' }
//   { 'tv-show': 'Breaking Bad', 'actor-name': 'Bryan Cranston' }
//   { 'tv-show': 'Mad Men', 'actor-name': 'Jon Hamm' }
// ]

snakeCasify(array);
// [
//   { tv_show: 'Malcom in the Middle', actor_name: 'Frankie Muniz' }
//   { tv_show: 'Breaking Bad', actor_name: 'Bryan Cranston' }
//   { tv_show: 'Mad Men', actor_name: 'Jon Hamm' }
// ]

startCasify(array);
// [
//   { 'Tv Show': 'Malcom in the Middle', 'Actor Name': 'Frankie Muniz' }
//   { 'Tv Show': 'Breaking Bad', 'Actor Name': 'Bryan Cranston' }
//   { 'Tv Show': 'Mad Men', 'Actor Name': 'Jon Hamm' }
// ]

upperCasify(array);
// [
//   { 'TV SHOW': 'Malcom in the Middle', 'ACTOR NAME': 'Frankie Muniz' }
//   { 'TV SHOW': 'Breaking Bad', 'ACTOR NAME': 'Bryan Cranston' }
//   { 'TV SHOW': 'Mad Men', 'ACTOR NAME': 'Jon Hamm' }
// ]

lowerCasify(array);
// [
//   { 'tv show': 'Malcom in the Middle', 'actor name': 'Frankie Muniz' }
//   { 'tv show': 'Breaking Bad', 'actor name': 'Bryan Cranston' }
//   { 'tv show': 'Mad Men', 'actor name': 'Jon Hamm' }
// ]
```

## License

MIT © [Marlon Landaverde](https://mdaverde.com)
