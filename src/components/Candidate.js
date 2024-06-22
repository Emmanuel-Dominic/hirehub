import React, { useState, useEffect } from "react";
import UpdateCandidate from "./UpdateCandidate";
import { getCandidate } from "../services";
import { useParams } from "react-router-dom";

const Candidate = () => {
    const { candidateId } = useParams();
    const [candidate, setCandidate] = useState(null);

    useEffect(() => {
        const fetchCandidate = async () => {
            const response = await getCandidate(candidateId);
            setCandidate(response.candidate);
        }
        fetchCandidate();
    }, [candidateId]);

    return (
        <div>
            {candidate ? (
                <>
                    <h2>Candidate Details</h2>
                    <ul>
                        <li><strong>FirstName: </strong>{candidate.firstName}</li>
                        <li><strong>LastName: </strong>{candidate.lastName}</li>
                        <li><strong>Email: </strong>{candidate.email}</li>
                        <li><strong>PhoneNumber: </strong>{candidate.phoneNumber}</li>
                        <li><strong>TimeInterval: </strong>{candidate.timeInterval}</li>
                        <li><strong>LinkedIn: </strong>{candidate.linkedIn}</li>
                        <li><strong>Github: </strong>{candidate.github}</li>
                        <li><strong>Comment: </strong>{candidate.comment}</li>
                    </ul>
                    <UpdateCandidate />
                </>
            ) : (
                <h4>Candidate Not Found!</h4>
            )}
        </div>
    );
}

export default Candidate;
