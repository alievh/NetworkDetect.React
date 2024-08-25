import React from "react";
import Container from "../Bootstrap/Container.tsx";
import Row from "../Bootstrap/Row.tsx";
import Col from "../Bootstrap/Col.tsx";
import SingleProduct from "./SingleProduct.tsx";

const ProductContainer = () => {
  return (
    <Container>
      <Row>
        <Col xl="3">
          <SingleProduct title="Bomber Jacket" price="180.00" isNew="true" />
        </Col>
        <Col xl="3">
          <SingleProduct title="Cap With Applique" price="19.00" isNew="false" />
        </Col>
        <Col xl="3">
          <SingleProduct title="Denim Overshirt" price="42.00" isNew="true" />
        </Col>
        <Col xl="3">
          <SingleProduct title="Loose Jeans" price="59.00" isNew="false" />
        </Col>
        <Col xl="3">
          <SingleProduct title="Bomber Jacket" price="180.00" isNew="true" />
        </Col>
        <Col xl="3">
          <SingleProduct title="Cap With Applique" price="19.00" isNew="false" />
        </Col>
        <Col xl="3">
          <SingleProduct title="Denim Overshirt" price="42.00" isNew="true" />
        </Col>
        <Col xl="3">
          <SingleProduct title="Loose Jeans" price="59.00" isNew="false" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductContainer;
