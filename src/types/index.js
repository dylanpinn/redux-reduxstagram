// @flow
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import type { Map } from 'immutable';

export type Id = string;

export type Post = {
  code: string,
  caption: ?string,
  likes: ?number,
  id: Id,
  display_src: string,
}

export type Posts = Array<Post>;

export type Comment = {
  user: string,
  text: string,
}

export type CommentsMap = {
  [postId: Id]: Comment[],
}

// Map<(string) | ('name', 'tags'), string | List<string>>

// export type State = Map<string, Posts>;

export type State = {
  posts: Posts,
  comments: CommentsMap,
  routing?: Object,
}

export type Action =
  {
    type: 'INCREMENT_LIKES',
    index: number
  } | {
    type: 'ADD_COMMENT',
    postId: string,
    author: string,
    comment: string
  } | {
    type: 'REMOVE_COMMENT',
    i: number,
    postId: Id,
  };

export type addCommentFunc = (p: Id, a: string, c: string) => Action;
export type removeCommentFunc = (p: Id, i: number) => Action;
export type incrementFunc = (i: number) => Action;

export type Store = ReduxStore<State, Action>

export type Dispatch = ReduxDispatch<Action>;
