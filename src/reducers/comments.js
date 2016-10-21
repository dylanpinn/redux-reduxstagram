// @flow
import type { CommentsMap, Action, Comment } from '../types';

const postComments = (
  state: Comment[] = [],
  action: Action,
): Comment[] => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment,
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1),
      ];
    default:
      return state;
  }
};

const comments = (
  state: CommentsMap = {},
  action: Object,
): CommentsMap => {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action),
    };
  }
  return state;
};

export default comments;
