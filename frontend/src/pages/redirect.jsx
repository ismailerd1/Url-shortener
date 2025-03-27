import React, { useEffect, useState } from 'react';
import '../styles/redirect.css'

const Redirect = () => {
    const  shortUrl  = window.location.pathname;
    const fullshorturl = `http://localhost:5173${shortUrl}`
    const encodedShortUrl = encodeURIComponent(fullshorturl);

    const [countdown, setCountdown] = useState(5); 
    const [originalUrl, setOriginalUrl] = useState(''); 
    const [showButton, setShowButton] = useState(false); 

    useEffect(() => {
        const fetchUrl = async () => {
            try {
                const response = await fetch(`http://localhost:3500/redirect/${encodedShortUrl}`);
                const data = await response.json();
                
                if (response.ok) {
                    setOriginalUrl(data.originalurl);
                } else {
                    console.error(data.error);
                }
            } catch (err) {
                console.error('Fetch error:', err);
            }
        };

        fetchUrl();

        const interval = setInterval(() => {
            setCountdown((prev) => {
                if (prev === 1) {
                    clearInterval(interval);
                    setShowButton(true); 
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [shortUrl]);

    const handleHome = () => {
        window.location.href = "http://localhost:5173/"; 
    };

    const handleRedirect = () => {
        window.location.href = originalUrl; 
    };

    return (
        <div className="allredirect">
            <div className="headerredirect">
                <h1 className="brandd" onClick={handleHome}>Shorty</h1>
                <div className="countdownlink">{showButton ? (
                <div>
                    <div onClick={handleRedirect} style={{ cursor: 'pointer' }}>Go to Link</div>
                </div>
                ) : (<div>
                    <p>You will be redirected in {countdown} seconds.</p></div>
                )}</div>
            </div>

            <div className="ad-space">
                <p>Ad Space: Your Ad will appear here!</p>
            </div>
            <div className="columns">
            <div className="firstcolumn">
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
            </div>
            <div className="secondcolumn">
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
                <div className="adwindow">
                        <div className="icon shortened"></div>
                        <h3>Ads area</h3>
                        <p>Give ads to us and make your brand more known!</p>
                </div>
            </div>
            </div>

            <div className="footer">
                Shorty © Copyright 2025
                <p className="footerdetail">Terms & Conditions</p>
                <p className="footerdetail">Privacy / Cookie Policy</p>
                <p className="footerdetail">Anti Spam Policy</p>

            </div>


        </div>
    );
};

export default Redirect;