const reduce = require('./reduce');

describe('reduce', () => {

	it('x+y reducer testing for an empty array', () => {
		expect(reduce([], (x,y)=>x+y)).toBeUndefined();
	});

	it('x+y,10 reducer testing for an empty array', () => {
		expect(reduce([], (x,y)=>x+y,10)).toEqual(10);
	});

	it('x+y reducer testing for a non-empty array', () => {
		expect(reduce(['a','b','c'], (x,y)=>x+y)).toMatch(/abc/);
	});

	it('x+y,z reducer testing for a non-empty array', () => {
		expect(reduce(['a','b','c'], (x,y)=>x+y,'z')).toMatch(/zabc/);
	});
	
})