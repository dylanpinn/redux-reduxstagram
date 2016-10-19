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

  it('should create an action to add a comment', () => {
    const postId = 'aaa';
    const author = 'John';
    const comment = 'Lorem Ipsum';
    const expectedAction = {
      type: 'ADD_COMMENT',
      postId,
      author,
      comment,
    };

    expect(actions.addComment(postId, author, comment)).toEqual(expectedAction);
  });

  it('should create an action to remove a comment', () => {
    const postId = '111';
    const i = 0;
    const expectedAction = {
      type: 'REMOVE_COMMENT',
      i,
      postId,
    };

    expect(actions.removeComment(postId, i)).toEqual(expectedAction);
  });
});
