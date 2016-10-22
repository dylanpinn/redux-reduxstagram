// @flow
import React from 'react';
import Photo from './Photo';
import type { Post, CommentsMap, incrementFunc } from '../types';

type Props = {
  posts: Post[],
  comments: CommentsMap,
  increment: incrementFunc,
}

const PhotoGrid = ({ posts, ...props }: Props) => (
  <div className="photo-grid">
    {posts.map((post, i) => <Photo {...props} key={i} i={i} post={post} />)}
  </div>
);

export default PhotoGrid;
