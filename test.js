/**
 * To run this test, open up a terminal window in this directory and run `node test.js`
 */

var listToHash = require('./index.js');

function test(test_name, inputList, inputValue, expectedResult) {
	var result = listToHash(inputList, inputValue);

	if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
		throw new Error('Failed this test: ' + test_name);
	} else {
		console.log('Passed this test: ' + test_name);
	}
}

try {

	test(
		'Basic empty list',
		[],
		undefined,
		{}
	);

	test(
		'Basic empty with an arbitrary value',
		[],
		true,
		{}
	);

	test(
		'List with one item and no value',
		['key1'],
		undefined,
		{
			key1: undefined
		}
	);

	test(
		'List with one item and an arbitrary value',
		['key1'],
		Math.PI,
		{
			key1: Math.PI
		}
	);

	test(
		'List with multiple items and no value',
		['key1', 'key2', 'key3', 'key4'],
		undefined,
		{
			key1: undefined,
			key2: undefined,
			key3: undefined,
			key4: undefined,
		}
	);

	test(
		'List with multiple items and an arbitrary value',
		['key1', 'key2', 'key3', 'key4'],
		Math.PI,
		{
			key1: Math.PI,
			key2: Math.PI,
			key3: Math.PI,
			key4: Math.PI
		}
	);

	console.log('------------------------');
	console.log('    ALL TESTS PASSED    ');
	console.log('------------------------');

} catch(e) {
	throw e;
}