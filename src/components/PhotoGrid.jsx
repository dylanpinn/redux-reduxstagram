// @flow
import React from 'react';
import Photo from './Photo';

type Props = {
  posts: Object[],
}

const PhotoGrid = ({ posts, ...props }: Props) => (
  <div className="photo-grid">
    {posts.map((post, i) => <Photo {...props} key={i} i={i} post={post} />)}
  </div>
);

export default PhotoGrid;
