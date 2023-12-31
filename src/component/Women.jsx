import React, { useContext } from "react";
import "../styles/Women.css";
import useFetch from "../customHook/useFetch";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CartContext from "../context/CartContext";

const Women = () => {
  const { handleAddToCart } = useContext(CartContext);
  const { data, loading } = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  const notify = () => {
    toast("An item has been added", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div>
      <div className="component-title">
        <h2>WOMEN CATEGORY</h2>
      </div>
      <main className="card-container-women my-2">
        {data.map((datumWomen) => {
          const { id, image, price, title } = datumWomen;
          return (
            <div key={id} className="card-container-data shadow p-1">
              <Card style={{ width: "12rem" }}>
                <Card.Title> {title.slice(0, 30)} </Card.Title>
                <Link to={`/SingleProduct/${id}`}>
                  <Card.Img variant="top" src={image} className="w-75 pt-3" />
                </Link>
                <Card.Body>
                  <Card.Text className="fw-bold text-danger">
                    ${price}
                  </Card.Text>
                  <Button
                    onClick={() => {
                      handleAddToCart(datumWomen);
                      notify();
                    }}
                    variant="primary"
                    className="btn-sm"
                  >
                    Add To Cart
                  </Button>
                  <ToastContainer />
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Women;
