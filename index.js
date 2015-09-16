/**
 * @param  {Array} list - a list of keys to be created
 * @param  {*} initialValue - the value that should be set on each key
 * @return {Object.<string,*>}
 */
function listToHash(list, initialValue) {
	var result = {};

	list.forEach(function(key) {
		result[key] = initialValue;
	});

	return result;
}

module.exports = listToHash;