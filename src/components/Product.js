import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import { StatusCode } from "./../utils/StatusCode";

const Products = () => {
  const { data: products, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status == StatusCode.LOADING) {
    return <p>Loading........</p>;
  }
  if (status == StatusCode.ERROR) {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong!! Please try again later
      </Alert>
    );
  }
  const AddToCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => {
    return (
      <div className="col-md-2" style={{ marginBottom: "15px" }}>
        <Card className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              className="img"
            ></Card.Img>
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            {" "}
            <Button
              className="text-center"
              variant="primary"
              onClick={() => AddToCart(product)}
            >
              Add To Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div className="text-center">
      <h1>Products dashboard</h1>
      <div className="row" style={{ marginLeft: "10px" }}>
        {cards}
      </div>
    </div>
  );
};

export default Products;
