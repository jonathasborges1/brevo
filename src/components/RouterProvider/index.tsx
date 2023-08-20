import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ROUTES from '@config/routes';
import Home from '@pages/Home';

interface RoutesProps {
   children?: React.ReactNode;
}

const RouterProvider: React.FC<RoutesProps> = ({ ...props }) => {
   return (
      <Router {...props}>
         <Routes>
            {/* Template Public Routes */}
            <Route path={ROUTES.HOME} element={<Home />} />
         </Routes>
   </Router>
   )
}

export default RouterProvider;