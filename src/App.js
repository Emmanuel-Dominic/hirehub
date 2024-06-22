import React, { useState, useEffect } from 'react';
import axiosInstance from './helpers/axiosConfig';


const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchMessage = async() => {
            try {
                const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}`);
                setMessage(response.data.message);
            } catch (error) {
                setMessage(error.message);
            }
        }
        fetchMessage();
    }, []);
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;
