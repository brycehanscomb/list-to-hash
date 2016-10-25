# list-to-hash
Create a hash Object with keys from an Array

## Installation
Install the module with the following command:

`npm install --save list-to-hash`

## Usage

````js
var listToHash = require('list-to-hash');

var keys = [
  'apples',
  'bananas',
  'oranges',
  'strawberries'
];

/**
 * @param {(Array|function}} keys
 * @param {(any|function)} value
 * @returns {Object}
*/
listToHash(keys, 'delicous!');
````

Will output the following:

````js
{
  'apples': 'delicious!',
  'bananas': 'delicious!',
  'oranges': 'delicious!',
  'strawberries': 'delicious!'
}
````

### Dynamic Keys / Values

If you pass a function to either of the arguments, it will be invoked for each
item expecting you to calculate a return value.

#### Dynamic Keys

If your `values` is a function, it will be called with the following signature:

```js
function calculateValue(value, index, array) {
  return 'some string here';
}
```

##### Example

```js
const values = [
  {id: 'hello'},
  {id: 'world'},
  {id: 'foo'}
]
const pluckId = (value, index, array) => value.id + '_' + index;

listToHash(pluckId, values)

// will return the following:
{
  'hello_0': {id: 'hello'},
  'world_1': {id: 'world'},
  'foo_2': {id: 'foo'}
}
````

#### Dynamic Values

If your `values` is a function, it will be called with the following signature:

```js
function calculateValue(key, index, array) {
  return 'some string here';
}
```

##### Example

```js
const keys = [
  'apples',
  'bananas',
  'oranges',
  'strawberries'
];

const reverse = input => input.split.reverse();

listToHash(keys, reverse)

// will return the following:
{
  'apples': 'selppa',
  'bananas': 'sananab',
  'oranges': 'segnaro',
  'strawberries': 'seirrebwarts'
}
````

### Edge Cases

If you have a list of keys and the values should all be a particular function,
like so:

```js
const keys = ['a', 'b', 'c'];
function yourOwnFn() { doSomething(); }

listToHash(keys, yourOwnFn);
```

This will not point the keys `a`, `b` and `c` to `yourOwnFn`, because it treats
`yourOwnFn` as the dynamic value calculator and expects it to return the actual
value you want.

To work around this, make the return value of the value calculator function be
the actual function you want it to point to like so:

```js
const keys = ['a', 'b', 'c'];
function yourOwnFn() { doSomething(); }
const getYourOwnFn = (key, index, array) => { return yourOwnFn; }

listToHash(keys, getYourOwnFn);
```

This usage will give you the results you expect.

## Testing
To run the test, `cd` into the folder and run `npm test`.