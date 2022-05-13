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
      <div className="list">
        <a href='https://www.google.com'><h1>M3F</h1></a>
        
        <a href='https://www.facebook.com'><h3>PTF GROWS</h3></a>
      </div>
    </div>
  )
}

export default Creative