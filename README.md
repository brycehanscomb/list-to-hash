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

## Testing
To run the test, `cd` into the folder and run `node test.js`.