const max = require('./max');
  
describe('Max', () => {

    it('Max of [1,2,3,4] is 4 ', () => {
        expect(max([1,2,3,4])).toEqual(4);
    });

    it('Max of 5,8,3[] is 8', () => {
        expect(max([5,8,3])).toEqual(8);
    });

})











