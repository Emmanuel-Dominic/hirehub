import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';
import MockAdapter from 'axios-mock-adapter';
import axiosInstance from './helpers/axiosConfig';

const mock = new MockAdapter(axiosInstance);

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.clearAllTimers();
    mock.reset();
});

test('renders message from header', async() => {
    const mockResp = { status: true, message: "The application for adding or updating candidate’s information" };
    mock.onGet(`${process.env.REACT_APP_BACKEND_URL}/`).reply(200, mockResp);
    await act(async () => {
        render(<App />);
    });
    const headerElement = screen.getByText(/The application for adding or updating candidate’s information/i);
    await expect(headerElement).toBeInTheDocument();
});
