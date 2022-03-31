import { app } from './app';

describe('a block', (): void => {
  it('runs tests', (): void => {
    expect.assertions(1);

    expect(app).toBeDefined();
  });
});
