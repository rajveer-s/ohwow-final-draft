import React from 'react';

const Creative = () => {
  return (
    <div className='container3'>
      <video muted loop autoPlay id='myVideo'>
        <source
          src="https://www.w3schools.com/howto/rain.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="rosterTitle fade-in-text">
        <h3>CREATIVE</h3>
        <div className="rosterNames fade-in-text">
          <ul>
            <li className='menu-bars'> M3F 
            </li>
            <li className='menu-bars'> PTS GROWS
            </li>
            <li className='menu-bars'> RANCH RIDER
            </li>
            <li className='menu-bars'> ASSISTANTS VS. AGENTS
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Creative