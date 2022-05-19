import React, { useEffect } from 'react'
import Navbar from './Navbar';
import c from '../assets/img/bolt.png'
import c2 from '../assets/img/bg.png'
import background from '../assets/data/backgroundimg';




const Image = () => {
  
  const backimg = background[Math.floor(Math.random() * background.length)]

  const backimg2 = background[Math.floor(Math.random() * background.length)]
 
  useEffect(() => { 
     window.reload = {backimg, backimg2}
  }, []);



    console.log (backimg);
  return (
    <div>
      <img className='backgroundimg slide-in-left' src={backimg.img} />
      <img className='backgroundimg2 slide-in-right' src={backimg2.img} />
      <div className="container">
        
      <div className="pageLogo tracking-in-expand-fwd-bottom">
    <p>OH WOW COMPANY</p>
      </div>
      </div>
      </div>
  )
}

export default Image