import { add } from '../src/index';

describe('index tests', () => {
  it('sum should return 4, when adding 2 + 2', () => {
    const result = add(2, 2);
    expect(result).toBe(4);
  });
});
