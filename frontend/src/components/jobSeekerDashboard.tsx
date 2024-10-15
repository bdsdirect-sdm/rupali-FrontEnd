import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JobSeekerDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [agencyDetails, setAgencyDetails] = useState<any>(null);  

    useEffect(() => {
        const token = localStorage.getItem('token');
        const agency = localStorage.getItem('agencyDetails');

        if (!token) {
            navigate('/login'); 
        }

        if (agency) {
            setAgencyDetails(JSON.parse(agency)); 
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('agencyDetails');
        navigate('/login');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Job Seeker Dashboard</h1>
            <button onClick={handleLogout} className="btn btn-danger mb-3">
                Logout
            </button>
            <div className="card p-4 mt-3">
                <h2>Your Agency Details</h2>
                {agencyDetails ? (
                    <div>
                        <p><strong>Agency Name:</strong> {agencyDetails.firstName} {agencyDetails.lastName}</p>
                        <p><strong>Email:</strong> {agencyDetails.email}</p>
                        <p><strong>Phone:</strong> {agencyDetails.phone}</p>
                    </div>
                ) : (
                    <p>No agency associated with your profile.</p>
                )}
            </div>
        </div>
    );
};

export default JobSeekerDashboard;
