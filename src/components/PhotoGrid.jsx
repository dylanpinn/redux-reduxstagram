// @flow
import React from 'react';
import Photo from './Photo';
import { Post, Comments } from '../types';

type Props = {
  posts: Post[],
  comments: Comments,
  increment: Function,
}

const PhotoGrid = ({ posts, ...props }: Props) => (
  <div className="photo-grid">
    {posts.map((post, i) => <Photo {...props} key={i} i={i} post={post} />)}
  </div>
);

export default PhotoGrid;
