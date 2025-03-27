import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/homepage.css'


function HomePage(){

    const navigate= useNavigate();

    const handleRegisterClick = () => {
        navigate('/register'); 
    };

    const handleLoginClick = () => {
        navigate('/login');
    };


    return(
        <div className="allhome">

            <div className="headerhome">
                <h1 className="brand">Shorty</h1>

                <div className="authhome">
                    <h2 className="register" onClick={handleRegisterClick}>Register</h2>
                    <h2 className="login" onClick={handleLoginClick}>Login</h2>
                </div>
            </div>

            <div className="firstimpress">
                <p className="purpose">Free url shortening service</p>
                <p className="slogan">Shorten your url and start earning!</p>
            </div>

            <div className="features">
                <p className="details">Earn by every click</p>
                <p className="details">Track statics from dashboard</p>
                <p className="details">Advertise and introduce your brand</p>
                <p className="startnow" onClick={handleRegisterClick}>Start now</p>
            </div>


            <div className="telling">

                <div class="homeicon">
                    <div class="icon easy"></div>
                    <h3>Easy</h3>
                    <p>Shorty is easy and fast, enter the long link to get your shortened link</p>
                </div>

                <div class="homeicon">
                    <div class="icon shortened"></div>
                    <h3>Shortened</h3>
                    <p>Use any link, no matter what size, Shorty always shortens</p>
                </div>

                <div class="homeicon">
                    <div class="icon secure"></div>
                    <h3>Secure</h3>
                    <p>It is fast and secure, our service has HTTPS protocol and data encryption</p>
                </div>
                <div class="homeicon">
                    <div class="icon statistics"></div>
                    <h3>Statistics</h3>
                    <p>Check the number of clicks that your shortened URL received</p>
                </div>
                <div class="homeicon">
                    <div class="icon reliable"></div>
                    <h3>Reliable</h3>
                    <p>All links that try to disseminate spam, viruses and malware are deleted</p>
                </div>
                <div class="homeicon">
                    <div class="icon devices"></div>
                    <h3>Devices</h3>
                    <p>Compatible with smartphones, tablets and desktop</p>
                </div>

            </div>

            <hr />

            <div className="givead">
                    <h2 className="ads">Give ads and increase popularity</h2>
            </div>

            <div className="footer">
                Shorty © Copyright 2025
                <p className="footerdetail">Terms & Conditions</p>
                <p className="footerdetail">Privacy / Cookie Policy</p>
                <p className="footerdetail">Anti Spam Policy</p>

            </div>

        </div>
    )




}

export default HomePage