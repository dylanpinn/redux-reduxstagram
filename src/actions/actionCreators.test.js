import * as actions from './actionCreators';

describe('actions', () => {
  it('should create an action to increment a vote', () => {
    const index = 0;
    const expectedAction = {
      type: 'INCREMENT_LIKES',
      index,
    };

    expect(actions.increment(index)).toEqual(expectedAction);
  });
});
