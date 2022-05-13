import React from 'react'
import background from '../assets/data/backgroundimg';



const image = () => {

    // const backimg = background[Math.floor(Math.random() * background.length)];
  return (
    <div>
      <div className="container">
      <div className='image'>
    <p>About Us <br /> Wow company is great. We established in 1918. We have been in this buisness for over a 100 years. </p>
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