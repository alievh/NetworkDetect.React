import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Container from "../Bootstrap/Container.tsx";
import Row from "../Bootstrap/Row.tsx";
import Col from "../Bootstrap/Col.tsx";
import { Link } from "react-router-dom";

const CartTable = () => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <table className="cart-content_table">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/bomber_jacket_black_1_130x160_crop_center.jpg?v=1683647779" />
                <span>Bomber Jacket</span>
              </td>
              <td>$190.00</td>
              <td className="cart-content_table-remove">
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/bomber_jacket_black_1_130x160_crop_center.jpg?v=1683647779" />
                <span>Bomber Jacket</span>
              </td>
              <td>$190.00</td>
              <td className="cart-content_table-remove">
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/bomber_jacket_black_1_130x160_crop_center.jpg?v=1683647779" />
                <span>Bomber Jacket</span>
              </td>
              <td>$190.00</td>
              <td className="cart-content_table-remove">
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/bomber_jacket_black_1_130x160_crop_center.jpg?v=1683647779" />
                <span>Bomber Jacket</span>
              </td>
              <td>$190.00</td>
              <td className="cart-content_table-remove">
                <Link to="#">
                  <FontAwesomeIcon icon={faTrash} />
                </Link>
              </td>
            </tr>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default CartTable;
