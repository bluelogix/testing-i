const{ repair, fail, succeed } = require('./enhancer.js');

// test away!


describe('enhancer.js', () => {
    test('can run tests', () => {
        expect(true).toBe(true);
    });

describe('repair()', () => {
    it('returns new item with restored durability', () => {
        const item = { durability: 89}

        expect(repair(item).durability).toBe(100)
         })
    })

// When enhancement succeeds
// The item's enhancement increases by 1.
// If the item enhancement level is 20, the enhancement level is not changed.

describe('succeed()', () => {
    it('should increase by one, maxed at level 20', () => {
        const item = {
            name: 'Name of Enhancement',
            durability: 100,
            enhancement: 15 
        }
        expect(succeed(item).enhancement).toBe(16);
        expect(succeed(item).durability).toBe(100);
    })
})





// The durability of the item is not changed.
// When enhancement fails
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).


})