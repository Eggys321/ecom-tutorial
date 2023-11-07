import React, { useContext } from 'react';
import '../styles/Electronics.css'
import useFetch from '../customHook/useFetch';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CartContext from '../context/CartContext';



const Electronics = () => {
  const {handleAddToCart} = useContext(CartContext)
  const {data,loading} = useFetch('https://fakestoreapi.com/products/category/electronics')
  const notify = () => {
    toast("An item has been added",{
      position:toast.POSITION.TOP_CENTER
    });
  };
  return (
    <div>
      <div className='component-title'>
        <h2>ELECTRONICS CATEGORY</h2>
      </div>
      <main className='card-container-electronics my-4'>
        {data.map((datumElectronics)=>{
          const{id,image,price,title} = datumElectronics
          return(
            <div key={id} className='text-center  card-inner-electronics '>
              <Card style={{ width: "100%" }}>
                    <Link to={`/SingleProduct/${id}`}>
                    
                    <Card.Img
                      variant="top"
                      src={image}
                      className="w-75 pt-2"
                    />
                    </Link>
                    <Card.Body>
                      <Card.Title> {title.slice(0, 15)} </Card.Title>
                      <Card.Text className='fw-bold text-danger'>${price}</Card.Text>
                      <Button onClick={()=>{handleAddToCart(datumElectronics);notify()}} variant="primary" className="btn-sm">Add To Cart
                      </Button>
                      <ToastContainer/>
                    </Card.Body>
                  </Card>

            </div>
          )
        })}

      </main>
    </div>
  )
}

export default Electronics