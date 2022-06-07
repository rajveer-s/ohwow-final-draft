import React from 'react'
import './Joshyfig.css';

const Joshyfigure = () => {
  return (
    <div className='figurebody'>
      <figure>
        <img className='figureimg' src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/577128/toucan-by-william-warby.jpg" alt="profile pic" />
          <figcaption>
            <span>Fig.1</span>
            <span>Tou</span>
            <span>Can</span>
            <span>(/tukæn/, UK: /-kən/)</span>
          </figcaption>
      </figure>
    </div>
  )
}

export default Joshyfigure