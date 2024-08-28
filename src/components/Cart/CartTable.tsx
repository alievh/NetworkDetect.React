import React, { useEffect, useMemo, useRef, useState } from "react";
import Container from "../Bootstrap/Container.tsx";
import Row from "../Bootstrap/Row.tsx";
import Col from "../Bootstrap/Col.tsx";
import { BASE_URL } from "../../utils/BaseUrl.tsx";
import Loading from "../Loading/Loading.tsx";
import { CartModel, CartProductModel } from "../../interfaces/Models.tsx";
import CartProduct from "./CartProduct.tsx";
import {getFromLocalStorage, setToLocalStorage} from "../../utils/LocalStorage.tsx";
import { useNetworkStatus } from "../../hooks/useNetworkStatus.tsx";
import Swal from "sweetalert2";

const CartTable = () => {
  const [data, setData] = useState<CartProductModel[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isOnline = useNetworkStatus();
  const prevOnlineStatus = useRef(isOnline);

  const fetchData = async () => {
    setLoading(true);

    if(!isOnline)
    {
      setData(getFromLocalStorage("cart"));
      setLoading(false);
    }else if(isOnline) {
      try {
        const response = await fetch(`${BASE_URL}/cart`, {method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              JSON.parse(localStorage.getItem("user") || "{}").token
            }`,
          },});
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if(result !== undefined){
          setToLocalStorage<CartProductModel[]>("cart", result?.products);
        }
        setData(result.products);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };
  
  const updateCart = async () => {
      console.log("Updated")

    const response = await fetch(`${BASE_URL}/cart/update`, {
      method: "PUT",
      body: JSON.stringify(getFromLocalStorage("cart")),
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
          console.log(data.title.toString())
          setError(data.title.toString());
        });
      }
    });
    
    // if(response.status == "Success"){
      //   Swal.fire({
        //     position: "top-end",
        //     title: response.message,
        //     showConfirmButton: false,
        //     timer: 1500
        //   });
    // }
  }

  
  function ChangeCartHandler(id: number){
    if(!isOnline){
      if(data !== null) {
        const newData = data.filter(n => n.id !== id);
        setData(newData);
      }
    }else if(isOnline) {
      fetchData();
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [isOnline])

  useEffect(() => {
    console.log(prevOnlineStatus.current);
    console.log(isOnline);

    if (prevOnlineStatus.current === true && isOnline) {
      updateCart();
    }

    prevOnlineStatus.current = isOnline;
  }, [isOnline]);
  
  if (loading) return <Loading />;
  if (error) return <p>Error: {error} </p>;


  return (
    <Container>
      <Row>
        <Col lg="12">
          <table className="cart-content_table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data !== null ? data?.map((product) => (
                <CartProduct
                  handler={ChangeCartHandler}
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  imageUrl={product.image.imageUrl}
                />)) : <Loading />}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default CartTable;
