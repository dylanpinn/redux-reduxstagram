import reducer from './posts';

describe('posts reducer', () => {
  it('should return initialState if none passed', () => {
    let state;
    const action = {};
    const nextState = reducer(state, action);
    expect(nextState).toEqual([]);
  });
  it('should return state if no action type', () => {
    const state = [{
      likes: 0,
      id: 'aaa',
    }];
    const action = { index: 0 };
    const nextState = reducer(state, action);
    expect(nextState).toEqual([{
      likes: 0,
      id: 'aaa',
    }]);
  });
  describe('INCREMENT_LIKES', () => {
    it('should work with 1 post', () => {
      const state = [{
        likes: 0,
        id: 'aaa',
      }];
      const action = { type: 'INCREMENT_LIKES', index: 0 };
      const nextState = reducer(state, action);
      expect(nextState).toEqual([{
        likes: 1,
        id: 'aaa',
      }]);
    });

    it('should work with multiple posts', () => {
      const state = [{
        likes: 0,
        id: 'aaa',
      }, {
        likes: 100,
        id: 'bbb',
      }];
      const action = { type: 'INCREMENT_LIKES', index: 0 };
      const nextState = reducer(state, action);
      expect(nextState).toEqual([{
        likes: 1,
        id: 'aaa',
      }, {
        likes: 100,
        id: 'bbb',
      }]);
    });
  });
});
