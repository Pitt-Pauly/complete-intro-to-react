// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="app">
    <div className="landing">
      <h1>h4p1 Video</h1>
      <input type="text" placeholder="Search" />
      <Link to="/search">or Browse All</Link>
    </div>
  </div>
);

export default Landing;
