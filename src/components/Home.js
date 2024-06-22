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
        <div className='mt-4'>
            <h1 className='text-center'>{message}</h1>
        </div>
    );
}

export default Home;
