import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { BASE_URL } from "../../utils/BaseUrl.tsx";
import Swal from "sweetalert2";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/LocalStorage.tsx";
import { CartProductModel } from "../../interfaces/Models.tsx";
import { useNetworkStatus } from "../../hooks/useNetworkStatus.tsx";

const SingleProduct: React.FC<{
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  isNew: boolean;
}> = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isOnline = useNetworkStatus();

  function AddProductStorage() {
    const cart = getFromLocalStorage<CartProductModel[]>("cart");
    cart?.push({
      id: props.id,
      title: props.title,
      price: props.price,
      image: {
        id: "",
        imageUrl: props.imageUrl
      }
    });
    Swal.fire({
      position: "top-end",
      title: "Product added successfully",
      showConfirmButton: false,
      timer: 1500
    });
    setToLocalStorage("cart", cart);
  }

  async function AddProductDb() {
    setLoading(true);

    const response = await fetch(`${BASE_URL}/cart/addToCart/${props.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "{}").token
        }`,
      },
    }).then((res) => {
      setLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          console.log(data);
          setError(data.title.toString());
        });
      }
    });

    if(response.status == "Success"){
      Swal.fire({
        position: "top-end",
        title: response.message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  }

  

  return (
    <div className="single-product">
      <div className="single-product_photo">
        <img
          src={`https://localhost:53553/img/${props.imageUrl}`}
          alt="productImage"
        />
        {props.isNew == true ? (
          <div className="single-product_photo-new">New</div>
        ) : (
          ""
        )}
        <div className="single-product_actions">
          <div className="single-product_actions-cart">
            {JSON.parse(localStorage.getItem("user") || "{}").token ===
            undefined ? (
              <p>Sign in to add product</p>
            ) : (
              <button type="button" onClick={isOnline ? AddProductDb : AddProductStorage}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            )}
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
