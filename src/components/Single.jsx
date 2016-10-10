import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends React.Component {
  static propTypes = {
    posts: React.PropTypes.arrayOf(React.PropTypes.object),
    params: React.PropTypes.shape({
      postId: React.PropTypes.string,
    }),
    comments: React.PropTypes.object,
  }

  render() {
    const { postId } = this.props.params;
    const { posts, comments } = this.props;
    const i = posts.findIndex(post => post.code === postId);
    const post = posts[i];
    const postComments = comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} />
      </div>
    );
  }
}

export default Single;
