import React from "react";
import Container from "../../components/Bootstrap/Container.tsx";
import Row from "../../components/Bootstrap/Row.tsx";
import Col from "../../components/Bootstrap/Col.tsx";
import RightsReserved from "../../components/Footer/RightsReserved.tsx";

const Footer = () => {
  return (
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xl="12">
            <RightsReserved />
          </Col>
        </Row>
      </Container>
  );
};

export default Footer;
