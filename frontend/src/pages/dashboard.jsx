import React, { useState, useEffect } from 'react';
import LeftNavBar from '../components/leftnavbar'
import '../styles/dashboard.css'
import axios from 'axios';

function Dashboard(){
    const [ totalClicks, setTotalClicks ] = useState(0); 
    const [ earning, setEarning ] = useState(0); 
    const [isOpen, setIsOpen] = useState(false);
    const [myLinks, setMyLinks] = useState([]);

    
    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const fetchMyLinks = async () => {
            try {
                const accessToken = sessionStorage.getItem('accessToken');
                const response = await axios.get('http://localhost:3500/url/all/myurls',{
                    headers: {
                        'Authorization': `Bearer ${accessToken}` 
                    }                    
                }); 
                setMyLinks(response.data.urls);
                console.log(response.data);
                setTotalClicks(response.data.totalClicks);
            } catch (error) {
                console.error('Error fetching my links:', error);
            }
        };
        fetchMyLinks();
    }, []);

    useEffect(() => {
        const calculateEarnings = () => {
            const earnings = totalClicks * 0.00005;
            setEarning(earnings);
        };

        calculateEarnings();
    }, [totalClicks]);

    return(
        <div className="container">  

            <button onClick={toggleDrawer} className="toggle-button">
                {isOpen ? '<' : '>'} 
            </button>

            <div className={`leftbar ${isOpen ? 'open' : 'closed'}`}>
                <LeftNavBar />
            </div>

            <div className="all">

                <div className='parameters'>
                    <div className="clicks"> 
                        <h1>Clicks: {totalClicks}</h1>
                        <h1>Earnings: {earning} $</h1>
                    </div>
                </div>

                <div className="mylinks">
                    <h1>My links</h1>
                    <div className="link details">
                        <div className='link detail'>
                            <h3>Original link</h3>
                            <h3>Short link</h3>
                            <h3>View</h3>
                            <h3>Created at</h3>
                        </div>
                        {myLinks.map(link => (
                            <div className='link detail' key={link._id}>
                                <p>
                                    <a href={link.originalurl} target="_blank" rel="noopener noreferrer">
                                        {link.originalurl}
                                    </a>
                                </p>
                                <p>
                                    <a href={link.shorturl} target="_blank" rel="noopener noreferrer">
                                        {link.shorturl}
                                    </a>
                                </p>
                                <p>{link.clicks}</p>
                                <p>{new Date(link.date).toLocaleDateString('en-CA')}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>  
    )


}

export default Dashboard