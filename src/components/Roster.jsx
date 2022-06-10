import React from "react";
import { Link } from 'react-router-dom';
import Piano from "../assets/img/thompianotwo.mp4";

const Roster = () => {
  return (
    <div>
      <video autoPlay muted loop id="myVideo" className="fade-in-image">
        <source src={Piano} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="rosterTitle fade-in-text">
        <h3>ROSTER</h3>
        <div className="rosterNames fade-in-text">
          <ul>
            <li>
              <Link to='/joshysoul' className='menu-bars'>JOSHY SOUL</Link>
            </li>
            <li>
            <Link to='/thomko' className='menu-bars'>THOM.KO</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roster;
