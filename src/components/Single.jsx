// @flow
import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import type {
  Post, Posts, Id, CommentsMap,
  addCommentFunc, removeCommentFunc, incrementFunc,
} from '../types';

type Props = {
  posts: Posts,
  params: { postId: Id },
  comments: CommentsMap,
  addComment: addCommentFunc,
  removeComment: removeCommentFunc,
  increment: incrementFunc,
}

const Single = ({ posts, params, comments, ...props }: Props) => {
  const { postId } = params;
  const i: number = posts.findIndex(post => post.code === postId);
  const post: Post = posts[i];
  const postComments: Object[] = comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} comments={comments} {...props} />
      <Comments postComments={postComments} params={params} {...props} />
    </div>
  );
};

export default Single;
