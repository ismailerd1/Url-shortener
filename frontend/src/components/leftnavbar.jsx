import React from 'react';
import '../styles/LeftNavbar.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const LeftNavBar = () => {

    return (

            <nav className="navbar">
                <h1 className='navbarbrand'>SHORTY</h1>
                <ul className='bigg'>
                    <li className='lili'><Link to="/">Home</Link></li>
                    <li className='lili'><Link to="/shorten">Shorten url</Link></li>
                    <li className='lili'><Link to="/mylinks">My links</Link></li>
                    <li className='lili'><Link to="/about">About</Link></li>
                    <li className='lili'><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

    );
};

export default LeftNavBar;