import React from 'react'
import './Profile.css';
import backbutton from '../assets/img/backbuttoncolor.png'
import { Link } from 'react-router-dom';
import thomprofile from '../assets/img/thomprofile.TIF'


const style = {
    height: "100vh",
    background: "white",
    color: "black"
}

const Thomko = () => {
  return (
    <div style={style}> 
        <div className="backbutton">
            <Link to="/roster"><img src={backbutton} alt="back button img" /></Link>
        <div className="artistImage">
            <img src={thomprofile} alt="artist image" />
        </div>
            

        </div>
    </div>
  )
}

export default Thomko;