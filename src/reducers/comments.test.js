import reducer from './comments';

describe('postComments reducer', () => {
  it('should return state if no action type', () => {
    const state = [{
      user: 'Test',
      text: 'Comment',
    }];
    const action = { author: 'New User' };
    const nextState = reducer(state, action);
    expect(nextState).toEqual([{
      user: 'Test',
      text: 'Comment',
    }]);
  });
});
