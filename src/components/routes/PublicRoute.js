// import React from 'react';
// import { Route } from 'react-router-dom';

// const PublicRoute = ({ element: Component, ...rest }) => {
//   return <Route {...rest} element={<Component />} />;
// };

// export default PublicRoute;

import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicRoute = () => {
  return <Outlet />;
};

export default PublicRoute;
