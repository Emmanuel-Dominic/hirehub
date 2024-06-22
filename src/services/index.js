import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const homeMessage = async() => {
    try {
        const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}`);
        return response.data;
    } catch (error) {
        return `Error fetching message: ${error}`;
    }
}

export const getCandidates = async() => {
    try {
        const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}/candidates`);
        return response.data;
    } catch (error) {
        return `Error fetching candidates: ${error}`;
    }
}

export const getCandidate = async(candidateId) => {
    try {
        const response = await axiosInstance.get(`${process.env.REACT_APP_BACKEND_URL}/candidates/${candidateId}`);
        return response.data;
    } catch (error) {
        return `Error fetching candidate: ${error}`;
    }
}

export const createCandidate = async(candidateData) => {
    try {
        const response = await axiosInstance.post(`${process.env.REACT_APP_BACKEND_URL}/candidates`, candidateData);
        return response.data;
    } catch (error) {
        return `Error creating candidate: ${error}`;
    }
}

export const updateCandidate = async(candidateId, candidateData) => {
    try {
        const response = await axiosInstance.put(`${process.env.REACT_APP_BACKEND_URL}/candidates/${candidateId}`, candidateData);
        return response.data;
    } catch (error) {
        return `Error updating candidate: ${error}`;
    }
}

export const deleteCandidate = async(candidateId) => {
    try {
        const response = await axiosInstance.delete(`${process.env.REACT_APP_BACKEND_URL}/candidates/${candidateId}`);
        return response.data;
    } catch (error) {
        return `Error deleting candidate: ${error}`;
    }
}
