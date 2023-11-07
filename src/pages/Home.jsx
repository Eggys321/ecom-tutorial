import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import Electronics from '../component/Electronics'
import Women from '../component/Women'
import LastPage from '../component/LastPage'

const Home = () => {
  useEffect(()=>{
    document.title = 'Home | Page';
    
  })
  return (
    <div className='container'>
      <Hero />
      <Electronics />
      <Women/>
      <LastPage/>
      {/* <Hero cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
      <Electronics cart={cart} handleAddToCart={handleAddToCart} setCart={setCart}/>
      <Women handleAddToCart={handleAddToCart} />
      <LastPage/> */}

    </div>
  )
}

export default Home