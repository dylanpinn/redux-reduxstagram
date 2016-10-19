// @flow
import React from 'react';
import type { Comment } from '../types';

type Props = {
  postComments: Comment[],
  params: { postId: string },
  removeComment: Function,
  addComment: Function,
}

class Comments extends React.Component {
  props: Props;
  author: any;
  comment: any;
  commentForm: any;

  handleSubmit = (e: Event): void => {
    e.preventDefault();
    const { postId } = this.props.params;
    const author: mixed = this.author.value;
    const comment: mixed = this.comment.value;
    this.props.addComment(postId, author, comment);
    this.commentForm.reset();
  };

  renderComment = (comment: Object, i: number): any => (
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
        <form ref={(form) => { this.commentForm = form; }} className="comment-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={(input) => { this.author = input; }}
            placeholder="author"
          />
          <input
            type="text"
            ref={(input) => { this.comment = input; }}
            placeholder="comment"
          />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
