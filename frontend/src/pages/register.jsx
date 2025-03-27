import React, { useState } from "react";
import axios from "axios"
import '../styles/auth.css'


function Registerpage  () {
    const[ formData, setFormData ] = useState({
        username: '',
        firstname: '',
        lastname: '',
        password: ''
    })

    const[ error, setError ] = useState('')
    const[ success, setSuccess ] = useState('')

    const handleChange = (e) => {
        const { name,value } = e.target 
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        try {
            const response = await axios.post('http://localhost:3500/auth/register', formData)
            setSuccess(response.data.message)
            setFormData({ username: '', firstname: '', lastname: '', password: '' })

            sessionStorage.setItem('accessToken', response.data.tokens.accessToken);
            sessionStorage.setItem('refreshToken', response.data.tokens.refreshToken);
            navigate('/dashboard');


        } catch (err) {
            if (err.response) {
                setError(err.response.data.message)
            } else {
                setError('Server error!');
            }
        }
    }

    return (
        <div className="allauth">
            <h2>Register</h2> 
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
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
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
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
                <button type="submit">Register</button> 
            </form>
        </div>
    );
}





export default Registerpage