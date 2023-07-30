import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartproducts = useSelector((state) => state.cart);
  const RemoveItem = (product) => {
    dispatch(remove(product));
  };
  const cards = cartproducts.map((product) => {
    return (
      <div className="col-md-12" style={{ marginBottom: "15px" }}>
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
              variant="danger"
              onClick={() => RemoveItem(product.id)}
            >
              Remove Item
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return <div className="row">{cards}</div>;
};
export default Cart;
