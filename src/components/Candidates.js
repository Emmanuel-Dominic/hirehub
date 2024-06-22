import React, { useEffect, useState } from "react";
import CreateCandidate from "./CreateCandidate";
import { getCandidates } from "../services";
import { useNavigate } from 'react-router-dom';


const Candidates = () => {
    const [candidates, setCandidates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCandidate = async () => {
            const response = await getCandidates();
            setCandidates(response.candidates);
        }
        fetchCandidate();
    }, []);

    const handleView = (candidateId) => {
        navigate(`/candidates/${candidateId}`);
    }
    return(
        <>
            <CreateCandidate />
            {candidates ? (<table>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Email</td>
                        <td>PhoneNumber</td>
                        <td>View</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>
                {candidates.map((candidate, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{candidate.firstName}</td>
                        <td>{candidate.lastName}</td>
                        <td>{candidate.email}</td>
                        <td>{candidate.phoneNumber}</td>
                        <td><button onClick={() => handleView(candidate.id)}>View</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>):
            (<h2>No Candidates Found!</h2>)
            }
        </>
    )
}

export default Candidates;
