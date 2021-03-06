// @flow
import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import type { Post, CommentsMap, incrementFunc } from '../types';

type Props = {
  post: Post,
  i: number,
  comments: CommentsMap,
  increment: incrementFunc,
}

const Photo = ({ post, i, comments, ...props }: Props) => (
  <figure className="grid-figure">
    <div className="grid-photo-wrap">
      <Link to={`/view/${post.code}`}>
        <img src={post.display_src} alt={post.caption} className="grid-photo" />
      </Link>
      <CSSTransitionGroup
        transitionName="like"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <span className="likes-heart" key={post.likes}>{post.likes}</span>
      </CSSTransitionGroup>
    </div>
    <figcaption>
      <p>{post.caption}</p>
      <div className="control-buttons">
        <button onClick={() => props.increment(i)} className="likes">&hearts; {post.likes}</button>
        <Link className="button" to={`/view/${post.code}`}>
          <span className="comment-count">
            <span className="speech-bubble" />
            {comments[post.code] ? comments[post.code].length : 0}
          </span>
        </Link>
      </div>
    </figcaption>
  </figure>
);

export default Photo;
