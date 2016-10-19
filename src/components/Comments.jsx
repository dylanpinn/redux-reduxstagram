// @flow
import React from 'react';

type Props = {
  postComments: Object[],
  params: Object,
  removeComment: Function,
  addComment: Function,
}

class Comments extends React.Component {
  props: Props;

  handleSubmit = (e: Event) => {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  };

  renderComment = (comment: Object, i: number) => (
    <div className="comment" key={i}>
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button
          className="remove-comment"
          onClick={() => this.props.removeComment(this.props.params.postId, i)}
        >&times;</button>
      </p>
    </div>
  );

  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
