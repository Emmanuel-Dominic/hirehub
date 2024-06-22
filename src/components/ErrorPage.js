import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>PAGE NOT FOUND</h2>
            <p>Please, navigate back to the home page:</p>
            <ul>
                <li><Link to="/">Go to Home</Link></li>
            </ul>
        </div>
    );
}

export default ErrorPage;
