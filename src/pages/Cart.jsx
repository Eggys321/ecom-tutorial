import React, { useEffect } from 'react';
// import Card from "react-bootstrap/Card";


const Cart = ({cart,setCart}) => {
  useEffect(()=>{
    document.title = 'Cart | Page'
  })
  return (
    <div className='container'>
      <div>
        {cart.length === 0 &&(
          <div>
            <h3>No item in the cart</h3>
          </div>
        )}
      </div>
      <main>
        {cart.map((singleCart)=>{
          const {image,id,title,price,quantity,description} =singleCart
          return(
            <div key={id}>
              <div>
                <img src={image} alt={title} className='img-fluid' />
              </div>
              <div>
                <h2> {title} </h2>
                <div>
                  <h4> {quantity} * {price} </h4>
                  <div>
                    <button className="btn btn-primary">
                      increase
                    </button>
                    <button className="btn btn-primary">
                      decrease
                    </button>
                  </div>
                </div>
              </div>
              

            </div>
          )
        })}
      </main>

    </div>
  )
}

export default Cart