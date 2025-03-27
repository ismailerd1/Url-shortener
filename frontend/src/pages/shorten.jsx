import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import '../styles/shorten.css'

function ShortenUrl() {
    const [originalUrl, setOriginalUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [ogurl, setOgurl] = useState('');
    const navigate = useNavigate();

    const accessToken = sessionStorage.getItem('accessToken');

    const handleUrlSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3500/url/shorten', { originalurl: originalUrl },{
                headers: {
                    'Authorization': `Bearer ${accessToken}` 
                }                    
            });
            setShortUrl(response.data.New_url.shorturl); 
            setOgurl(response.data.New_url.originalurl); 
            console.log(response.data.New_url.shorturl);
            console.log(response.data.New_url.originalurl);
            setOriginalUrl(''); 
        } catch (error) {
            console.error('Error creating short URL:', error);
        }
    };
    const handleBrandClick = () => {
        navigate('/dashboard'); 
    };

    return (
        <div className="shorten-url-container">
            <div className="headerhome">
                <h1 className="brand" onClick={handleBrandClick}>Shorty</h1>
            </div>

            <h1 className='shortentitle'>Shorten Your URL</h1>
            <form onSubmit={handleUrlSubmit} className="shorten-url-form">
                <input 
                    type="url" 
                    value={originalUrl} 
                    onChange={(e) => setOriginalUrl(e.target.value)} 
                    placeholder="Enter original URL" 
                    required 
                />
                <button type="submit">Shorten</button>
            </form>
            {shortUrl && (
            <>
            <div className="urlscontainer">
                <div>
                    <h3>Original Url:</h3>
                    <a href={ogurl}  className='originalone' target="_blank" rel="noopener noreferrer">{ogurl}</a>
                </div>
                <div>
                    <h3>Shorten Url:</h3>
                    <a href={shortUrl}  className='shortone' target="_blank" rel="noopener noreferrer">{shortUrl}</a>
                </div>
            </div>
            </>
            )}
        </div>
    );
}

export default ShortenUrl;