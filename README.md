# casify [![Build Status](https://travis-ci.org/milanlandaverde/casify.svg?branch=master)](https://travis-ci.org/milanlandaverde/casify)

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
//=> { firstName: 'John', lastName: 'Smith' }

bumpyCasify(object);
//=> { FirstName: 'John', LastName: 'Smith' }

kebabCasify(object);
//=> { 'first-name': 'John', 'last-name': 'Smith' }

snakeCasify(object);
//=> { 'first_name': 'John', 'last_name': 'Smith' }

startCasify(object);
//=> { 'First Name': 'John', 'Last Name': 'Smith' }

upperCasify(object);
//=> { 'FIRST NAME': 'John', 'LAST NAME': 'Smith' }

lowerCasify(object);
//=> { 'first name': 'John', 'last name': 'Smith' }

const array = [
  { tv_show: 'Malcom in the Middle', 'actor-name': 'Frankie Muniz' },
  { tv_show: 'Breaking Bad', 'ACTOR NAME': 'Bryan Cranston' },
  { tv_show: 'Mad Men', 'Actor Name': 'Jon Hamm' },
];

camelCasify(array);
//=> 0: { tvShow: 'Malcom in the Middle', actorName: 'Frankie Muniz' }
//=> 1: { tvShow: 'Breaking Bad', actorName: 'Bryan Cranston' }
//=> 2: { tvShow: 'Mad Men', actorName: 'Jon Hamm' }

bumpyCasify(array);
//=> 0: { TvShow: 'Malcom in the Middle', ActorName: 'Frankie Muniz' }
//=> 1: { TvShow: 'Breaking Bad', ActorName: 'Bryan Cranston' }
//=> 2: { TvShow: 'Mad Men', ActorName: 'Jon Hamm' }

kebabCasify(array);
//=> 0: { 'tv-show': 'Malcom in the Middle', 'actor-name': 'Frankie Muniz' }
//=> 1: { 'tv-show': 'Breaking Bad', 'actor-name': 'Bryan Cranston' }
//=> 2: { 'tv-show': 'Mad Men', 'actor-name': 'Jon Hamm' }

snakeCasify(array);
//=> 0: { tv_show: 'Malcom in the Middle', actor_name: 'Frankie Muniz' }
//=> 1: { tv_show: 'Breaking Bad', actor_name: 'Bryan Cranston' }
//=> 2: { tv_show: 'Mad Men', actor_name: 'Jon Hamm' }

startCasify(array);
//=> 0: { 'Tv Show': 'Malcom in the Middle', 'Actor Name': 'Frankie Muniz' }
//=> 1: { 'Tv Show': 'Breaking Bad', 'Actor Name': 'Bryan Cranston' }
//=> 2: { 'Tv Show': 'Mad Men', 'Actor Name': 'Jon Hamm' }

upperCasify(array);
//=> 0: { 'TV SHOW': 'Malcom in the Middle', 'ACTOR NAME': 'Frankie Muniz' }
//=> 1: { 'TV SHOW': 'Breaking Bad', 'ACTOR NAME': 'Bryan Cranston' }
//=> 2: { 'TV SHOW': 'Mad Men', 'ACTOR NAME': 'Jon Hamm' }

lowerCasify(array);
//=> 0: { 'tv show': 'Malcom in the Middle', 'actor name': 'Frankie Muniz' }
//=> 1: { 'tv show': 'Breaking Bad', 'actor name': 'Bryan Cranston' }
//=> 2: { 'tv show': 'Mad Men', 'actor name': 'Jon Hamm' }
```


## License

MIT © [Marlon Landaverde](http://mml.sexy)
