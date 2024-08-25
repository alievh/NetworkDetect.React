import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer/Footer.tsx";
import Navbar from "./layouts/Navbar/Navbar.tsx";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
