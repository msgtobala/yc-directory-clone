import React from 'react';
import Navbar from '../../components/Navbar';

const Layout = (props: Readonly<{ children: React.ReactNode }>) => {
  const { children } = props;

  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
