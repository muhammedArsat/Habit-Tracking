import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Layout = () => {
  return (
    <div className="h-[95%] text-black dark:bg-black dark:text-white transition-colors duration-300 min-h-full">
      <Navbar />
      <main className="mt-16">
        <Outlet /> {/* ✅ Correct way to render child routes */}
      </main>
    </div>
  );
};

export default Layout;
