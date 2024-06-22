import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  homeMessage,
  getCandidates,
} from '../services';

const mockAxios = new MockAdapter(axios);

process.env.REACT_APP_BACKEND_URL = 'http://localhost:3001';

describe('Backend API Service', () => {
    afterEach(() => {
        mockAxios.reset();
    });

    it('fetches home message successfully', async () => {
        const mockData = { message: "The application for adding or updating candidate’s information", status: true };
        mockAxios.onGet(process.env.REACT_APP_BACKEND_URL).reply(200, mockData);

        const response = await homeMessage();
        expect(response).toEqual(mockData);
    });

    it('fetches candidates successfully', async () => {
        const mockData = { candidates: [{ id: 1, firstName: 'Emmanuel', lastName: 'Matembu' }] };
        mockAxios.onGet(`${process.env.REACT_APP_BACKEND_URL}/candidates`).reply(200, mockData);

        const response = await getCandidates();
        expect(response.candidates[0]).toHaveProperty('id');
        expect(response.candidates[0]).toHaveProperty('firstName');
        expect(response.candidates[0]).toHaveProperty('lastName');
        expect(response.candidates[0]).toHaveProperty('email');
        expect(response.candidates[0]).toHaveProperty('phoneNumber');
        expect(response.candidates[0]).toHaveProperty('timeInterval');
        expect(response.candidates[0]).toHaveProperty('linkedIn');
        expect(response.candidates[0]).toHaveProperty('github');
        expect(response.candidates[0]).toHaveProperty('comment');
    });
});
