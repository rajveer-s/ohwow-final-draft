import React from 'react'
import background from '../assets/data/backgroundimg';
import Navbar from './Navbar';
import c from '../assets/img/bolt.png'
import c2 from '../assets/img/bg.png'



const image = () => {

    // const backimg = background[Math.floor(Math.random() * background.length)];
  return (
    <div>
      <img className='backgroundimg slide-in-left' src={c} />
      <img className='backgroundimg2 slide-in-right' src={c2} />
      <div className="container">
        
      <div className="pageLogo tracking-in-expand-fwd-bottom">
    <p>OH WOW COMPANY</p>
      </div>
      </div>
        {/* {background.map((backImg, index) => {
            if (index < 1) {
                return;    
            }
        return <img src={backImg.img} />
      })} */}
      </div>
  )
}

export default image