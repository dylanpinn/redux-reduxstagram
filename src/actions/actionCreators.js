// @flow
// increment
// eslint-disable-next-line arrow-parens
export const increment = (index: number) => ({
  type: 'INCREMENT_LIKES',
  index,
});

// add comment
export const addComment = (
  postId: string, author: string, comment: string
) => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment,
});

// remove comment
export const removeComment = (postId: string, i: number) => ({
  type: 'REMOVE_COMMENT',
  i,
  postId,
});
