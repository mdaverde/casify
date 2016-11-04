import map from 'lodash.map';
import mapKeys from 'lodash.mapkeys';
import camelCase from 'lodash.camelcase';
import kebabCase from 'lodash.kebabcase';
import snakeCase from 'lodash.snakecase';
import startCase from 'lodash.startcase';
import uppercase from 'lodash.uppercase';
import lowercase from 'lodash.lowercase';

function casifyObject(caseFn, obj) {
  return mapKeys(obj, (value, key) => caseFn(key));
}

function casifyArray(caseFn, array) {
  return map(array, obj => casifyObject(caseFn, obj));
}

function casify(caseFn, collection) {
  if (Array.isArray(collection)) return casifyArray(caseFn, collection);
  return casifyObject(caseFn, collection);
}

function casifyFnFactory(caseFn) {
  return collection => casify(caseFn, collection);
}

export const camelCasify = casifyFnFactory(camelCase);
export const kebabCasify = casifyFnFactory(kebabCase);
export const snakeCasify = casifyFnFactory(snakeCase);
export const startCasify = casifyFnFactory(startCase);
export const upperCasify = casifyFnFactory(uppercase);
export const lowerCasify = casifyFnFactory(lowercase);

export default casify;
