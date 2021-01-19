const head = require('./head');
const tail = require('./tail');

const filter = (array , filterFunction) =>{
	if (head(array) === undefined) return [];
	return (filterFunction(head(array)) ? [head(array)] : []) .concat(filter(tail(array),filterFunction));
	
}

module.exports = filter;