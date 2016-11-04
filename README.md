# casify [![Build Status](https://travis-ci.org/milanlandaverde/casify.svg?branch=master)](https://travis-ci.org/milanlandaverde/casify)

> Converts object keys or array of objects' keys to different case styles

## Install

```
$ npm install --save casify
```

## Usage

```js
const {
  camelCasify,
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
```


## License

MIT © [Marlon Landaverde](http://mml.sexy)