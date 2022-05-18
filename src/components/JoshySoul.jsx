import React from 'react'
import curvyimg from '../assets/img/homeimg.png'
import './josh.css';
import a from '../assets/img/a.png'
import backbutton from '../assets/img/backbuttoncolor.png'
import { Link } from 'react-router-dom';


const style = {
    height: "100vh",
    background: "white",
    color: "black"
}

const JoshySoul = () => {
  return (
    <div style={style}> 
        <div className="backbutton">
            <Link to="/roster"><img src={backbutton} alt="back button img" /></Link>
            

        </div>
    </div>
  )
}

export default JoshySoul;
