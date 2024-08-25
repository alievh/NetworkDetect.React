import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.tsx';
import Collections from "./pages/Collections/Collections.tsx";
import Account from "./pages/Account/Account.tsx";
import Cart from "./pages/Cart/Cart.tsx"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Collections />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
