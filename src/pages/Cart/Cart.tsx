import React from "react";
import PageTitle from "../../components/UI/PageTitle.tsx";

import CartTable from "../../components/Cart/CartTable.tsx";

const Cart = () => {
  return (
    <>
      <section className="page-title">
        <PageTitle title="Your Shopping Cart" />
      </section>
      <section className="cart-content">
        <CartTable />
      </section>
    </>
  );
};

export default Cart;
