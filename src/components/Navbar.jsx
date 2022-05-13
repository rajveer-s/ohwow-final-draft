import React from 'react'
import backImg from '../assets/img/bg.png'

const Navbar = () => {
    return (
        <div className="container1">
            <div id="navbar">
                <ul className='nav-ul'>
                    <a className='hover-underline-animation' href="/">CREATIVE</a>
                    <img className='backImg' src={backImg} />
                    <a className='hover-underline-animation' href="/skills">ROASTER</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar


// use state variablen to set hovering over logo 

// it will use MouseEnter and MouseLeave react properties.