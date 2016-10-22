import reducer from './comments';

describe('comments reducer', () => {
  it('should set initialState if no state passed', () => {
    let state;
    const action = {};
    const nextState = reducer(state, action);
    expect(nextState).toEqual({});
  });

  it('should return state if no action type', () => {
    const state = {
      a: [{
        user: 'Test',
        text: 'Comment',
      }],
    };
    const action = { author: 'New User', postId: 'a' };
    const nextState = reducer(state, action);
    expect(nextState).toEqual({
      a: [{
        user: 'Test',
        text: 'Comment',
      }],
    });
  });

  describe('ADD_COMMENT', () => {
    it('should add a new comment to postComments', () => {
      const state = {
        a: [{
          user: 'User 1',
          text: 'Old Comment',
        }],
        b: [{
          user: 'User 2',
          text: 'Older Comment',
        }, {
          user: 'User 1',
          text: 'Other comment',
        }],
      };
      const action = {
        type: 'ADD_COMMENT',
        author: 'John',
        comment: 'Test',
        postId: 'b',
      };
      const nextState = reducer(state, action);
      expect(nextState).toEqual({
        a: [{
          user: 'User 1',
          text: 'Old Comment',
        }],
        b: [{
          user: 'User 2',
          text: 'Older Comment',
        }, {
          user: 'User 1',
          text: 'Other comment',
        }, {
          user: 'John',
          text: 'Test',
        }],
      });
    });

    it('should add a comment to empty postComments', () => {
      let state;
      const action = {
        type: 'ADD_COMMENT',
        author: 'John',
        comment: 'Test',
        postId: 'a',
      };
      const nextState = reducer(state, action);
      expect(nextState).toEqual({
        a: [{
          user: 'John',
          text: 'Test',
        }],
      });
    });
  });

  describe('REMOVE_COMMENT', () => {
    it('should remove a comment', () => {
      const state = {
        a: [{
          user: 'User 1',
          text: 'Old Comment',
        }],
        b: [{
          user: 'User 2',
          text: 'Older Comment',
        }, {
          user: 'User 1',
          text: 'Other comment',
        }, {
          user: 'John',
          text: 'Test',
        }],
      };
      const action = {
        type: 'REMOVE_COMMENT',
        postId: 'b',
        i: 2,
      };
      const nextState = reducer(state, action);
      expect(nextState).toEqual({
        a: [{
          user: 'User 1',
          text: 'Old Comment',
        }],
        b: [{
          user: 'User 2',
          text: 'Older Comment',
        }, {
          user: 'User 1',
          text: 'Other comment',
        }],
      });
    });
  });
});
