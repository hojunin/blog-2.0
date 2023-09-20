import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-auto w-full sm:py-5 sm:px-5 md:px-8 lg:px-24 xl:px-40">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
