import React from 'react'
import Piano from '../assets/img/thompiano.mp4'

const Roster = () => {
  return (
    <div>
    <video autoPlay muted loop id="myVideo">
  <source src={Piano} type="video/mp4"/>
  Your browser does not support HTML5 video.
</video>
    <div className="rosterTitle">Roster
    <div className="rosterNames">
        <ul>
            <li><a href='https://www.instagram.com/joshysoul/'target='_blank'>Joshy Soul</a></li>
            <li><a href='https://www.instagram.com/vhscollection/'>VHS Collection</a></li>
            <li><a href='https://www.instagram.com/thom.ko_/'>thom-ko</a></li>
            <li><a href='https://www.instagram.com/moderneyesofficial/'>Modern Eyes</a></li>
        </ul>
        </div>
        </div>
        </div>
  )
}

export default Roster