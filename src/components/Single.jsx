// @flow
import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

type Props = {
  posts: Object[],
  params: { postId: string },
  comments: Object,
}

const Single = ({ posts, params, comments, ...props }: Props) => {
  const { postId } = params;
  const i = posts.findIndex(post => post.code === postId);
  const post = posts[i];
  const postComments = comments[postId] || [];

  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...props} />
      <Comments postComments={postComments} {...props} />
    </div>
  );
};

export default Single;
