import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import Card from "react-bootstrap/Card";
import Loader from "../utils/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";


const SingleProduct = ({cart,handleAddToCart}) => {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://fakestoreapi.com/products/${id}`);
  console.log(id);

  
  const { title, price, image, description} = data;
  useEffect(()=>{
    document.title = `product | ${title}`
  })
  const notify = () => {
    toast("An item has been added",{
      position:toast.POSITION.TOP_CENTER
    });
  };
  
  return (
    <>
      <div className="container">
        <h2>{loading && <Loader/>} </h2>
        <div className="row justify-content-between align-items-center mt-4">
          <div className="col-sm-12 text-center col-md-4">
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" src={image} className="img-fluid " />
            </Card>
          </div>

          <div className="col-sm-12 col-md-7">
            <h1 className="text-danger fw-bold"> {title} </h1>
            <h4 className="text-success lh-base"> {description} </h4>
            <h3> ${price} </h3>
          <button onClick={()=>{handleAddToCart(data);notify()}} className="btn btn-primary w-50 fs-3">Add to cart</button>
          <ToastContainer/>
          </div>
          {/* <div className="">

          </div> */}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
