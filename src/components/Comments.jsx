// @flow
import * as React from 'react';
import type {
  Comment, Id, removeCommentFunc, addCommentFunc,
} from '../types';

type Props = {
  postComments: Comment[],
  params: { postId: Id },
  removeComment: removeCommentFunc,
  addComment: addCommentFunc,
}

class Comments extends React.Component<Props> {
  props: Props;
  author: ?HTMLInputElement;
  comment: ?HTMLInputElement;
  commentForm: ?HTMLFormElement;

  handleSubmit = (e: Event): void => {
    e.preventDefault();
    const { postId } = this.props.params;
    if (this.author && this.comment) {
      const author: string = this.author.value;
      const comment: string = this.comment.value;
      this.props.addComment(postId, author, comment);
      if (this.commentForm) {
        this.commentForm.reset();
      }
    }
  };

  renderComment = (comment: Comment, i: number) => (
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
