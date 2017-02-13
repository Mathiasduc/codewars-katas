/*Test.expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
Test.expect(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
Test.expect(!isValidWalk(['w']), 'should return false');
Test.expect(!isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');*/
const walk = require('./walk');

describe('walk', () => {
  it('the walk path should return true', () => {
    expect(walk(['n','s','n','s','n','s','n','s','n','s'])).toEqual(true);
  });
});

describe('walk', () => {
  it('the walk path should return false', () => {
    expect(walk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toEqual(false);
  });
});

describe('walk', () => {
  it('the walk path should return false', () => {
    expect(walk('w')).toEqual(false);
  });
});

describe('walk', () => {
  it('the walk path should return false', () => {
    expect(walk(['n','n','n','s','n','s','n','s','n','s'])).toEqual(false);
  });
});