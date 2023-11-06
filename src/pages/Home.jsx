import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import Electronics from '../component/Electronics'
import Women from '../component/Women'
import LastPage from '../component/LastPage'

const Home = ({cart,handleAddToCart, setCart}) => {
  useEffect(()=>{
    document.title = 'Home | Page';
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  })
  return (
    <div className='container'>
      <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
      <Electronics cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
      <Women handleAddToCart={handleAddToCart} />
      <LastPage/>

    </div>
  )
}

export default Home