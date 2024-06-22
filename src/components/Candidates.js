import React, { useEffect, useState } from "react";
import CreateCandidate from "./CreateCandidate";
import { getCandidates, deleteCandidate } from "../services";
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

    const handleDelete = async (candidateId) => {
        await deleteCandidate(candidateId);
        setCandidates(candidates.filter(candidate => candidate.id !== candidateId));
    }

    return(
        <>
            <CreateCandidate />
            {candidates && candidates.length>0 ? (<table>
                <thead>
                    <tr>
                        <td>ID</td>
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
                        <td><button onClick={() => handleDelete(candidate.id)}>Delete</button></td>
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
