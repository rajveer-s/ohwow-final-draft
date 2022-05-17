import React from "react";
import Piano from "../assets/img/thompianotwo.mp4";

const Roster = () => {
  return (
    <div>
      <video autoPlay muted loop id="myVideo" className="fade-in-image">
        <source src={Piano} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="rosterTitle fade-in-text">
        ROSTER
        <div className="rosterNames fade-in-text">
          <ul>
            <li>
              <a href="https://www.instagram.com/joshysoul/" target="_blank">
                JOSHY SOUL
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thom.ko_/" target="_blank">
                THOM.KO
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/vhscollection/"
                target="_blank"
              >
                VHS COLLECTION
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/moderneyesofficial/"
                target="_blank"
              >
                MODERN EYES
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roster;
