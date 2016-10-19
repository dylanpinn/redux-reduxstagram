// @flow
import React from 'react';
import Photo from './Photo';
import Comments from './Comments';
import type { Post } from '../types';

type Props = {
  posts: Post[],
  params: { postId: string },
  comments: Object,
  addComment: Function,
  removeComment: Function,
  increment: Function,
}

const Single = ({ posts, params, comments, ...props }: Props) => {
  const { postId } = params;
  const i = posts.findIndex(post => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} comments={comments} {...props} />
      <Comments postComments={postComments} params={params} {...props} />
    </div>
  );
};

export default Single;
