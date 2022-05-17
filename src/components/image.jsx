import React from 'react'
import background from '../assets/data/backgroundimg';
import Navbar from './Navbar';



const image = () => {

    // const backimg = background[Math.floor(Math.random() * background.length)];
  return (
    <div>
      <Navbar />
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