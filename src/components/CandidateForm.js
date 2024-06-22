import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';


const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (e) {
        return false;
    }
};

const CandidateForm = ({ initialData = {}, onSubmit }) => {
    const { candidateId } = useParams();
    // const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        timeInterval: '',
        linkedIn: '',
        github: '',
        comment: '',
        ...initialData
    });
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData && Object.keys(initialData).length > 0) {
            setFormData(initialData);
        }
    }, [initialData]);
    
    const validateField = (name, value) => {
        const errorsArray = { ...errors };

        switch (name) {
            case 'firstName':
                if (!value || typeof value !== 'string' || value.trim() === '') {
                    errorsArray.firstName = 'First name is required and must be a non-empty string.';
                } else if (value.length < 3) {
                    errorsArray.firstName = 'First name must be at least 3 characters long.';
                } else {
                    delete errorsArray.firstName;
                }
                break;
            case 'lastName':
                if (!value || typeof value !== 'string' || value.trim() === '') {
                    errorsArray.lastName = 'Last name is required and must be a non-empty string.';
                } else if (value.length < 3) {
                    errorsArray.lastName = 'Last name must be at least 3 characters long.';
                } else {
                    delete errorsArray.lastName;
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value || !emailRegex.test(value)) {
                    errorsArray.email = 'A valid email address is required.';
                } else {
                    delete errorsArray.email;
                }
                break;
            case 'phoneNumber':
                if (value && typeof value !== 'string') {
                    errorsArray.phoneNumber = 'Phone number must be a string.';
                } else {
                    delete errorsArray.phoneNumber;
                }
                break;
            case 'timeInterval':
                if (value && typeof value !== 'string') {
                    errorsArray.timeInterval = 'Time interval must be a string.';
                } else {
                    delete errorsArray.timeInterval;
                }
                break;
            case 'linkedIn':
                if (value && !isValidUrl(value)) {
                    errorsArray.linkedIn = 'LinkedIn profile URL must be a valid URL.';
                } else {
                    delete errorsArray.linkedIn;
                }
                break;
            case 'github':
                if (value && !isValidUrl(value)) {
                    errorsArray.github = 'GitHub profile URL must be a valid URL.';
                } else {
                    delete errorsArray.github;
                }
                break;
            case 'comment':
                if (!value || typeof value !== 'string' || value.trim() === '') {
                    errorsArray.comment = 'Free text comment is required and must be a non-empty string.';
                } else if (value.length < 5) {
                    errorsArray.comment = 'Comment must be at least 5 characters long.';
                } else {
                    delete errorsArray.comment;
                }
                break;
            default:
                break;
        }
        setErrors(errorsArray);
    };

    const validateAllFields = () => {
        const errorsObj = {};
        Object.keys(formData).forEach((field) => {
            validateField(field, formData[field]);
            if (errors[field]) {
                errorsObj[field] = errors[field];
            }
        });
        return errorsObj;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errorsList = validateAllFields();
        if (Object.keys(errorsList).length > 0) {
            setErrors(errorsList);
        } else {
            setErrors({});
            const response = await onSubmit(formData);
            setMessage(response.message);
            // navigate('/candidates');
        }
    };

    return (
        <>
            <p className="success">{message}</p>
            <form onSubmit={handleSubmit}>
                <h2>{candidateId ? 'Update Candidate' : 'Create Candidate'}</h2>
                <label>Enter your firstName:*
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName || ""}
                        onChange={handleChange}
                    />
                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                </label>
                <label>Enter your lastName:*
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                    />
                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                </label>
                <label>Enter your email:*
                    <input
                        type="text"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </label>
                <label>Enter your phoneNumber:
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber || ""}
                        onChange={handleChange}
                    />
                    {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                </label>
                <label>Enter your timeInterval:
                    <input
                        type="text"
                        name="timeInterval"
                        value={formData.timeInterval || ""}
                        onChange={handleChange}
                    />
                    {errors.timeInterval && <span className="error">{errors.timeInterval}</span>}
                </label>
                <label>Enter your linkedIn:
                    <input
                        type="text"
                        name="linkedIn"
                        value={formData.linkedIn || ""}
                        onChange={handleChange}
                    />
                    {errors.linkedIn && <span className="error">{errors.linkedIn}</span>}
                </label>
                <label>Enter your github:
                    <input
                        type="text"
                        name="github"
                        value={formData.github || ""}
                        onChange={handleChange}
                    />
                    {errors.github && <span className="error">{errors.github}</span>}
                </label>
                <label>Enter your comment:*
                    <input
                        type="text"
                        name="comment"
                        value={formData.comment || ""}
                        onChange={handleChange}
                    />
                    {errors.comment && <span className="error">{errors.comment}</span>}
                </label>
                <input type="submit" value={candidateId ? "Update" : "Create"} />
            </form>
        </>
    );
};

export default CandidateForm;
