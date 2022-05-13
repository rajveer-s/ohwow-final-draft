import React from 'react'
import backImg from '../assets/img/bg.png'

const Navbar = () => {
    return (
        <div className="container1">
            <div id="navbar">
                <ul className='nav-ul'>
                    <a className='hover-underline-animation' href="/creative">CREATIVE</a>
                    <a href="/">
                    <img className='backImg' src={backImg} /></a>
                    <a className='hover-underline-animation' href="/roster">ROSTER</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar


// use state variablen to set hovering over logo 

// it will use MouseEnter and MouseLeave react properties.