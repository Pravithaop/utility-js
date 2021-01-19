const head = require('./head');
const tail = require('./tail');

const filter = (arr , filterFunction) =>{
	if (head(arr) === undefined) return [];
	return (filterFunction(head(arr)) ? [head(arr)] : []) .concat(filter(tail(arr),filterFunction));
	
}

module.exports = filter;































