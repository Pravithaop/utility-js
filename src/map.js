const head = require('./head');
const tail = require('./tail');
const map = (arr , applyFunction) =>{

	if(head(arr)==undefined) return [];
	return [applyFunction(head(arr))].concat(map(tail(arr),applyFunction));
}

module.exports = map;























