const reduce = require('./reduce');

const max = (array) => {
	return reduce(array,((x,y)=> x >= y ? x : y));
    }

module.exports = max;