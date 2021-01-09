const min = require('./min');
  
describe('Min', () => {

    it('Min of [1,2,3,4] is 1 ', () => {
        expect(min([1,2,3,4])).toEqual(1);
    });

    it('Min of 5,8,3[] is 3', () => {
        expect(min([5,8,3])).toEqual(3);
    });

})



