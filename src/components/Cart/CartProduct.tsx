import React, { useState } from "react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BASE_URL } from "../../utils/BaseUrl.tsx";
import Loading from "../Loading/Loading.tsx";
import Swal from "sweetalert2";
import { CartModel, CartProductModel } from "../../interfaces/Models.tsx";
import { useNetworkStatus } from "../../hooks/useNetworkStatus.tsx";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/LocalStorage.tsx";

const CartProduct: React.FC<{
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  handler: (id: number) => void;
}> = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const isOnline = useNetworkStatus();

  function RemoveProductStorage() {
    const cart = getFromLocalStorage<CartProductModel[]>("cart");
    const newCart = cart?.filter(n => n.id !== props.id);
    setToLocalStorage("cart", newCart);
    props.handler(props.id);
  }

  async function RemoveProductDb() {
    setLoading(true);

    const response = await fetch(`${BASE_URL}/cart/removeFromCart/${props.id}`, {
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
        props.handler(props.id);
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

  if(loading) return <Loading />


  return (
    <tr>
      <td>
        <img src={`https://localhost:53553/img/${props.imageUrl}`} />
        <span>{props.title}</span>
      </td>
      <td>${props.price}</td>
      <td className="cart-content_table-remove">
        <button type="button" onClick={isOnline ? RemoveProductDb : RemoveProductStorage}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default CartProduct;
