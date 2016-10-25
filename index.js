/**
 * @param  {Array} list - a list of keys to be created
 * @param  {*} initialValue - the value that should be set on each key
 * @return {Object.<string,*>}
 */
function basicExecutor(list, initialValue) {
	var result = {};

	list.forEach(function(key) {
		result[key] = initialValue;
	});

	return result;
}

function computeKeys(keyFn, values) {
	var result = {};

	values.forEach(function(value, index) {
		result[keyFn(value, index, values)] = value;
	});

	return result;
}

function computeValues(keys, valueFn) {
	var result = {};

	keys.forEach(function(key, index) {
		result[key] = valueFn(key, index, keys);
	});

	return result;
}

function listToHash(keysOrFn, valuesOrFn) {
	if (typeof keysOrFn === 'function') {
		return computeKeys(keysOrFn, valuesOrFn);
	} else if (typeof valuesOrFn === 'function') {
		return computeValues(keysOrFn, valuesOrFn);
	} else {
		return basicExecutor(keysOrFn, valuesOrFn);
	}
}

module.exports = listToHash;