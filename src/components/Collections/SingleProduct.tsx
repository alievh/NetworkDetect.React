import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart } from "@fortawesome/free-solid-svg-icons";

const SingleProduct: React.FC<{
  title: string;
  price: number;
  isNew: boolean;
}> = (props) => {
  return (
    <div className="single-product">
      <div className="single-product_photo">
        <img src="https://theme534-wholesale-store.myshopify.com/cdn/shop/products/bomber_jacket_black_1_720x.jpg?v=1683647779" />
        {props.isNew == "true" ? (
          <div className="single-product_photo-new">New</div>
        ) : (
          ""
        )}
        <div className="single-product_actions">
          <div className="single-product_actions-cart">
            <Link to="#">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </div>
          <div className="single-product_actions-wishlist">
            <Link to="#">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </div>
        </div>
      </div>
      <div className="single-product_about">
        <span className="single-product_about-title">{props.title}</span>
        <span>${props.price}</span>
      </div>
    </div>
  );
};

export default SingleProduct;
