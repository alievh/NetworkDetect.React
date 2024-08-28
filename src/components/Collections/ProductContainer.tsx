import React, { useEffect, useState } from "react";
import Container from "../Bootstrap/Container.tsx";
import Row from "../Bootstrap/Row.tsx";
import Col from "../Bootstrap/Col.tsx";
import SingleProduct from "./SingleProduct.tsx";
import { ProductModel } from "../../interfaces/Models.tsx";
import { BASE_URL } from "../../utils/BaseUrl.tsx";
import Loading from "../Loading/Loading.tsx";
import { getFromLocalStorage, setToLocalStorage } from "../../utils/LocalStorage.tsx";
import { useNetworkStatus } from "../../hooks/useNetworkStatus.tsx";

const ProductContainer: React.FC = () => {
  const [data, setData] = useState<ProductModel[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const isOnline = useNetworkStatus();

  const fetchData = async () => {
    setLoading(true);

    if(!isOnline){
      setData(getFromLocalStorage("products"));
      setLoading(false);
    }else {
      try {
        const response = await fetch(`${BASE_URL}/product`, {method: "GET",
          headers: {
            "Content-Type": "application/json",
          },});
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        if(result !== undefined){
          setToLocalStorage<ProductModel[]>("products", result);
        }
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>Error: {error} </p>;

  return (
    <Container>
      <Row>
        {data?.map((product) => (
          <Col key={product.id} xl="3">
            <SingleProduct
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              isNew={true}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductContainer;
