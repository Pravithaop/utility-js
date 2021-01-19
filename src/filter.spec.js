
const filter = require('./filter');

describe('filter', () => {

	it('x=>true filter testing for an empty array', () => {
		expect(filter([], x=>true)).toEqual([]);
	});

	
	it('x=>true filter testing for a non-empty array', () => {
		expect(filter([1,2,3], x=>true)).toEqual([1,2,3]);
	});

	it('x=>false filter testing for a non-empty array', () => {
		expect(filter([1,2,3], x=>false)).toEqual([]);
	});

	
	it('x>1 filter testing for a non-empty array', () => {
		expect(filter([1,2,3], x=>x>1)).toEqual([2,3]);
	});
	
	
	it('Upper case filter testing for a non-empty array', () => {
		const filterUpperCase = (value) => {
			return value === value.toUpperCase();
		}
		expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
	});
	
})