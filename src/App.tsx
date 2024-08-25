import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout.tsx';
import Collections from "./pages/Collections/Collections.tsx";
import Account from "./pages/Account/Account.tsx";
import Cart from "./pages/Cart/Cart.tsx"
import Wishlist from "./pages/Wishlist/Wishlist.tsx"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PrivateRoute />}> */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Collections />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/account" element={<Account />} />
            </Route>
          {/* </Route> */}
          {/* <Route path="/notfound" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
