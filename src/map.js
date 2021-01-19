const head = require('./head');
const tail = require('./tail');
const map = (array , applyFunction) =>{

	if(head(array)==undefined) return [];
	return [applyFunction(head(array))].concat(map(tail(array),applyFunction));
}

module.exports = map;