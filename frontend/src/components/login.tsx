import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
const Login: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:7018/api/login', formData);
            const {token,associatedJobSeekers,agencyDetails}=response.data;
            
            if(token){
                localStorage.setItem('token',token)
                console.log(associatedJobSeekers, '          associatedJobSeekers......')
                if(associatedJobSeekers)
                    {
                        console.log('1111111111')
                        localStorage.setItem('associatedJobSeekers',JSON.stringify(associatedJobSeekers));
                        alert('login successful');
                        navigate('/agencyprofile')
                    }
                    else if(agencyDetails)
                    {
                        console.log('2222222222222')
                        localStorage.setItem('agencyDetails',JSON.stringify(agencyDetails));
                        alert('login successful');
                        navigate('/jobseekerdashboard');
                    }
                    else{
                        console.log('333333333333')
                        alert('login successful');
                        navigate('/jobseekerdashboard');
                    }
            }
            else{
                alert('login failed, no token recieved')
            }
            
        } catch (error) {
           
            if (axios.isAxiosError(error) && error.response) {
                setError(error.response.data.message || 'Invalid email or password. Please try again.');
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="login-container">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit} className="login-form shadow-lg p-4 rounded">
                {error && <div className="alert alert-danger">{error}</div>}
                <div className="mb-3">
                    <input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="form-control form-input"
                    />
                </div>
                <div className="mb-3">
                    <input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        required
                        placeholder="Password"
                        className="form-control form-input"
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="mt-3 text-center">
                    <a href="/signup" className="signup-link">Don't have an account? Sign Up</a>
                </div>
            </form>
        </div>
    );
};

export default Login;
