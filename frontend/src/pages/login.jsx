import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/auth.css'

function LoginPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:3500/auth/login', formData);
            setSuccess(response.data.message);



            localStorage.setItem('accessToken', response.data.tokens.accessToken);
            localStorage.setItem('refreshToken', response.data.tokens.refreshToken);

            sessionStorage.setItem('accessToken', response.data.tokens.accessToken);
            sessionStorage.setItem('refreshToken', response.data.tokens.refreshToken);
            
            navigate('/dashboard');

        } catch (err) {
            if (err.response) {
                setError(err.response.data.message);
            } else {
                setError('Server error!');
            }
        }
    };

    return (
        <div className="allauth">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;