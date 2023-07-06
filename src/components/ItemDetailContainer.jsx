import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

import data from "../data/products.json";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });

    promesa.then((result) => {
      setProduct(result[2]);
    });
  }, []);

  return (
    <Container className="mt-4">
      <h1>Detalle</h1>
      {product.length === 0 ? (
        <div>Loading ...</div>
      ) : (
        <ItemDetail car={product} />
      )}
    </Container>
  );
};
