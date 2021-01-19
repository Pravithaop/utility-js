const reduce = require('./reduce');

const min = (array) => {
	return reduce(array,((x,y)=> x <= y ? x : y));
    }

module.exports = min;
