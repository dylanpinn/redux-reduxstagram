// @flow
import type { Id, Action } from '../types';
// increment
// eslint-disable-next-line arrow-parens
export const increment = (index: number): Action => ({
  type: 'INCREMENT_LIKES',
  index,
});

// add comment
export const addComment = (
  postId: string, author: string, comment: string
): Action => ({
  type: 'ADD_COMMENT',
  postId,
  author,
  comment,
});

// remove comment
export const removeComment = (postId: Id, i: number): Action => ({
  type: 'REMOVE_COMMENT',
  i,
  postId,
});
