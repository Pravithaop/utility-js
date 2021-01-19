
const head = require('./head');
const tail = require('./tail');


const reduce = (array , reduceFunction , actualValue) =>{
	if(head(array) === undefined) return actualValue;

	return reduce(tail(array),reduceFunction,actualValue ? (reduceFunction(actualValue,head(array))) : (head(array)));
	

}
module.exports = reduce;
	





























