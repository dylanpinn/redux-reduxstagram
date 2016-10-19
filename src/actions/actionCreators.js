// @flow
// increment
// eslint-disable-next-line arrow-parens
export const increment = (index: number): Object => ({
  type: 'INCREMENT_LIKES',
  index,
});

// add comment
export const addComment = (
  postId: string, author: string, comment: string
): Object => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment,
});

// remove comment
export const removeComment = (postId: string, i: number): Object => ({
  type: 'REMOVE_COMMENT',
  i,
  postId,
});
