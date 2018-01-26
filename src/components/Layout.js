import React from 'react';
import TopNavigation from './navigation/TopNavigation';

const Layout = props => (
  <div>
    <TopNavigation />
    {props.children}
  </div>
);

export default Layout;
