import React from "react";
import ProductContainer from "../../components/Collections/ProductContainer.tsx";
import PageTitle from "../../components/UI/PageTitle.tsx";

const Collections = () => {
  return (
    <>
      <section className="page-title">
        <PageTitle title="Products" />
      </section>
      <section id="collections-list-section">
        <ProductContainer />
      </section>
    </>
  );
};

export default Collections;
