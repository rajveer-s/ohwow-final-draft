import React, { useEffect } from 'react'
import './yinyang.css';
import background from '../assets/data/backgroundimg';


const Yinyang = () => {

  const backimg = background[Math.floor(Math.random() * background.length)]

  const backimg2 = background[Math.floor(Math.random() * background.length)]
 
  useEffect(() => { 
     window.reload = {backimg, backimg2}
  }, []);


  return (
    
    <div className='uselessdiv'>
      
      
      <p className="logo23">
      OH WOW COMPANY
      </p>
      <div>
      <img className='backgroundimg slide-in-left' src={backimg.img} />
      <img className='backgroundimg2 slide-in-right' src={backimg2.img} />
  
      
      <div className="container12">
        <div className="yin"></div>
        <div className="yang"></div>
      </div>
    </div>
    </div>
   
  )
}

export default Yinyang