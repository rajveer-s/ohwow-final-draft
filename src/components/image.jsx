import React from 'react'
import background from '../assets/data/backgroundimg';
import Navbar from './Navbar';
import c from '../assets/img/bolt.png'
import c2 from '../assets/img/bg.png'



const image = () => {

    // const backimg = background[Math.floor(Math.random() * background.length)];
  return (
    <div>
      <img className='backgroundimg' src={c} />
      <img className='backgroundimg2' src={c2} />
      <div className="container">
        
      <div className="pageLogo">
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