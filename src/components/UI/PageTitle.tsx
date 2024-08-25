import React from "react";
import Container from "../Bootstrap/Container.tsx";
import Row from "../Bootstrap/Row.tsx";
import Col from "../Bootstrap/Col.tsx";

const PageTitle: React.FC<{
    title: string
}> = (props) => {
  return (
    <Container>
      <Row>
        <Col xl="12">
          <h2>{props.title}</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default PageTitle;
