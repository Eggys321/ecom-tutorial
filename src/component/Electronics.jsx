import React from 'react';
import '../styles/Electronics.css'
import useFetch from '../customHook/useFetch';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../utils/Loader";
const Electronics = ({cart,setCart,handleAddToCart}) => {
    const {data,Loading} = useFetch('https://fakestoreapi.com/products/category/electronics');
    const notify = () => {
        toast.success('An item has been added !', {
          position: toast.POSITION.TOP_CENTER,
        })
      }
  return (
    <div>
        <div className="component-title-electronics">
            <h2>ELECTRONICS CATEGORY</h2>
        </div>
            {/* card section */}
            <div className="">
          <div className="row">
            {data.map((datumElectronics) => {
              const { id, title, image, price } = datumElectronics;
              return (
                <div key={id} className=" col-sm-5 col-md-4   ">
                  <Card style={{ width: "",height:"" }}>
                    <Link to={`/SingleProduct/${id}`}>
                    
                    <Card.Img
                      variant="top"
                      src={image}
                      className=" "
                    />
                    </Link>
                    <Card.Body>
                      <Card.Title> {title.slice(0, 5)} </Card.Title>
                      <Card.Text>${price}</Card.Text>
                      <Button onClick={()=>{handleAddToCart(datum2);notify()}} variant="primary" className="btn-sm">Add To Cart
                      </Button>
                      <ToastContainer/>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

    </div>
  )
}

export default Electronics