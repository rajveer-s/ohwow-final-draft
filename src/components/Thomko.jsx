import React from 'react'
import "./Profile.css";
import backbutton from '../assets/img/backbutton4.png'
import { Link } from 'react-router-dom';
import thomprofile from '../assets/img/thomprofile2.jpg'


const Thomko = () => {
  return (
    <div className="profileContainer"> 
        <div className="backbutton">
            <Link to="/roster"><img src={backbutton} alt="back button img" /></Link>
        </div>
        <div className="artistDiv fade-in-text">
            
            <img className= "artistImage" src={thomprofile} alt="artist image" />
            <div className="artistInfo">
            <h1>THOM.KO</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur expedita sit, aliquam delectus tenetur asperiores alias officia voluptatem magni labore ad aliquid repudiandae repellendus debitis, eligendi praesentium maiores velit?</p>
        </div> 

        </div>
    </div>
  )
}

export default Thomko;