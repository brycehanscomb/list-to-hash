/**
 * To run this test, open up a terminal window in this directory and run `node test.js`
 */

var listToHash = require('./index.js');

function test(test_name, inputList, inputValue, expectedResult) {
	var result = listToHash(inputList, inputValue);

	if (JSON.stringify(result) !== JSON.stringify(expectedResult)) {
		throw new Error('Failed this test: ' + test_name + '. Expected ' + JSON.stringify(expectedResult) + ' but got ' + JSON.stringify(result));
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

	var keyList = ['key1', 'key2', 'key3', 'key4']

	test(
		'List with multiple items and no value',
		keyList,
		undefined,
		{
			key1: undefined,
			key2: undefined,
			key3: undefined,
			key4: undefined
		}
	);

	test(
		'List with multiple items and an arbitrary value',
		keyList,
		Math.PI,
		{
			key1: Math.PI,
			key2: Math.PI,
			key3: Math.PI,
			key4: Math.PI
		}
	);

	test(
		'List with value generator function that returns its arguments in correct order',
		keyList,
		function(input, index, array) {
			return [input, index, array];
		},
		{
			key1: [keyList[0], 0, keyList],
			key2: [keyList[1], 1, keyList],
			key3: [keyList[2], 2, keyList],
			key4: [keyList[3], 3, keyList]
		}
	);

	test(
		'List with key generator function that returns its arguments in correct order, stringified',
		function(input, index, array) {
			return JSON.stringify([input, index, array]);
		},
		keyList,
		{
			[JSON.stringify([keyList[0], 0, keyList])]: keyList[0],
			[JSON.stringify([keyList[1], 1, keyList])]: keyList[1],
			[JSON.stringify([keyList[2], 2, keyList])]: keyList[2],
			[JSON.stringify([keyList[3], 3, keyList])]: keyList[3]
		}
	);

	console.log('------------------------');
	console.log('    ALL TESTS PASSED    ');
	console.log('------------------------');

} catch(e) {
	throw e;
}