import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";
import Collections from "./pages/Collections/Collections.tsx";
import Account from "./pages/Account/Account.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.tsx";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoute />}>
              <Route path="/cart" element={<Cart />} />
            </Route>
            <Route index element={<Collections />} />
            <Route path="/account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
