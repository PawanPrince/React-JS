import React, { Suspense } from 'react';
import MyNavbar from '../15_browserRouter/MyNavbar';
import { Outlet } from 'react-router-dom';
import Loader from './Loder';

const Layout = () => {
  return (
   <div className="min-h-screen w-full bg-gradient-to-br from-gray-700 via-gray-800 to-black text-white relative">
  <MyNavbar />

  <Suspense
    fallback={
      <div className="absolute inset-0 flex items-center justify-center">
        <Loader />
      </div>
    }
  >
    <Outlet />
  </Suspense>
</div>

  );
};

export default Layout;
