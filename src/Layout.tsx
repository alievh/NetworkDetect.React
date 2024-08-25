import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer/Footer.tsx";
import Navbar from "./layouts/Navbar/Navbar.tsx";

const Layout = () => {
  return (
    <>
      <header id="header">
        <Navbar />
      </header>
      <main id="main">
        <Outlet />
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
