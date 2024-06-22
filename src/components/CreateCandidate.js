import React from 'react';
import { createCandidate } from '../services';
import CandidateForm from './CandidateForm';

const CreateCandidate = () => {
    const handleCreate = async (formData) => {
        return await createCandidate(formData);
    };

    return <CandidateForm onSubmit={handleCreate} />;
};

export default CreateCandidate;
