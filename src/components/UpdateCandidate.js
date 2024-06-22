import React, { useEffect, useState } from 'react';
import { getCandidate, updateCandidate } from '../services';
import CandidateForm from './CandidateForm';
import { useParams } from "react-router-dom";

const UpdateCandidate = () => {
    const { candidateId } = useParams();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        const fetchCandidate = async () => {
            const response = await getCandidate(candidateId);
            setInitialData(response.candidate);
        };
        fetchCandidate();
    }, [candidateId]);

    const handleUpdate = async (formData) => {
        return await updateCandidate(candidateId, formData);
    };

    return (
        <>
            {initialData && <CandidateForm initialData={initialData} onSubmit={handleUpdate} />}
        </>
    );
};

export default UpdateCandidate;
