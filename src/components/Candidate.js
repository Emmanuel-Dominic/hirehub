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
        <div className="d-flex row">
            {candidate ? (
                <>
                    <div className="col-md-4 col-sm-12 m-1">
                        <h2>Candidate Details</h2>
                        <ul className="list-group">
                            <li className="list-group-item"><strong>FirstName: </strong>{candidate.firstName}</li>
                            <li className="list-group-item"><strong>LastName: </strong>{candidate.lastName}</li>
                            <li className="list-group-item"><strong>Email: </strong>{candidate.email}</li>
                            <li className="list-group-item"><strong>PhoneNumber: </strong>{candidate.phoneNumber}</li>
                            <li className="list-group-item"><strong>TimeInterval: </strong>{candidate.timeInterval}</li>
                            <li className="list-group-item"><strong>LinkedIn: </strong>{candidate.linkedIn}</li>
                            <li className="list-group-item"><strong>Github: </strong>{candidate.github}</li>
                            <li className="list-group-item"><strong>Comment: </strong>{candidate.comment}</li>
                        </ul>
                    </div>
                    <div className="col-md-7 col-sm-12 m-1">
                        <UpdateCandidate />
                    </div>
                </>
            ) : (
                <h4>Candidate Not Found!</h4>
            )}
        </div>
    );
}

export default Candidate;
