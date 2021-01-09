const max = require('./max');
  
describe('Max', () => {

    it('Max of [1,2,3,4] is 4 ', () => {
        expect(max([1,2,3,4],4)).toEqual(4);
    });

    it('Max of [5,8,3] is 9', () => {
        expect(max([5,8,9],3)).toEqual(9);
    });

})











