import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  }

  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
