// @flow
import React from 'react';
import { Link } from 'react-router';

type Props = {
  children: any,
}

const Main = ({ children, ...props }: Props) => (
  <div>
    <h1>
      <Link to="/">Reduxstagram</Link>
    </h1>
    {React.cloneElement(children, props)}
  </div>
);

export default Main;
