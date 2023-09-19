import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-auto w-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
