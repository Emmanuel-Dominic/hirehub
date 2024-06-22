import React, { useState, useEffect } from 'react';
import { homeMessage } from '../services/index';

const Home = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const fetchMessage = async() => {
            try {
                const response = await homeMessage()
                setMessage(response.message);
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

export default Home;
