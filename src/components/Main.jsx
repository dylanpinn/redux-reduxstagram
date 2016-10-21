// @flow
import React from 'react';
import { Link } from 'react-router';

const Main = ({ children, ...props }: any) => (
  <div>
    <h1>
      <Link to="/">Reduxstagram</Link>
    </h1>
    {React.cloneElement(children, props)}
  </div>
);

export default Main;
